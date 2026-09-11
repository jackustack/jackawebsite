# Unified Stack / Jack Tyler Website Structure

This document defines the planned information architecture for `jackatyler.com`.

The site should remain simple at the top level while supporting three distinct visitor needs:

- **Services** — I want someone to solve or investigate the problem for me.
- **Products** — I want a practical tool I can use myself.
- **Resources** — I want to understand the problem before I buy anything.

Audience-specific pages may be added under **Solutions** when there is enough content to justify them.

The website should continue to lead with business problems and outcomes rather than platforms or technical terminology.

---

## Current Primary Navigation

Keep the live navigation simple until additional sections are actually built:

- Site name: **Jack Tyler** → homepage
- Services
- Contact
- Site-wide Search

Do not add empty top-level navigation items.

When Products and Resources are live, navigation can expand to:

- Products
- Services
- Resources
- Contact

A separate **Home** link is not necessary because the site name links to the homepage.

---

## Current Public Pages

These pages already exist and should remain part of the live site:

```text
/
├── index.html
├── services.html
├── contact.html
├── resume.html
├── privacy.html
├── search.html
├── sitemap.xml
├── robots.txt
├── llms.txt
├── css/
│   └── style.css
├── js/
├── assets/
└── api/
```

`search.html` is an internal site utility and should not be treated as a landing page or included in the XML sitemap.

---

## Planned Site Architecture

```text
/
├── index.html
│
├── products/
│   ├── index.html
│   │
│   └── gtm-audit/
│       └── index.html
│
├── services/
│   ├── index.html
│   │
│   ├── marketing-measurement/
│   │   └── index.html
│   │
│   ├── crm-data-quality/
│   │   └── index.html
│   │
│   ├── accessibility/
│   │   └── index.html
│   │
│   ├── salesforce-reporting/
│   │   └── index.html
│   │
│   ├── product-asset-data/
│   │   └── index.html
│   │
│   └── fractional-operations/
│       └── index.html
│
├── solutions/
│   ├── index.html                         # Add only when solution pages are built
│   │
│   ├── marketing-agencies/
│   │   └── index.html
│   │
│   ├── b2b-growth/
│   │   └── index.html
│   │
│   ├── nonprofits-foundations/
│   │   └── index.html
│   │
│   └── ecommerce/
│       └── index.html
│
├── resources/
│   ├── index.html
│   │
│   ├── measurement/
│   │   └── [articles]
│   │
│   ├── data-trust/
│   │   └── [articles]
│   │
│   ├── ai-readiness/
│   │   └── [articles]
│   │
│   ├── fundraising-reporting/
│   │   └── [articles]
│   │
│   └── accessibility/
│       └── [articles]
│
├── about/
│   └── index.html                         # Optional future page
│
├── contact/
│   └── index.html                         # Optional future move from contact.html
│
├── resume.html
├── privacy.html
├── search.html
├── sitemap.xml
├── robots.txt
├── llms.txt
├── css/
│   └── style.css
├── js/
├── assets/
└── api/
```

The directory structure above is the long-term architecture. Do **not** create empty directories or placeholder pages simply to match the diagram.

---

# Page Purpose

## `/`

### Homepage

Primary purpose:

- Explain the business problems Jack Tyler / Unified Stack helps solve.
- Establish a simple, credible consulting position.
- Route visitors to the most relevant service or contact path.
- Surface pricing early enough that prospects can self-qualify.

Current positioning should stay focused on:

- trusted data;
- trustworthy measurement;
- accessibility;
- practical problem diagnosis;
- business outcomes rather than tools.

The homepage should **not** become a catalog of every capability.

Primary homepage service themes:

1. **CRM & Business Data Quality**
2. **Marketing Measurement & Conversion Tracking**
3. **Website Accessibility**

Secondary services belong on the Services page.

---

# Services

## `/services/`

### Consulting Services Overview

Primary purpose:

- Explain the consulting work available.
- Help a visitor recognize their problem without requiring them to know the technical cause.
- Show clear scope and pricing direction.
- Explain how engagements work.
- Route visitors to contact or a specific service page.

Core service categories:

1. Marketing Measurement & Conversion Tracking
2. CRM & Business Data Quality
3. Website Accessibility
4. Salesforce Reporting
5. Product & Asset Data
6. Fractional Marketing & Revenue Operations

