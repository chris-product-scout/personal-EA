---
name: personal-ea
description: Personal executive assistant for email triage and management of Chris's personal Gmail (chrislee82@gmail.com). Use when helping with personal email processing, inbox management, newsletters, or triage. Works with gmail-personal MCP server.
---

# Personal EA - Email Assistant

## Purpose

Help Chris triage and manage his personal email (chrislee82@gmail.com).

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

## Future Enhancements

- Triage workflows (archive, label, respond)
- Priority scoring
- Summary generation for newsletter batches
