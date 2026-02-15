# CLAUDE.md — Jack Tyler Personal Brand & Business Strategy

## Who Is Jack Tyler

Jack Tyler is a data architect and systems integrator based in Oakland, CA with 10+ years of experience. He owns jackatyler.com (purchased years ago, not yet built out). He is leaving full-time employment to work on two businesses full-time while doing part-time legal work for his partner.

**He does not want a traditional full-time job. He wants to build businesses and take on consulting/contract gigs — especially tagging-to-pipeline work.**

### Background & Credibility
- 10 years Salesforce (Sales Cloud, Service Cloud, Account Engagement/Pardot, Flows, Apex, Visualforce)
- 10 years data analytics (Excel, Python, Tableau — 125+ executive dashboards, 35+ self-service reports)
- 5 years data engineering (Snowflake, Oracle EBS, AWS/S3, SFTP pipelines, Amazon Vendor Central)
- 5 years martech stack integration (Zapier, Widen/Acquia DAM, Klaviyo, Account Engagement, Drupal, Magento, WordPress, BrightEdge SEO, Syndigo, PowerReviews, Qualtrics)
- 5 years PIM experience (Syndigo, 1WorldSync) — automated product data flows and troubleshooting
- Built a GPT integration for DAM administration at Torani (8,000+ assets, 50+ users, no dedicated admin)
- Built Google MCP server and custom MCPs for faster integrations, real-time website diagnostics, and compliance flagging
- CPRA/CCPA compliance tooling implementation, ADA audit experience, Osano
- Education: MA International Studies (USF), BA International/Global Studies + Religious Studies (UNCG), BA Anthropology (Appalachian State)
- French (limited working proficiency)

### Personality & Working Style
- Builder mentality: "When I hit a gap in a system or in my own knowledge, I build something to close it"
- Thinks about data like plumbing — it has to flow correctly or nothing downstream works
- Uses LLMs as infrastructure, not novelty
- Prefers hands-on roles over management-only positions
- Direct communicator, values substance over polish

---

## The Two Businesses

### Business 1: DAM/PIM Cross-System Monitor (Name TBD)
**Status:** In strategic development — extensively analyzed, not yet built  
**Positioning:** Cross-system monitoring and alerting layer between DAM and PIM systems — observability for product content operations

**What It Does:**
A monitoring and alerting layer that sits between DAM and PIM systems, detects drift and misalignment, and surfaces actionable issues for a human to resolve. NOT automation of changes — Jack resolves issues himself. The product surfaces them.

Key decisions from past analysis:
- **Monitor-only is the right wedge.** Read-only API access is easier to sell, easier to get security approval for, and creates natural expansion into resolution workflows
- **The cross-system gap is genuinely underserved.** PIM vendors won't build DAM monitoring. DAM vendors won't build PIM monitoring. iPaaS tools don't understand the semantic relationship between a product image and its SKU metadata
- **Start with services, build toward SaaS.** Fractional DAM/PIM operations using AI tools built internally, $2K–$5K/month per client. Learn which problems are most painful, then productize the single most repeatable one
- **Pricing should be based on cost avoidance**, not asset count. Price against retailer chargebacks, legal exposure from expired licenses, lost sales from wrong product images
- **The critical question to answer first:** What is the single most expensive, most frequent misalignment between DAM and PIM? Build a tool that detects that one thing in 4 weeks. Prove that one alert is worth paying for. Then add the next one
- **Alert fatigue is the #1 product risk.** Must rank and prioritize issues — domain expertise encoded into product logic is the moat
- **Competitive landscape:** OneTimePIM (self-healing PIM), Pumice.ai (AI PIM automation), Pimberly/Akeneo/Bluestone building native AI. The differentiation is the cross-system gap, not features within either system

**Target Clients:** CPG brands, retailers, manufacturers running both DAM and PIM systems (Widen + Salsify, Akeneo + Bynder, Brandfolder + Syndigo, etc.)

---