Do **not** present AI as a standalone consulting service.

AI may appear in content about readiness, trusted data, process maturity, and appropriate automation.

Privacy and consent configuration should be discussed under measurement when they affect analytics, tag behavior, and conversion tracking. Do not position the site as broad legal privacy consulting.

---

## `/services/marketing-measurement/`

### Marketing Measurement & Conversion Tracking

Business problem:

> Marketing platforms, analytics tools, and business systems do not agree on what happened.

Typical work may include:

- GA4
- Google Tag Manager
- conversion tracking
- Google Ads measurement
- Meta/browser/server signal review
- consent-aware measurement
- data layers
- enhanced conversions
- event deduplication
- Shopify/customer-event architecture
- measurement troubleshooting
- audit and remediation planning

Possible sub-offer:

### Measurement Audit

A paid diagnostic engagement that stands on its own.

The client should be able to:

- implement recommendations internally;
- use another provider;
- or hire Unified Stack for remediation.

Future agency-specific messaging belongs under `/solutions/marketing-agencies/`, not in the main service name.

---

## `/services/crm-data-quality/`

### CRM & Business Data Quality

Business problem:

> Teams do not trust the records, reports, or definitions behind business decisions.

Typical work may include:

- duplicate reduction
- normalization
- validation
- conflicting source reconciliation
- missing or inconsistent fields
- data migration preparation
- workflow-related data quality
- reporting reliability
- business-rule discovery
- identifying spreadsheet workarounds and undocumented logic

This service should not be framed as generic database cleanup.

The value is making business information more trustworthy.

---

## `/services/accessibility/`

### Website Accessibility

Primary offer:

### Accessibility Essentials — target price: $950

Purpose:

- Review smaller websites for common, high-frequency accessibility barriers.
- Perform defined manual checks.
- Remediate qualifying issues in client-controlled frontend code.
- Reduce common accessibility barriers before they become larger problems.

Important positioning:

- This is **not** a comprehensive WCAG conformance audit.
- This is **not** legal certification.
- This does **not** guarantee that a website will avoid a complaint, demand letter, or lawsuit.
- Do not use "ADA compliant" as a guaranteed outcome.

Likely scope controls:

- small public-facing websites;
- defined number of representative pages/templates;
- global navigation/footer/components;
- one primary form or user flow;
- client-controlled HTML/CSS/JavaScript;
- exclusions for large document libraries, complex web applications, third-party systems, or major redevelopment.

For comprehensive audits, formal conformance work, or large remediation projects, use specialist accessibility partners.

---

## `/services/salesforce-reporting/`

### Salesforce Reporting

Primary purpose:

- Help teams get usable answers from Salesforce without forcing them to understand the underlying data model.
- Build reports and dashboards around actual business questions.
- Identify data-quality or process problems that prevent reliable reporting.

General page can remain cross-industry.

A specialized fundraising/advancement path belongs under:

`/solutions/nonprofits-foundations/`

or a future dedicated advancement page if there is enough demand.

---

## `/services/product-asset-data/`

### Product & Asset Data

Primary purpose:

- Improve how organizations manage product information and digital assets.
- Identify process and governance problems before or around DAM/PIM implementation.

Typical work may include:

- product data assessment
- asset taxonomy
- metadata
- duplicate or inconsistent product information
- channel-readiness
- vendor selection support
- DAM/PIM process assessment
- source-of-truth questions

This remains a secondary service rather than a homepage lead offer.

---

## `/services/fractional-operations/`

### Fractional Marketing & Revenue Operations

Primary purpose:

Provide ongoing senior support when an organization has enough systems and operational complexity to need ownership, but not enough to justify another full-time senior hire.

Possible scope:

- CRM
- analytics
- marketing systems
- reporting
- workflows
- vendor coordination
- data quality
- measurement
- cross-functional operational problems
- automation where it is actually useful

Do not lead with "AI-enabled workflows."

---

# Products

## `/products/`

### Digital Product Storefront

Primary purpose:

- Sell practical downloadable tools.
- Keep DIY products separate from consulting services.
- Allow direct paid traffic to individual product pages without requiring the visitor to pass through the homepage.

Initial product:

- GTM Audit Workbook

Future products should be added only when they actually exist.

