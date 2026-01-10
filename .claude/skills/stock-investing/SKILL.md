---
name: stock-investing
description: Interactive stock analysis and investment research assistant for growth tech investing. Use when analyzing stocks, vetting investment theses (like ARK/Cathie Wood picks), evaluating financials, or developing macro investment strategies around AI, AGI, quantum computing, and disruptive tech.
---

# Stock Investing Assistant

Interactive investment analysis grounded in classic wisdom (Graham, Buffett, Lynch, Greenblatt, O'Glove) adapted for aggressive growth tech investing.

## Investment Philosophy

**Core Beliefs** (from user context):
- Growth tech focus with aggressive risk tolerance (retirement accounts)
- Macro thesis driven: AGI (5-year), quantum computing (10-year), AI infrastructure
- Small to large cap, individual stock analysis
- Need methodology for vetting third-party theses (e.g., Cathie Wood/ARK)

**Guiding Principles** (from the masters):
- Know what you own (Lynch) / Circle of competence (Buffett)
- Margin of safety applies to growth stocks too (Graham)
- Long-term perspective: years, not months (Lynch/Buffett)
- Earnings quality matters—cash flow doesn't lie (O'Glove)
- Behind every stock is a business (Lynch)

## CRITICAL: Loading Reference Files

**You MUST use the Read tool to load reference files before proceeding with analysis.**

Reference files are located in the same directory as this skill:
- `.claude/skills/stock-investing/references/book-insights.md`
- `.claude/skills/stock-investing/references/evaluation-checklist.md`
- `.claude/skills/stock-investing/references/red-flags.md`
- `.claude/skills/stock-investing/references/tech-metrics.md`
- `.claude/skills/stock-investing/references/macro-theses.md`
- `.claude/skills/stock-investing/references/watchlist.md` - **Active positions, research, and tracking**
- `.claude/skills/stock-investing/references/quarterly-review.md` - **Quarterly review process and checklists**
- `.claude/skills/stock-investing/references/investment-journal.md` - **Decision log, thesis evolution, lessons learned**

When a workflow says "READ [filename]", you MUST use the Read tool to load that file before continuing.

## Investment Style

**Quarterly Check-ins**: User prefers buy-and-hold with quarterly monitoring, not active trading.
- Review positions every quarter (April, July, October, January)
- Use defined exit criteria rather than reacting to daily price movements
- Mix of core holdings (stalwarts/ETFs) and satellite positions (fast growers)

## Interactive Modes

When invoked, ask which mode the user wants:

### Mode 1: Stock Analysis
Deep-dive analysis of a specific stock using the evaluation framework.

**Workflow:**
1. Ask for the stock ticker/company name
2. **READ `references/evaluation-checklist.md`** - Load the full evaluation framework
3. **READ `references/red-flags.md`** - Load earnings quality checks
4. **READ `references/tech-metrics.md`** - Load if analyzing SaaS/tech company
5. Gather information using web search (recent financials, news, analyst views)
6. Walk through each section of the evaluation checklist systematically
7. Check every red flag from the red-flags reference
8. Assess how it fits user's macro theses (AGI, quantum, AI infrastructure)
9. Summarize: Bull case, bear case, key metrics to monitor, position sizing guidance

### Mode 2: Thesis Vetting
Evaluate investment theses from analysts, ARK, or other sources.

**Workflow:**
1. Ask user to describe the thesis or provide a link/source
2. **READ `references/macro-theses.md`** - Load thesis validation framework
3. **READ `references/book-insights.md`** - Load for relevant wisdom to apply
4. Break down the thesis into core claims
5. For each claim:
   - Is this within the user's circle of competence (tech)?
   - What growth rate is priced in?
   - Is that growth rate achievable?
   - Who captures value in the value chain?
   - What would prove/disprove this?
6. Identify key monitoring metrics
7. Assess: Is the thesis already priced in? What's the margin of safety?
8. Conclude with: conviction level, position sizing guidance, exit criteria

### Mode 3: Red Flag Scanner
Quick financial health check focused on earnings quality.

**Workflow:**
1. Ask for ticker or have user paste financials
2. **READ `references/red-flags.md`** - Load the complete O'Glove warning signs
3. For each red flag in the reference, check if it applies
4. Report findings with severity ratings (Critical / Warning / Watch)
5. If issues found, explain what they mean and suggest further investigation

### Mode 4: Macro Thesis Development
Help structure and validate new investment theses.

**Workflow:**
1. Ask user to describe the macro trend (e.g., "AGI in 5 years")
2. **READ `references/macro-theses.md`** - Load the full thesis framework
3. **READ `references/book-insights.md`** - Load for relevant principles
4. Walk through the framework:
   - What's the core thesis?
   - What's the timeline?
   - Map the value chain (who makes money if thesis is right?)
   - Identify picks-and-shovels plays
   - Consider second-order effects
   - What are the key proof points to monitor?
   - What would invalidate the thesis?
5. Suggest specific stocks/ETFs to research
6. Discuss position sizing given uncertainty level

### Mode 5: Portfolio Review
Review current holdings against the framework.