### Business 2: Unified Stack, LLC (unifiedstack.io) — Local Business Website Optimization
**Status:** Active business entity, registered domain — architecture docs exist, product concept validated  
**Parent Entity:** Unified Stack, LLC  
**Positioning:** Help local businesses fix all website issues for better performance, security, compliance — all focused around SEO, which is where the money is

**What It Does:**

**Consulting Services (active now):**
- Data architecture consulting: normalization logic, validation gates, 100% data reliability before anything reaches a user or report
- Reusable patterns for agent-orchestrated workflows that reduce manual intervention
- Google MCP server and custom MCPs for faster integrations, real-time diagnostics, compliance flagging
- Salesforce architecture, Snowflake pipelines, Oracle EBS integrations, martech stack unification
- **Website tagging & analytics pipeline consulting:** Connecting website tags (GTM, GA4, pixels, conversion tracking) to downstream data pipelines. Tag governance, implementation, QA, and ensuring clean data flows from site instrumentation through to reporting/warehousing. Open to contract/consulting gigs in this area

**Local Business SEO/Compliance Product (in development):**
The core insight: accessibility compliance, privacy compliance, performance optimization, and security fixes all share massive overlap with SEO improvements. Fixing WCAG issues (alt text, semantic HTML, heading hierarchy, lang attributes) directly improves search rankings. The sell is SEO; the delivery includes the full stack of fixes.

**Product Components:**
1. **Compliance Scanner/Demo Tool:** A prospect enters their URL → tool scans for WCAG/ADA, CPRA/GDPR, performance, and SEO issues → generates a before/after comparison showing their current site vs. a compliant version, with scores across all categories
2. **The Narrative That Closes Deals:** "Right now your site scores 27/100 overall. Your accessibility score is 22 — you have 8 Critical issues that could trigger a lawsuit. Your privacy score is 5 — you're non-compliant with both GDPR and CPRA. But here's the thing: fixing these also improves your performance from 45 to 95 and your SEO from 62 to 94. Compliance isn't just risk reduction — it's a competitive advantage."
3. **Service Delivery:** Fix the issues, deliver the improved site. Platform-aware fixes (Shopify Liquid, WordPress themes, custom builds, etc.)
4. **AI Website Builder (future):** Auto-generate compliant local business websites (restaurants, plumbers, lawn care, etc.) using Anthropic API. HTML/CSS/JS, ADA-compliant by default, SEO built in, human review for alt text and final QA

**Target Clients:** Local businesses in every city — restaurants, plumbers, lawn care, HVAC, auto shops, salons, legal offices, dental practices, etc.

**Architecture (from past discussions):**
- Hybrid approach: static shell + API for AI generation
- Manual/chat workflow at launch (Jack handles generation), automated pipeline at scale
- Microservices: content generation, design engine, code assembly, ADA compliance scanner, SEO optimizer
- Standalone browser-based ADA audit tool (deliverable on its own)
- Platform-native site replication: generated code reflects the prospect's actual platform
- Industry-aware compliance: healthcare → HIPAA intersection, education → FERPA/Section 508, finance → GLBA

**Key CTA Language:** "Transform My Site →" (aspirational, implies upgrade not repair)

---

## jackatyler.com — Personal Brand Strategy

### Purpose
jackatyler.com is the credibility layer that makes both businesses easier to sell. It is NOT a job-seeking site. It is NOT a content creator platform. It is the minimum credible presence that connects Jack's expertise to his two businesses.

### Site Structure (Lean)
1. **Homepage:** Who Jack is, what he builds, links to both businesses, 2–3 short case studies
2. **Case Studies (2–3):**
   - The DAM/GPT integration at Torani (8,000 assets, no admin → AI-powered solution)
   - The Oracle EBS + Salesforce + Snowflake + Tableau unification (RevOps ecosystem)
   - The MCP server build (agent-orchestrated integrations, real-time diagnostics)
3. **Links:** Unified Stack (unifiedstack.io), Local Business Site (TBD URL), LinkedIn, contact info
4. **No blog required at launch.** One LinkedIn post per month about a real problem solved or a perspective on agentic systems keeps visibility without becoming a content treadmill

