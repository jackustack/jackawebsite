# Unified Stack Website Sitemap

This sitemap defines the planned information architecture for the Unified Stack / Jack Tyler website. It is designed to support both consulting services and a growing catalog of downloadable digital products.

## Primary Navigation

- Products
- Services
- Resources
- About
- Contact

The site logo/name should link to the homepage, so a separate "Home" navigation item is not necessary.

---

## Site Structure

```text
/
├── index.html
│
├── products/
│   ├── index.html
│   │
│   ├── gtm-audit/
│   │   └── index.html
│   │
│   ├── consent-audit/
│   │   └── index.html          # Future
│   │
│   ├── ga4-audit/
│   │   └── index.html          # Future
│   │
│   └── future-product/
│       └── index.html          # Placeholder pattern only
│
├── services/
│   ├── index.html
│   │
│   ├── gtm/
│   │   └── index.html
│   │
│   ├── gtm-audit/
│   │   └── index.html
│   │
│   ├── salesforce-reporting/
│   │   └── index.html
│   │
│   └── data-quality/
│       └── index.html
│
├── resources/
│   ├── index.html
│   │
│   ├── gtm-audit-checklist/
│   │   └── index.html          # Future
│   │
│   ├── how-to-audit-gtm-tags/
│   │   └── index.html          # Future
│   │
│   ├── gtm-naming-conventions/
│   │   └── index.html          # Future
│   │
│   └── consent-mode-testing/
│       └── index.html          # Future
│
├── about/
│   └── index.html
│
├── contact/
│   └── index.html
│
├── css/
│   └── style.css
│
├── js/
│
└── assets/
    ├── images/
    └── downloads/
```

---

## Page Purpose

### `/`
**Homepage**

Primary purpose:
- Explain what Unified Stack does.
- Route visitors toward either products or consulting services.

Primary CTAs:
- Browse Audit Tools
- Hire Unified Stack

Suggested positioning:
> Make your marketing and business data more reliable.

---

### `/products/`
**Digital Product Storefront**

Primary purpose:
- List all downloadable audit tools, templates, workbooks, and future digital products.
- Give each product a short description, price, and link to its dedicated landing page.

Initial product:
- GTM Audit Workbook

Future products may include:
- Consent Mode Audit Toolkit
- GA4 Implementation Audit
- GTM Governance Templates
- Other technical audit and data-quality tools

---

### `/products/gtm-audit/`
**GTM Audit Workbook Landing Page**

Primary purpose:
- Sell the downloadable GTM audit product directly.
- Function as a standalone landing page for ads, email, social media, search, and direct outreach.

The visitor should not need to visit the homepage before purchasing.

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
10. Professional-service upsell

Primary CTA:
- Buy / Download GTM Audit Workbook

Secondary CTA:
- Have Unified Stack perform the audit

---

### `/services/`
**Consulting Services Overview**

Primary purpose:
- Explain the professional consulting work Unified Stack provides.
- Route visitors to individual service pages.

Core service categories:
- Google Tag Manager / Measurement
- Salesforce Reporting
- Data Quality

---

### `/services/gtm/`
**GTM Consulting**

Primary purpose:
- Describe GTM implementation, troubleshooting, governance, measurement, and remediation services.

Cross-sell:
- Link to the DIY GTM Audit Workbook.

---

### `/services/gtm-audit/`
**Professional GTM Audit**

Primary purpose:
- Sell a done-for-you GTM audit.

Positioning distinction:

```text
/products/gtm-audit/   = Do the audit yourself
/services/gtm-audit/   = Hire Unified Stack to perform the audit
```

Cross-sell:
- Link to the DIY GTM Audit Workbook for visitors who are not ready to purchase the professional service.

---

### `/services/salesforce-reporting/`
**Salesforce Reporting Services**

Primary purpose:
- Describe reporting, dashboard, data-quality, and reporting-process services related to Salesforce.

---

### `/services/data-quality/`
**Data Quality Services**

Primary purpose:
- Describe data cleaning, duplicate reduction, normalization, validation, and related services.

---

### `/resources/`
**Free Resources / Content Hub**

Primary purpose:
- Publish educational content that can attract search traffic and support product/service sales.
- Provide genuinely useful material while directing readers toward paid tools or consulting where appropriate.

Content may include:
- Articles
- Free checklists
- Technical guides
- Templates
- Tutorials
- Case studies

---

### `/resources/gtm-audit-checklist/`
**Free GTM Audit Content**

Example purpose:
- Publish a useful introductory GTM audit checklist.
- Lead interested users toward the paid GTM Audit Workbook.

Suggested CTA:
> Want the complete audit process? Get the GTM Audit Workbook.

---

### `/about/`
**About**

Primary purpose:
- Explain Jack Tyler's background, experience, and the Unified Stack approach.
- Establish credibility without making the entire site dependent on a personal-brand presentation.

---

### `/contact/`
**Contact**

Primary purpose:
- Let prospective consulting clients contact Unified Stack.
- Keep this page focused on service inquiries rather than digital-product support.

---

## Customer Paths

### DIY Product Path

```text
Search / LinkedIn / Email / Ad
            ↓
/products/gtm-audit/
            ↓
Purchase GTM Audit Workbook
            ↓
Customer finds problems
            ↓
Professional audit or remediation
```

### Consulting Path

```text
Homepage / Referral / Search
            ↓
/services/
            ↓
Specific service page
            ↓
Contact
            ↓
Consulting engagement
```

### Content / SEO Path

```text
Google / Social
      ↓
/resources/article/
      ↓
Relevant digital product
      ↓
Professional service
```

---

## Product / Service Ladder

```text
Free resources
      ↓
Digital products
      ↓
Audit review / consultation
      ↓
Professional audit
      ↓
Implementation / remediation
      ↓
Ongoing consulting
```

---

## Initial Build Priority

### Build Now

1. `/`
2. `/products/`
3. `/products/gtm-audit/`
4. `/services/`
5. `/services/gtm/`
6. `/services/salesforce-reporting/`
7. `/services/data-quality/`
8. `/about/`
9. `/contact/`

### Add Next

1. `/services/gtm-audit/`
2. `/resources/`
3. First GTM resource/article
4. Additional product pages as products are created

### Do Not Build Yet

Do not create empty pages for products or resources that do not exist. The directory structure above shows the intended future architecture, not a requirement to create every folder immediately.

---

## URL and Naming Rules

- Use lowercase URLs.
- Use hyphens between words.
- Keep URLs short and descriptive.
- Put downloadable products under `/products/`.
- Put done-for-you work under `/services/`.
- Put free educational material under `/resources/`.
- Give each major product its own landing page.
- Avoid using `/audit/` by itself because it does not distinguish DIY products from professional audit services.

---

## Core Architecture Principle

Unified Stack should be organized around three primary visitor needs:

```text
PRODUCTS
I want to do it myself.

SERVICES
I want someone to do it for me.

RESOURCES
I want to learn how it works.
```

This structure allows the website to grow from a consulting site into a combined consulting, digital-product, and educational platform without requiring another major site restructure.
