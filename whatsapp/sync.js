import { UnipileClient } from 'unipile-node-sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const CHAT_FILE = path.join(__dirname, 'park-day-1st-grade.txt');
const CHAT_NAME = 'Park Day 1st Grade Parents'; // Used to find the chat in Unipile

// Parse WhatsApp export timestamp: [M/D/YY, H:MM:SS AM/PM]
function parseWhatsAppTimestamp(line) {
  const match = line.match(/^\[(\d{1,2}\/\d{1,2}\/\d{2}), (\d{1,2}:\d{2}:\d{2}\s*[AP]M)\]/);
  if (!match) return null;

  const [, datePart, timePart] = match;
  const [month, day, year] = datePart.split('/').map(Number);
  const fullYear = 2000 + year;

  // Parse time
  const timeMatch = timePart.match(/(\d{1,2}):(\d{2}):(\d{2})\s*([AP]M)/i);
  if (!timeMatch) return null;

  let [, hours, minutes, seconds, ampm] = timeMatch;
  hours = parseInt(hours);
  if (ampm.toUpperCase() === 'PM' && hours !== 12) hours += 12;
  if (ampm.toUpperCase() === 'AM' && hours === 12) hours = 0;

  return new Date(fullYear, month - 1, day, hours, parseInt(minutes), parseInt(seconds));
}

// Format Unipile message to WhatsApp export format
function formatMessage(msg, senderName) {
  const date = new Date(msg.timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear() % 100;
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const timestamp = `[${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${ampm}]`;

  let text = msg.text || '';
  if (msg.attachments && msg.attachments.length > 0) {
    text = text || '<media omitted>';
  }

  return `${timestamp} ${senderName}: ${text}`;
}

// Get the most recent timestamp from existing chat file
function getLatestTimestamp() {
  if (!fs.existsSync(CHAT_FILE)) {
    return null;
  }

  const content = fs.readFileSync(CHAT_FILE, 'utf-8');
  const lines = content.split('\n').reverse();

  for (const line of lines) {
    const timestamp = parseWhatsAppTimestamp(line);
    if (timestamp) {
      return timestamp;
    }
  }
  return null;
}

async function main() {
  // Validate environment
  if (!process.env.UNIPILE_DSN || !process.env.UNIPILE_API_KEY || !process.env.UNIPILE_WHATSAPP_ACCOUNT_ID) {
    console.error('Missing required env vars. Check .env file has:');
    console.error('  UNIPILE_DSN');
    console.error('  UNIPILE_API_KEY');
    console.error('  UNIPILE_WHATSAPP_ACCOUNT_ID');
    process.exit(1);
  }

  const dsn = process.env.UNIPILE_DSN.startsWith('https://')
    ? process.env.UNIPILE_DSN
    : `https://${process.env.UNIPILE_DSN}`;
  const client = new UnipileClient(dsn, process.env.UNIPILE_API_KEY);

  const latestTimestamp = getLatestTimestamp();
  console.log('Latest message in file:', latestTimestamp?.toISOString() || 'No existing messages');

  // Find the WhatsApp chat
  console.log('Fetching chats...');
  const chats = await client.messaging.getAllChats({
    account_id: process.env.UNIPILE_WHATSAPP_ACCOUNT_ID
  });

  const chat = chats.items?.find(c => c.name?.includes(CHAT_NAME) || c.name?.includes('Park Day'));

  if (!chat) {
    console.error('Could not find chat matching:', CHAT_NAME);
    console.log('Available chats:');
    chats.items?.forEach(c => console.log(`  - ${c.name} (${c.id})`));
    process.exit(1);
  }

  console.log(`Found chat: ${chat.name} (${chat.id})`);

  // Build attendee map for sender names (paginate through all attendees)
  const attendeeMap = new Map();
  let attendeeCursor = null;

  do {
    const attendees = await client.messaging.getAllAttendees({
      chat_id: chat.id,
      cursor: attendeeCursor,
      limit: 100
    });

    attendees.items?.forEach(a => {
      // Only map WhatsApp attendees from this account
      if (a.account_id !== process.env.UNIPILE_WHATSAPP_ACCOUNT_ID) return;

      const name = a.display_name || a.name || 'Unknown';
      attendeeMap.set(a.id, name);
      if (a.provider_id) {
        attendeeMap.set(a.provider_id, name);
      }
      if (a.specifics?.phone_number) {
        attendeeMap.set(a.specifics.phone_number, name);
      }
    });

    attendeeCursor = attendees.cursor;
  } while (attendeeCursor);

  console.log(`Loaded ${attendeeMap.size} attendee mappings`);

  // Fetch messages until we catch up
  const newMessages = [];
  let cursor = null;
  let done = false;

  console.log('Fetching messages...');

  while (!done) {
    const response = await client.messaging.getAllMessagesFromChat({
      chat_id: chat.id,
      cursor,
      limit: 100
    });

    for (const msg of response.items || []) {
      const msgTime = new Date(msg.timestamp);

      // Stop if we've reached messages we already have
      if (latestTimestamp && msgTime <= latestTimestamp) {
        done = true;
        break;
      }

      // Skip reaction events (not in native WhatsApp export format)
      if (msg.is_event) {
        continue;
      }

      const senderName = msg.is_sender
        ? 'You'
        : (attendeeMap.get(msg.sender_id) || msg.sender_id || 'Unknown');

      newMessages.push({
        timestamp: msgTime,
        formatted: formatMessage(msg, senderName)
      });
    }

    cursor = response.cursor;
    if (!cursor) {
      done = true;
    }

    process.stdout.write(`\rFetched ${newMessages.length} new messages...`);
  }

  console.log(`\nFound ${newMessages.length} new messages`);

  if (newMessages.length === 0) {
    console.log('Chat is up to date!');
    return;
  }

  // Sort chronologically and append to file
  newMessages.sort((a, b) => a.timestamp - b.timestamp);

  const newContent = newMessages.map(m => m.formatted).join('\n');
  fs.appendFileSync(CHAT_FILE, '\n' + newContent);

  console.log(`Appended ${newMessages.length} messages to ${CHAT_FILE}`);
}

main().catch(console.error);