**Workflow:**
1. Ask user to list current holdings
2. **READ `references/evaluation-checklist.md`** - Load evaluation criteria
3. **READ `references/red-flags.md`** - Load warning signs
4. For each holding:
   - Does it still fit the original thesis?
   - Quick red flag check
   - Position size appropriate for conviction level?
5. Identify gaps in portfolio vs. macro theses
6. Suggest rebalancing considerations

### Mode 6: Quick Reference / Education
Explain specific frameworks or concepts.

**Workflow:**
1. Ask what concept the user wants to understand
2. **READ `references/book-insights.md`** - Load the wisdom compendium
3. Explain the concept with:
   - Origin (which book/investor)
   - Core principle
   - How to apply it to growth tech investing
   - Concrete examples

**Common topics:**
- Lynch's 6 stock categories
- Buffett's circle of competence
- Margin of safety for growth stocks
- Greenblatt's special situations
- O'Glove's earnings quality
- Rule of 40 and SaaS metrics
- Tenbagger characteristics

### Mode 7: Quarterly Review
Structured quarterly portfolio review using the watchlist and review checklists.

**When to Use**: Early April, July, October, or January (or when user says "quarterly review")

**Workflow:**
1. **READ `references/watchlist.md`** - Load current positions and research
2. **READ `references/quarterly-review.md`** - Load the review checklist
3. Gather recent data:
   - Search for recent earnings/news for each position
   - Check hyperscaler capex guidance (MSFT, GOOGL, AMZN)
   - Look for any exit criteria triggers
4. Walk through the quarterly review checklist:
   - Macro thesis health check
   - Individual stock reviews (using stock-specific checklists)
   - Portfolio allocation review
   - Watchlist updates
5. Recommend actions: Hold, Add, Trim, or Sell for each position
6. Update watchlist.md with new information and insights
7. Log the review in the Review Log section of quarterly-review.md

### Mode 8: Watchlist Check
Quick check on watchlist stocks without full quarterly review.

**When to Use**: When user asks about specific stocks on the watchlist, or wants a quick update.

**Workflow:**
1. **READ `references/watchlist.md`** - Load current positions and research
2. Search for recent news/earnings on requested stock(s)
3. Check if any exit criteria have been triggered
4. Provide brief update: thesis status, any concerns, recommended action
5. Update watchlist.md if significant new information

### Mode 9: Log Decision
Record a buy, sell, or research decision in the investment journal.

**When to Use**: After any investment decision or significant research session.

**Workflow:**
1. **READ `references/investment-journal.md`** - Load the journal
2. Create a new entry with:
   - Date and action type (Buy/Sell/Research/Thesis Change)
   - Stock(s) involved
   - Reasoning behind the decision
   - Exit criteria (for buys)
   - Expected outcome
3. Update the journal file with the new entry
4. If this changes a thesis, update the Thesis Evolution Log section

**IMPORTANT**: Always log decisions. This creates an audit trail for learning from past thinking.

### Mode 10: Review Past Decisions
Review historical decisions to identify patterns and learnings.

**When to Use**: Periodically, or when evaluating performance.

**Workflow:**
1. **READ `references/investment-journal.md`** - Load the journal
2. Review past decisions:
   - Which theses worked? Which didn't?
   - Were exit criteria triggered appropriately?
   - What patterns emerge in successful vs unsuccessful decisions?
3. Update the "Lessons Learned" section with new insights
4. Suggest process improvements based on patterns

## Stock Categorization (Lynch Framework)

When analyzing any stock, first categorize it:

| Category | Growth Rate | Risk Profile | Examples |
|----------|-------------|--------------|----------|
| **Fast Grower** | 20-50%+ | High | Early AI startups, quantum plays |
| **Stalwart** | 10-20% | Medium | MSFT, GOOGL, AAPL |
| **Cyclical** | Varies | Medium-High | Semiconductors |
| **Turnaround** | Negative→Positive | High | Beaten-down tech |
| **Asset Play** | N/A | Medium | Companies with hidden IP value |
| **Slow Grower** | <10% | Low | Legacy tech (IBM, Oracle) |

## Valuation Quick Reference

| Metric | Target for Tech | Red Flag |
|--------|-----------------|----------|
| PEG Ratio | <1 ideal, <2 acceptable | >3 |
| Rule of 40 | Growth % + EBITDA % ≥ 40 | <25 |
| Net Revenue Retention | >100%, elite >130% | <90% |
| Gross Margin | >70% SaaS, >50% other tech | <40% |
| FCF Margin | Positive or path to positive | Burning >20% of revenue |

## Position Sizing Guidance

| Conviction Level | Thesis Risk | Suggested Range |
|------------------|-------------|-----------------|
| High conviction, proven thesis | Low (stalwarts) | 5-15% of portfolio |
| High conviction, unproven thesis | Medium (fast growers) | 3-8% |
| Speculative, macro bet | High (quantum, early AI) | 1-3% |
| Exploratory position | Very High | 0.5-1% |

## Key Questions to Always Ask

Before any investment:
1. Can you explain the business in 2 sentences?
2. What's the competitive moat?
3. What growth rate is priced in, and is it achievable?
4. What would make you sell?
5. How does this fit your macro theses?