### What jackatyler.com Is NOT
- Not a portfolio site for job applications
- Not a content marketing engine
- Not a place to showcase every skill
- Not something that should take more than 1–2 weeks to ship

### Brand Relationship
```
jackatyler.com (personal credibility)
├── [DAM/PIM tool name TBD] (cross-system monitoring product for enterprise)
└── unifiedstack.io (consulting + local business SEO/compliance/performance)
```

Jack is the common thread. Enterprise DAM/PIM clients see Jack's Torani and martech track record. Local businesses find Unified Stack's SEO service and see Jack's technical depth. The personal site ties them together without forcing them into one brand.

---

## Content & SEO Strategy for the Local Business

Since the local business IS an SEO business, the marketing should demonstrate SEO competence. This means:

1. **The scanner/demo tool IS the marketing.** Every scan generates a lead. Every before/after is a case study
2. **Local SEO for Jack's own business:** Optimize for "[city] website compliance," "[city] ADA website fix," "[city] small business SEO"
3. **The compliance + SEO overlap is the differentiator.** Most SEO agencies don't talk about ADA/WCAG. Most compliance firms don't talk about SEO. Jack sits in the middle
4. **Pricing should reflect SEO value, not compliance value.** Local businesses will pay for rankings. They won't pay as eagerly for "compliance" alone. Lead with SEO, deliver everything

---

## Current Priorities (Ordered)

1. **Revenue first.** Part-time legal work for partner covers baseline. Unified Stack consulting ($2K–$5K/month/client) is the fastest path to independent income
2. **Ship jackatyler.com.** Simple, fast, credibility-focused. 1–2 weeks max
3. **Build the local business scanner/demo tool under Unified Stack.** This is the lead gen engine. Architecture docs exist — execution is next
4. **Land first DAM/PIM monitoring client.** Start with services (fractional admin using AI tools), learn what's worth productizing. This business needs a name
5. **Don't try to build two SaaS products simultaneously.** Services revenue from both businesses funds eventual product development

---

## Technical Environment & Preferences

- **Primary OS:** Dual-boot Windows/Ubuntu (laptop: i9-10885H, 16GB RAM, 8GB GPU, 1TB NVMe)
- **Business Mac:** Planned M3/M4 MacBook
- **Server:** Planned System76 Meerkat or custom build, headless Debian 13
- **Dev tools:** WSL, VS Code, Docker, Bitbucket
- **Network:** Multi-segment home network with OPNsense firewall (Protectli), separate VLANs for general/business/media/SLM
- **AI infrastructure:** Local SLM on isolated network segment, accessible by business layer for inference only (not data access)
- **Cloud preference:** Affordable + reliable, cloud-portable architecture (no vendor lock-in)

---

## Rules for Claude

1. **Never suggest Jack get a traditional full-time job.** He's building businesses. However, he IS open to consulting/contract gigs — particularly work connecting website tagging to data pipelines (GTM, GA4, pixel implementation, tag governance, analytics pipeline architecture). Redirect career advice toward business development and contract opportunities, not employment
2. **Prioritize revenue-generating actions** over polish, branding exercises, or content calendars
3. **Be direct and critical.** Jack prefers brutal honesty (see: the DAM Copilot analysis thread). Don't soften bad ideas
4. **Remember the hierarchy:** Services revenue → Product development → Scale. Don't skip steps
5. **SEO is the revenue driver for the local business.** Compliance, performance, and security are delivery mechanisms. Always frame recommendations through the SEO lens when discussing that business
6. **The DAM/PIM play is monitoring, not automation.** Jack resolves issues himself. The product surfaces them. Don't suggest features that write to client systems. This is Business 1 (separate from Unified Stack)
7. **Jack uses LLMs as infrastructure.** Don't explain basic AI concepts. Suggest MCP integrations, agentic workflows, and Claude API approaches as first-class tools
8. **Keep scope tight.** Jack's biggest risk is expanding scope before validating demand. Push him to narrow, not broaden
9. **Unified Stack is the umbrella for consulting AND the local business SEO product.** The DAM/PIM tool is a separate business that needs its own name and identity