---

## `/products/gtm-audit/`

### GTM Audit Workbook

Primary purpose:

- Sell the downloadable GTM audit tool directly.
- Work as a standalone landing page for ads, email, social, search, and direct outreach.

Suggested page flow:

1. Product headline and price
2. Problem being solved
3. What the workbook audits
4. What is included
5. Screenshots / preview
6. How it works
7. Who it is for
8. Pricing and purchase CTA
9. FAQ
10. Professional-service option

Primary CTA:

- Buy / Download GTM Audit Workbook

Secondary CTA:

- Have Unified Stack perform the audit

---

# Solutions / Customer Segments

Audience-specific pages should explain the same underlying services using the language and buying triggers of a specific market.

Do not duplicate the entire Services page.

## `/solutions/marketing-agencies/`

### Marketing Agencies

Primary audience:

- PPC agencies
- paid-media agencies
- SEO agencies
- growth agencies
- web agencies managing multiple client measurement environments

Core message:

> You manage the campaigns. I help make sure the measurement layer works.

Likely services:

- conversion tracking audits
- GA4/GTM troubleshooting
- measurement implementation
- documentation
- repeat/white-label specialist support

---

## `/solutions/b2b-growth/`

### Growing B2B Companies

Primary audience:

Growing B2B organizations with HubSpot, Salesforce, or multiple revenue systems but limited RevOps maturity.

Core problems:

- unreliable CRM data
- conflicting lifecycle definitions
- lead-routing issues
- unclear attribution
- systems that do not agree
- reports leadership does not trust

Likely path:

Revenue Systems / Data Audit → remediation → optional fractional support

---

## `/solutions/nonprofits-foundations/`

### Nonprofits, Foundations & Advancement Teams

Primary audience:

- university foundations
- advancement organizations
- fundraising nonprofits
- development operations
- Salesforce-based fundraising teams

Core problems:

- donor data quality
- fundraiser assignments
- reporting gaps
- stewardship and engagement reporting
- donor/prospect relationships
- inconsistent business definitions
- disconnected systems and spreadsheet workarounds

The message should focus on fundraising questions and operational meaning rather than Salesforce terminology.

---

## `/solutions/ecommerce/`

### Ecommerce / DTC

Primary audience:

Ecommerce companies with meaningful paid-media spend and enough measurement complexity for bad signals to affect optimization.

Core problems:

- Shopify/GA4/ad-platform discrepancies
- missing conversions
- checkout/customer-event changes
- consent-related measurement issues
- browser/server event architecture
- duplicate events
- unreliable attribution

Do not promise to make every platform report identical numbers.

---

# Resources

## `/resources/`

### Content Hub

Primary purpose:

- Publish useful educational content.
- Build search visibility.
- Demonstrate how Jack approaches business problems.
- Support products and consulting without making every article a sales pitch.

Primary topic areas:

1. Measurement
2. Data Trust
3. AI Readiness
4. Fundraising / Salesforce Reporting
5. Accessibility

---

## `/resources/measurement/`

Possible topics:

- Why GA4 and Google Ads do not match
- Diagnosing missing conversions
- GTM audit methodology
- Consent-aware measurement
- Shopify customer events and tracking changes
- Server-side GTM concepts
- When platform discrepancies are expected

---

## `/resources/data-trust/`

Possible topics:

- Why employees export dashboards to Excel
- What spreadsheet reconciliation reveals about system problems
- Why reports disagree
- Where business rules actually live
- How manual workarounds create data-quality risk

---

## `/resources/ai-readiness/`

AI should be a content theme, not a service category.

Core position:

> AI readiness starts before AI.

Possible topics:

- The Excel test for AI readiness
- What long-tenured employees know that systems do not
- Why AI cannot resolve undefined business rules
- Do not automate the workaround
- Trusted data before AI implementation
- Institutional knowledge and data readiness

The content should not imply that Unified Stack is selling AI implementation unless that changes later.

---

## `/resources/fundraising-reporting/`

Possible topics:

- Turning fundraising questions into Salesforce reports
- Prospect/fundraiser assignment reporting
- Donor relationship complexity
- Why one-donor-per-row requests become difficult
- Reporting definitions and data dictionaries
- Advancement reporting governance

---

## `/resources/accessibility/`

