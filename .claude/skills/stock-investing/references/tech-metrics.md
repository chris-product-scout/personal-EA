# Tech & SaaS Metrics Reference

Specific metrics for evaluating technology companies, with emphasis on SaaS and growth-stage tech.

---

## The Rule of 40

### Definition
Revenue Growth Rate (%) + EBITDA Margin (%) ≥ 40%

### Why It Matters
- Companies at Rule of 40 get **2x valuation multiples** vs. those below
- Returns 15%+ higher than S&P 500 for companies consistently above 40
- Only ~16% of software companies sustain Rule of 40 performance

### How to Calculate
```
Rule of 40 = YoY Revenue Growth % + EBITDA Margin %

Example:
- Revenue Growth: 30%
- EBITDA Margin: 15%
- Rule of 40 Score: 45% ✅
```

### Interpreting Results

| Score | Interpretation | Valuation Impact |
|-------|----------------|------------------|
| >50% | Elite | Premium multiples |
| 40-50% | Healthy | Above-average multiples |
| 25-40% | Acceptable | Average multiples |
| <25% | Concerning | Discounted multiples |

### Flexibility in the Formula
- 60% growth + (-20%) margin = 40% ✅ (early-stage acceptable)
- 15% growth + 25% margin = 40% ✅ (mature company acceptable)
- The mix matters less than the total

### Rule of 40 Limitations
- Better for mature SaaS (>$15M ARR)
- Less meaningful for early-stage
- In bull markets, investors accept lower scores
- "Rule of X" weights growth more heavily for high-growth companies

---

## Net Revenue Retention (NRR)

### Definition
Revenue from existing customers this period / Revenue from same customers last period

Includes: upsells, cross-sells, downgrades, churn

### Why It Matters
- NRR >100% = growing without acquiring new customers
- High NRR = strong product-market fit, sticky product
- Elite companies compound revenue from existing base

### Benchmarks

| NRR | Interpretation |
|-----|----------------|
| >130% | Elite (Snowflake, Datadog territory) |
| 110-130% | Excellent |
| 100-110% | Good |
| 90-100% | Concerning—growth depends entirely on new sales |
| <90% | Red flag—customer base is shrinking |

### What Drives High NRR
- Usage-based pricing that scales with customer success
- Platform with multiple products to cross-sell
- Land-and-expand motion
- Critical workflow integration (high switching costs)

---

## Gross Margin

### Why It Matters for Tech
- High gross margin = operating leverage potential
- As revenue scales, more drops to bottom line
- Low gross margin = structural disadvantage

### Benchmarks by Tech Type

| Business Type | Target Gross Margin |
|---------------|---------------------|
| Pure SaaS | 75-85% |
| SaaS with Services | 65-75% |
| Marketplace | 60-80% (depends on take rate) |
| Hardware | 30-50% |
| Semiconductors | 50-70% |
| Cloud Infrastructure | 60-70% |

### Red Flags
- Declining gross margins over time
- Gross margin significantly below peers
- Services revenue growing faster than software (margin dilution)

---

## Customer Acquisition Cost (CAC) Metrics

### CAC Payback Period
Months to recover the cost of acquiring a customer

**Formula**: CAC / (Monthly Revenue × Gross Margin)

| Payback | Interpretation |
|---------|----------------|
| <12 months | Excellent |
| 12-18 months | Good |
| 18-24 months | Acceptable for enterprise |
| >24 months | Concerning |

### LTV/CAC Ratio
Lifetime Value / Customer Acquisition Cost

| Ratio | Interpretation |
|-------|----------------|
| >5x | Excellent |
| 3-5x | Good |
| 2-3x | Acceptable |
| <2x | Inefficient—spending too much to acquire |

### Magic Number
Measures sales efficiency

**Formula**: (Current Quarter Revenue - Prior Quarter Revenue) × 4 / Prior Quarter S&M Spend

| Magic Number | Interpretation |
|--------------|----------------|
| >1.0 | Very efficient—invest more in S&M |
| 0.75-1.0 | Efficient |
| 0.5-0.75 | Moderate efficiency |
| <0.5 | Inefficient—fix before scaling |

---

## Growth Metrics

### Revenue Growth Benchmarks

| Company Stage | Excellent | Good | Concerning |
|---------------|-----------|------|------------|
| <$10M ARR | >100% | >50% | <30% |
| $10-50M ARR | >75% | >40% | <25% |
| $50-100M ARR | >50% | >30% | <20% |
| >$100M ARR | >40% | >25% | <15% |

### Growth Durability
- T2D3: Triple, Triple, Double, Double, Double (elite pattern)
- Look for sustainable 25%+ growth for 5+ years
- Decelerating growth is normal—rate of deceleration matters

### Growth Quality
- Organic vs. acquired growth (separate them)
- Customer count growth vs. expansion revenue
- New logo growth rate

---

## Profitability Metrics

### Operating Leverage
As company scales, does margin improve?

**Check**: Operating margin trend over 8+ quarters
- Improving = good operating leverage
- Flat despite growth = structural issue
- Declining = cost discipline problem

### Path to Profitability
For unprofitable companies, assess:
1. Gross margin (is unit economics viable?)
2. Operating expense as % of revenue (is it declining?)
3. Cash runway (how long can they sustain losses?)
4. Management guidance on profitability timeline

### Free Cash Flow Margin
(Operating Cash Flow - CapEx) / Revenue

| FCF Margin | Interpretation |
|------------|----------------|
| >20% | Excellent—cash machine |
| 10-20% | Good |
| 0-10% | Acceptable for growth companies |
| Negative | Must have clear path to positive |

---

## Valuation Multiples

### EV/Revenue Multiples

| Rule of 40 Score | Typical EV/Revenue |
|------------------|-------------------|
| >50% | 10-20x+ |
| 40-50% | 8-12x |
| 30-40% | 5-8x |
| <30% | 3-5x |

### How to Think About SaaS Valuation
1. Start with Rule of 40 score
2. Adjust for: NRR, market size, competitive position
3. Compare to peers with similar profiles
4. Consider growth durability

### Current Market Context (Check When Using)
- Multiples expand and contract with market conditions
- 2021 peak: 20-40x for high-growth SaaS
- 2022-2023 trough: 5-10x for same companies
- Always compare to current peer multiples, not historical

---

## AI/Infrastructure Specific Metrics

### For AI Infrastructure Companies
- GPU/compute capacity growth
- Data center expansion plans
- Customer concentration (hyperscaler dependency)
- Gross margin under AI workload mix

### For AI Application Companies
- AI feature adoption within product
- AI-attributed revenue (if disclosed)
- Compute cost as % of revenue
- Model training/inference cost trends

### For Semiconductor Companies
- Design wins pipeline
- Capacity utilization
- Inventory levels (cyclicality indicator)
- Lead times and backlog

---

## Quick SaaS Health Check

| Metric | Check | Pass | Investigate |
|--------|-------|------|-------------|
| Rule of 40 | Growth + Margin | ≥40% | <30% |
| NRR | Existing customer growth | >100% | <95% |
| Gross Margin | Unit economics | >70% | <60% |
| CAC Payback | Acquisition efficiency | <18mo | >24mo |
| FCF Margin | Cash generation | >0% or improving | Burning >20% |
| Revenue Growth | Durability | Consistent | Volatile/decelerating fast |
