---
name: personal-ea
description: Personal executive assistant for email triage and management of Chris's personal Gmail (chrislee82@gmail.com). Also helps with WhatsApp chat analysis for Park Day School parent group. Use when helping with personal email processing, inbox management, newsletters, triage, or WhatsApp chat discussions.
---

# Personal EA - Email & Chat Assistant

## Chris's Context

**Family:**
- **Chris Lee** (chrislee82@gmail.com)
- **Gina Kessler Lee** (wife)
- **Asher** - 1st grader at Park Day School (in Maddy Phillips's class, with Cesar as assistant teacher)
- Asher has a younger sister

**Park Day School:**
- Private school in Oakland
- Asher started 1st grade Fall 2025 (new family)
- Two 1st grade classes: Sarah Sheaffer's class and Maddy Phillips's class
- ASAP = After School Activities Program

## Purpose

Help Chris:
1. Triage and manage his personal email (chrislee82@gmail.com)
2. Stay informed on Park Day 1st Grade WhatsApp group discussions

---

## WhatsApp Chat - Park Day 1st Grade Parents

### Chat File Location
`/Users/chrislee/Dropbox/code/personal-ea/whatsapp/park-day-1st-grade.txt`

### Syncing Latest Messages

To fetch new messages from WhatsApp via Unipile API:

```bash
npm run whatsapp:sync
```

Run this from the project root (`/Users/chrislee/Dropbox/code/personal-ea`). The script will:
- Connect to Unipile using credentials in `.env`
- Find the Park Day 1st Grade Parents chat
- Fetch messages newer than the last message in the file
- Append new messages in WhatsApp export format

### Reading the Full Chat

The chat file is too large to read in one pass (~1750+ lines, 70k+ tokens). Read it in batches:

```
1. Read file with limit=600 (lines 1-600)
2. Read file with offset=600, limit=600 (lines 600-1200)
3. Read file with offset=1200, limit=600 (lines 1200-1800)
4. Continue until end of file
```

### Workflow: "Get latest messages and let's chat about it"

1. Run `npm run whatsapp:sync` to pull new messages
2. Read the chat file in batches (600 lines at a time) until fully loaded
3. Summarize or answer questions about the chat content

### Common Questions to Answer
- Upcoming events or playdates
- Recommendations (camps, dentists, activities, restaurants)
- School logistics (enrichment classes, ASAP, schedules)
- Who said what / message search
- Summarize recent discussions

---

## Gmail MCP Server

Use `gmail-personal` for all operations. This connects to chrislee82@gmail.com.

## Superhuman News Split Query

Chris uses Superhuman with a split inbox. To get emails matching the **News** split (excluding emails that appear in other splits like Kids), use this query:

```
(label:[Superhuman]/AI/News OR from:skip.community OR from:theinformation.com OR from:theskip@substack.com OR from:theneurondaily.com) -label:kids/park-day -label:kids/mccs in:inbox
```

### Query Breakdown

**Include (OR conditions):**
- `label:[Superhuman]/AI/News` - Superhuman's AI-applied News label
- `from:skip.community` - Nikhyl Singhal's Skip community emails
- `from:theinformation.com` - The Information newsletter
- `from:theskip@substack.com` - Nikhyl Singhal's Substack
- `from:theneurondaily.com` - The Neuron AI newsletter

**Exclude (to avoid overlap with Kids split):**
- `-label:kids/park-day` - Park Day School emails
- `-label:kids/mccs` - MCCS school emails

**Scope:**
- `in:inbox` - Only emails still in inbox (not archived)

### Common News Sources

| Source | Topics |
|--------|--------|
| Lenny's Newsletter | Product management |
| Aakash Gupta / Product Growth | PM careers, AI |
| Nikhyl Singhal / The Skip | PM leadership |
| Supra Insider | PM interviews, recruiting |
| First Round Review | Startups, leadership |
| The Information | Tech business news |
| The Neuron | AI news |
| ARK Invest / Catherine Wood | Investment commentary |
| Into The Cryptoverse | Crypto/market analysis |

## Instructions

### Fetching News Emails

1. Use `mcp__gmail-personal__search_emails` with the News query above
2. Only set `maxResults` if specifically needed (use 250 for large batches)
3. Present results with sender, subject, and date

### Reading an Email

1. Use `mcp__gmail-personal__read_email` with the message ID
2. Summarize key points for the user

---

## Scanned Documents Processing

### Overview

Chris periodically scans batches of physical mail/documents into a single PDF. This workflow helps split, rename, and file them appropriately.

### Tools Required

- **qpdf** (installed via Homebrew): `brew install qpdf`

### File Naming Convention

All files must follow: `YYYY-MM-DD - description.pdf`

- Use the most relevant date from the document (statement date, service date, letter date)
- Use lowercase with hyphens for the description
- Examples:
  - `2025-09-14 - blueshield-eob-christopher.pdf`
  - `2025-10-26 - principal-life-insurance-statement.pdf`
  - `2025-11-01 - property-tax-3814-clarke-st.pdf`

### Workflow

1. **Read the scanned PDF** to identify individual documents and page ranges
2. **Propose splits** with suggested filenames and page ranges as a table
3. **Get user confirmation** - they may want to merge related docs (e.g., all EOBs for same date)
4. **Split using qpdf**:
   ```bash
   qpdf "source.pdf" --pages . 1-4 -- "2025-01-15 - document-name.pdf"
   ```
5. **Review dates** - read individual PDFs to get accurate dates, not just month placeholders
6. **Confirm destinations** before moving files
7. **Move files** to appropriate folders

### Common Filing Locations

| Document Type | Destination |
|---------------|-------------|
| Blue Shield EOBs | `/Users/chrislee/Dropbox/_Filing Cabinet/Health/` |
| Dental statements | `/Users/chrislee/Dropbox/_Filing Cabinet/Health/` |
| Principal Life Insurance | `/Users/chrislee/Dropbox/_Filing Cabinet/Health/Life Insurance - Principal/` |
| Chase/bank notices | `/Users/chrislee/Dropbox/_Filing Cabinet/Finance/` |
| Regent property insurance | `/Users/chrislee/Dropbox/_Regent/Insurance/` |
| Regent mortgage statements | `/Users/chrislee/Dropbox/_Regent/Mortgage Statements/` |
| Regent property tax | `/Users/chrislee/Dropbox/_Regent/` |
| Berkeley housing notices | `/Users/chrislee/Dropbox/_Regent/Berkeley Notices/` |
| Product Scout IRS/FTB notices | `/Users/chrislee/Dropbox/_ProductScout/IRS Notices/` |
| Personal FTB / tax notices | User decides (often stays on Desktop for action) |

### qpdf Notes

**Fix source PDF first** to avoid warnings during splits:
```bash
qpdf --replace-input "2026-01-04 - scanned docs.pdf"
```
- Repairs malformed cross-reference tables common in scanned PDFs
- Warning appears once during fix, creates backup `.~qpdf-orig` file
- Subsequent splits run cleanly without warnings

### Example Workflow

```bash
cd "/Users/chrislee/Dropbox/Mac (2)/Desktop"

# 1. Fix the source PDF first
qpdf --replace-input "2026-01-04 - scanned docs.pdf"

# 2. Split into individual documents (now runs without warnings)
qpdf "2026-01-04 - scanned docs.pdf" --pages . 1-2 -- "2025-11-01 - property-tax-3814-clarke-st.pdf"
qpdf "2026-01-04 - scanned docs.pdf" --pages . 3-6 -- "2025-10-01 - insurance-renewal.pdf"

# 3. Clean up backup file
rm "2026-01-04 - scanned docs.pdf.~qpdf-orig"
```

---

## Future Enhancements

- Triage workflows (archive, label, respond)
- Priority scoring
- Summary generation for newsletter batches