Possible topics:

- Common accessibility barriers
- Why overlays are not remediation
- Keyboard testing basics
- Accessibility before a demand letter
- What a limited accessibility review does and does not cover
- When a full WCAG audit is appropriate

---

# About

## `/about/`

Optional future page.

Primary purpose:

- Explain Jack Tyler's relevant background.
- Explain that Jack operates through Unified Stack.
- Establish credibility without turning the entire website into a biography.
- Explain that the person a client speaks with is the person doing/managing the work.

Do not add this page until there is enough useful content to justify it.

---

# Contact

## `/contact`

Primary purpose:

- Let prospects describe the business problem in their own words.
- Do not force visitors to select a service before they understand the cause.

Current contact framing is appropriate:

> What is your business problem?

The form should continue to discourage submission of sensitive or confidential data.

---

# How I Work

The Services page should include a short trust section covering:

1. **Clear scope before work begins**
2. **Assessments stand on their own**
3. **The client keeps the documentation and knowledge**
4. **No project for the sake of a project**

Key trust statement:

> You can implement recommendations yourself, use another provider, or ask me to help.

This addresses common concerns about consulting dependency and audits being used only as sales mechanisms.

---

# Customer Paths

## Consulting Path

```text
Homepage / Referral / Search / Content
              ↓
         Services page
              ↓
   Specific service or contact
              ↓
     Assessment / project
              ↓
 Optional remediation / ongoing support
```

## Product Path

```text
Search / LinkedIn / Email / Ad
              ↓
       Product landing page
              ↓
        Buy DIY product
              ↓
  Customer identifies problems
              ↓
 Optional consulting/remediation
```

## Content Path

```text
Search / Social / Referral
              ↓
        Resource article
              ↓
  Relevant service or product
              ↓
     Contact / purchase
```

## Audience-Specific Path

```text
Outbound / Search / Referral
              ↓
        Solution page
              ↓
 Relevant service / assessment
              ↓
            Contact
```

---

# Product / Service Ladder

```text
Free educational content
        ↓
Low-cost digital product
        ↓
Fixed-scope assessment / audit
        ↓
Remediation / implementation
        ↓
Ongoing fractional support
```

Not every client must move through every step.

Audits and assessments should stand on their own.

---

# Build Priority

## Now

1. `/`
2. `/services`
3. `/contact`
4. Update service naming and positioning
5. Add "How I Work" section
6. Keep `resume` and `privacy` maintained
7. Keep sitemap/robots accurate

## Next

1. `/products/`
2. `/products/gtm-audit/`
3. `/services/marketing-measurement/`
4. `/services/crm-data-quality/`
5. `/services/accessibility/`

## After Demand Is Proven

1. `/services/salesforce-reporting/`
2. `/services/product-asset-data/`
3. `/services/fractional-operations/`
4. `/solutions/marketing-agencies/`
5. `/solutions/b2b-growth/`
6. `/solutions/nonprofits-foundations/`
7. `/solutions/ecommerce/`

## Content Expansion

Build `/resources/` only when there is enough content to make the hub useful.

Start with articles that directly support current offers rather than creating empty category pages.

---

# URL and Naming Rules

- Use lowercase URLs.
- Use hyphens between words.
- Keep URLs short and descriptive.
- Vercel `cleanUrls` should remain enabled.
- Use extensionless public URLs such as `/services`, not `/services.html`, for canonical links.
- Products live under `/products/`.
- Consulting work lives under `/services/`.
- Audience-specific pages live under `/solutions/`.
- Educational content lives under `/resources/`.
- Avoid empty directories and placeholder pages.
- Do not include internal search-result pages in the XML sitemap.
- Do not add `lastmod` to the sitemap unless the date can be kept accurate.

---

# Core Architecture Principle

Unified Stack should remain organized around the visitor's intent:

```text
SERVICES
I want someone to help solve this.

PRODUCTS
I want a tool I can use myself.

RESOURCES
I want to understand the problem.

SOLUTIONS
I want to know whether this applies to an organization like mine.
```

The services should remain coherent around a larger theme:

> Make the data, measurement, reporting, and digital systems behind business decisions more trustworthy.

AI readiness supports that position as a content theme because trustworthy AI starts with trustworthy information, documented business rules, and processes people already understand and trust.
