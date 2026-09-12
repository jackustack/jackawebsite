# JackTyler.com / Unified Stack — Site Refinement Roadmap

This checklist tracks completed and planned improvements to jackatyler.com.

## Development Workflow

`main` → feature branch → changes → test → commit → push → pull request → merge → delete branch

Completed branches should be removed locally and remotely after merge.

---

# P0 — Completed Foundation Work

## [x] Clean Git repository and establish `main` as source of truth

**Branch:** `chore-git-branch-cleanup`

Completed:

- Removed or pruned obsolete branches
- Confirmed `main` is the source of truth
- Confirmed local and remote `main` are synchronized
- Established feature-branch workflow
- Confirmed working tree is clean
- Established standard workflow:
  - switch to `main`
  - pull latest changes
  - create feature branch
  - make changes
  - stage
  - commit
  - push
  - create pull request
  - merge to `main`
  - update local `main`
  - delete completed feature branch
  - prune stale remote references

---

## [x] Finalize Services page

**Branch:** `feat-services-finalize`

Completed:

### Service architecture

Finalized six-service structure:

- CRM & Business Data Quality
- Marketing Measurement & Conversion Tracking
- Website Accessibility Assessment & Remediation
- Salesforce Reporting
- Product & Asset Data
- Fractional Marketing & Revenue Operations

Removed outdated service positioning including:

- Website Accessibility & Privacy
- AI for Marketing Operations as a standalone service
- Fractional Digital Strategy & Operations

### CRM & Business Data Quality

Updated positioning around:

- duplicate and inconsistent data
- standardization
- normalization
- import preparation
- validation
- conflicting sources
- identification of upstream sources of unreliable data

Final value statement:

> Make the information your teams rely on more trustworthy.

Pricing:

- Quick fixes from $450
- Assessments from $950

### Marketing Measurement & Conversion Tracking

Updated positioning around:

- GA4
- Google Tag Manager
- conversion tracking
- consent-aware measurement
- data layers
- measurement discrepancies

Final value statement:

> Know whether your marketing measurement is working—and why the numbers don’t agree when it isn’t.

Pricing:

- Quick fixes from $450
- Measurement audits from $1,250

### Website Accessibility Assessment & Remediation

Removed privacy, cookie, consent, and tracking language from the accessibility service.

Current scope includes:

- focused accessibility review
- keyboard testing
- common accessibility barriers
- remediation
- retesting
- implementation support

Final value statement:

> Reduce exposure to common accessibility problems before they become larger problems.

Pricing:

- Accessibility Essentials from $950

Added disclaimer:

> This is not a comprehensive WCAG conformance audit, legal certification, or guarantee against a complaint or lawsuit.

Added specialist-partner language for:

- comprehensive WCAG audits
- formal documentation
- larger remediation projects
- vetted accessibility specialists

### Salesforce Reporting

Current positioning includes:

- reports
- dashboards
- filters
- formulas
- report types
- reporting discrepancies
- underlying data issues preventing useful business information

Pricing:

- Quick fixes from $450
- Larger reporting projects from $950

### Product & Asset Data

Current positioning includes:

- DAM
- PIM
- product information
- syndication
- digital assets
- metadata
- workflow problems
- inconsistencies between systems or channels

Pricing:

- Assessments from $950

### Fractional Marketing & Revenue Operations

Current positioning includes:

- CRM
- analytics
- measurement
- reporting
- marketing systems
- workflows
- vendors
- cross-functional operational problems

Pricing:

- Starting at $2,000 per month

### How I Work

Added full How I Work section covering:

- Clear scope before work begins
- Assessments stand on their own
- Understand the process before changing the system
- Your team keeps the knowledge
- No project for the sake of a project

Key principles include:

- consulting should make the problem clearer
- clients should know what is and is not included before work begins
- assessments should remain useful even if Unified Stack is not hired for implementation
- clients may implement recommendations internally
- clients may use another provider
- documentation and findings belong to the client
- workarounds should be understood before being removed or automated
- larger projects should not be recommended when smaller fixes are appropriate

### HTML and semantic improvements

Added or standardized explicit classes including:

- `.site-header`
- `.primary-nav`
- `.page-intro`
- `.service-item`
- `.service-heading`
- `.service-description`
- `.service-pricing`
- `.service-note`
- `.how-i-work`
- `.how-i-work-intro`
- `.how-i-work-principles`
- `.how-i-work-item`
- `.contact-cta`
- `.contact-address`
- `.site-footer`

Development preference established:

- prefer semantic classes over structural CSS selectors
- avoid selectors such as `body > header`
- avoid broad element selectors where a reusable class provides better control

### Metadata

Updated Services page meta description to reflect the current service architecture.

Removed outdated references to:

- accessibility and privacy as a combined service
- AI-enabled marketing operations as a service
- digital strategy and operations as the main positioning

### Internal linking

Confirmed homepage service links point to the correct Services-page anchors.

Stable anchors include:

- `#service-data-quality`
- `#service-measurement`
- `#service-accessibility`
- `#service-salesforce`
- `#service-product-data`
- `#service-fractional`

Changed bottom Services CTA to direct visitors to the Contact page.

Changed homepage contact CTA to direct visitors to the Contact page.

### Semantic HTML review

Confirmed:

- one H1
- logical H1 → H2 → H3 hierarchy
- no inappropriate skipped heading levels
- semantic `<nav>`
- `aria-current="page"` on Services
- skip link
- main-content target
- stable section IDs
- meaningful `aria-labelledby` relationships
- semantic contact information
- no unnecessary positive `tabindex` values

### Accessibility review

Audited primarily in Firefox.

Confirmed:

- keyboard-only navigation works
- skip link works
- visible focus indicators work
- logical tab order
- headings are not incorrectly included in normal tab navigation
- 200% zoom works
- 400% / reflow behavior reviewed
- mobile responsive behavior works
- text spacing does not break layout
- contrast simulations retain visible content
- links remain distinguishable
- search field has an accessible label
- accessibility tree presents expected structure

Known follow-up:

- mobile vertical spacing is larger than desired and should be reduced later

### Content review

Confirmed generic consulting language is absent, including:

- digital transformation
- AI transformation
- strategic transformation
- tailored solutions
- end-to-end solutions
- unlock your data
- actionable insights
- optimize your ecosystem
- generic best-practices language

Confirmed Services page remains aligned with the broader positioning around:

- trustworthy data
- trustworthy measurement
- trustworthy reporting
- accessibility
- reliable business information
- practical systems improvement
- solving concrete business problems

### Git / deployment

- Changes committed
- Feature branch pushed
- Pull request created
- Pull request merged to `main`
- Local `main` updated
- Feature branch removed
- Local and remote repository confirmed synchronized

---

## [x] Verify production contact form

**Branch:** N/A — production verification

Confirmed complete flow:

`contact.html`
→ Cloudflare Turnstile
→ Vercel `/api/contact`
→ Cloudflare Siteverify
→ validation
→ Supabase `contact_submissions`

Confirmed:

- Turnstile appears on live site
- Turnstile validation succeeds
- Vercel API accepts valid submission
- submission reaches Supabase
- real production form submission works
- Turnstile secret remains server-side
- public Turnstile site key remains appropriate for frontend use

Known follow-up:

- successful submission currently needs a better post-submit experience

---

# P0 — Immediate Conversion Improvements

## [ ] Move Services CTA higher on page

**Suggested branch:** `feat-services-cta`

Current issue:

The main Services CTA appears too far down the page.

Preferred direction:

- add primary CTA in or immediately below the Services intro/header
- keep the primary conversion action visible early
- aim for above-the-fold visibility where practical
- link to `contact.html`
- retain a lower-page CTA if useful
- avoid overly aggressive sales language
- test desktop and mobile placement

---

## [ ] Improve contact-form success state

**Suggested branch:** `feat-contact-success-state`

After successful form submission:

- disable submit button while sending
- change button text to `Sending…`
- prevent duplicate submissions
- show clear success confirmation
- move keyboard focus to success message
- keep confirmation accessible to screen readers
- preserve form data when submission fails
- show an accessible error message
- do not immediately redirect the visitor away from the page

---

## [ ] Add lead notifications

**Suggested branch:** `feat-contact-notifications`

After a successful Supabase submission:

- notify Jack that a new lead was received
- include lead name
- include email
- include organization/company if collected
- include problem category if added later
- include submitted message
- include later diagnostic responses if available

Important:

Notification failure must not make a successful customer submission appear to have failed.

---

## [ ] Add contact conversion tracking

**Suggested branch:** `feat-contact-analytics`

Implement:

- push `contact_form_submit` to `dataLayer`
- fire event only after server confirms successful submission
- configure GTM trigger
- send event to GA4
- configure appropriate GA4 key event/conversion
- verify event fires exactly once
- test using GTM Preview
- verify event in GA4

---

# Known Follow-Up Refinements

These have been identified but belong to later priority groups.

## [ ] Reduce excessive mobile vertical spacing

**Suggested branch:** `fix-mobile-spacing`

Review:

- page section padding
- service section padding
- paragraph margins
- How I Work spacing
- contact CTA spacing

Primary testing browser:

- Firefox Responsive Design Mode

---

## [ ] Create About / How I Work page

**Suggested branch:** `feat-about-how-i-work`

Future direction:

- move the full How I Work content to the About page
- keep biography relatively short
- emphasize how Jack works and what clients can expect
- include LinkedIn link
- optionally link to Resume

---

## [ ] Shorten How I Work on Services page

**Suggested branch:** `feat-about-how-i-work`

After About page exists:

- replace long Services-page How I Work section with concise version
- retain major trust points
- link to full About / How I Work page

---

## [ ] Evaluate site search strategy

**Suggested branch:** `chore-site-search-review`

Evaluate whether built-in site search should be:

- kept
- improved
- simplified
- replaced
- removed

Consider:

- usability
- accessibility
- future site size
- Blog
- Resources
- Products
- navigation
- search-engine indexing
- LLM discoverability

---

## [ ] Create Previous Projects page

**Suggested branch:** `feat-previous-projects`

Potential project structure:

- organization type
- business problem
- original request
- what was discovered
- work performed
- deliverables
- outcome
- technologies involved where relevant

Requirements:

- protect confidential information
- anonymize where necessary
- do not invent outcomes or metrics
- emphasize business problems and results over technology lists

---

## [ ] Add meeting scheduling

**Suggested branch:** `feat-meeting-scheduling`

Potential implementation:

- Schedule a Meeting CTA on key pages
- fuller scheduling experience on Contact page
- accessible booking process
- mobile-friendly experience
- GTM/GA4 tracking
- evaluate provider before implementation

---

# Development Principles

- Keep `main` clean and deployable.
- Use focused feature branches.
- Pull current `main` before creating a new feature branch.
- Prefer semantic CSS classes over structural selectors.
- Keep important content directly available in HTML.
- Prioritize accessibility.
- Test primarily in Firefox for website audits.
- Prioritize mobile performance and usability.
- Prefer specific business language over generic consulting language.
- Keep pricing visible where practical.
- Do not add nonexistent URLs to the XML sitemap.
- Avoid building features before there is evidence they are useful.
- Treat LLM discoverability as an additional requirement alongside SEO, accessibility, semantic HTML, and good information architecture.
- Allow search behavior, lead questions, and real client feedback to guide future content changes.

# P1 — Contact Experience / Lead Qualification

## [ ] Add optional "One Question" after contact submission

**Suggested branch:** `feat-contact-one-question`

Concept:

> What makes you think something is wrong?

Requirements:

- Ask only after the original contact submission succeeds
- Make the response optional
- Store the response with the existing lead
- Explain that this is often one of the first questions Jack asks during discovery
- Keep the interaction short
- Do not require the visitor to repeat information already submitted
- Maintain accessible keyboard and screen-reader behavior
- Do not interfere with the successful submission confirmation

Potential value:

- provides better context before the initial conversation
- helps distinguish symptoms from root causes
- may reveal business/process information not included in the original message
- makes the contact experience more useful than a typical confirmation page

---

## [ ] Develop the "First Read" response

**Suggested branch:** `feat-contact-first-read`

Provide the prospect with a short, useful initial interpretation based on what they submitted.

Potential output:

- what kind of problem the submission appears to describe
- what Jack would investigate first
- what might explain the issue
- what information would help determine the cause
- what the prospect should avoid changing prematurely

Example direction:

A prospect reporting that GA4, Google Ads, and Shopify disagree might receive a short explanation that discrepancies do not automatically mean tracking is broken and that attribution rules, consent, missing events, duplicate events, and browser/server implementation should be reviewed before changing tags.

Requirements:

- useful even if the prospect never becomes a client
- concise
- cautious about conclusions
- clearly distinguish an initial interpretation from a completed assessment
- avoid unsupported diagnoses
- do not market this as an "AI assessment"
- start with deterministic or rules-based logic before adding an LLM if practical

Future possibility:

Use the selected service/problem category and submitted message to route the prospect toward the most relevant diagnostic guidance.

---

## [ ] Add prospect confirmation email

**Suggested branch:** `feat-contact-autoresponse`

After a successful submission:

- send a confirmation email to the prospect
- confirm that the message was received
- avoid generic sales autoresponder language
- explain what happens next
- provide one useful next step
- potentially link to one relevant resource
- potentially include the First Read response later
- potentially include the prospect's answer to the One Question

Do not:

- overwhelm the prospect with multiple CTAs
- automatically add the prospect to a marketing list without appropriate consent
- pretend a detailed assessment has already been completed

---

# P1 — About / Trust Architecture

## [ ] Create About / How I Work page

**Suggested branch:** `feat-about-how-i-work`

Create an About page that is light on traditional biography and heavy on:

- how Jack works
- what clients can expect
- project scope
- assessments
- deliverables
- documentation
- handoff
- knowledge transfer
- business-process discovery
- avoiding unnecessary work

Include a short introduction covering:

- Jack Tyler
- Unified Stack
- relevant professional background
- the types of business problems Jack works on

Include links to:

- LinkedIn
- Resume, if useful

Move the current full How I Work content to this page.

Core principles should include:

### Clear scope before the work begins

Clients should understand:

- what is being reviewed
- what is included
- what is not included
- what will be delivered
- when scope changes require additional discussion

### Assessments stand on their own

An assessment should remain useful even if the client does not hire Unified Stack to perform the remediation.

Clients should be able to:

- implement recommendations internally
- use another provider
- ask Unified Stack to implement the recommendations

### Understand the process before changing the system

Workarounds often contain useful institutional knowledge.

Before removing or automating a workaround, understand:

- why it exists
- what business rule it contains
- what exception it handles
- what staff members know that the official system may not

### Your team keeps the knowledge

Clients should retain:

- documentation
- findings
- recommendations
- implementation information
- understanding of what changed and why

Avoid creating unnecessary dependence on the consultant.

### No project for the sake of a project

If something does not need to be replaced or rebuilt, say so.

Prefer:

- smaller fixes when appropriate
- existing tools when they are sufficient
- clear prioritization
- honest recommendations

Do not manufacture additional work simply because more consulting could be sold.

---

## [ ] Shorten How I Work section on Services page

**Suggested branch:** `feat-about-how-i-work`

After the full About / How I Work page exists:

- move the long current How I Work section to the About page
- replace it on Services with a shorter version
- keep the trust-building principles
- avoid duplicating the entire About page

Short Services version should communicate:

- clear scope
- useful standalone deliverables
- client ownership of findings and documentation
- understanding business processes before changing systems
- no unnecessary work

Add a link such as:

`Learn more about how I work →`

---

## [ ] Create Previous Projects page

**Suggested branch:** `feat-previous-projects`

Purpose:

Provide concrete evidence of the types of work Jack has actually performed.

Potential project structure:

- organization type
- business problem
- original request
- what was investigated
- what was discovered
- work performed
- deliverables
- outcome
- technologies involved where useful

Potential project categories:

- Salesforce reporting
- CRM/data quality
- analytics/GTM
- marketing measurement
- DAM/PIM
- accessibility
- data integrations
- reporting migrations
- marketing technology
- process improvement

Requirements:

- protect confidential client information
- anonymize organizations when necessary
- do not invent metrics
- do not disclose proprietary information
- emphasize business problems and outcomes over lists of technologies
- identify situations where the original request turned out not to be the actual root problem

Potential future use:

- internal links from Services pages
- internal links from solution pages
- evidence for LLM/search retrieval
- trust-building content for leads

---

# P1 — Mobile / CSS Refinement

## [ ] Reduce excessive mobile vertical spacing

**Suggested branch:** `fix-mobile-spacing`

Known issue:

Mobile layout works, but vertical spacing is larger than necessary.

Review:

- main page section padding
- Services section padding
- service-item padding
- paragraph margins
- How I Work spacing
- Contact CTA spacing
- page-intro spacing
- footer spacing where relevant

Primary testing browser:

- Firefox
- Firefox Responsive Design Mode

Test widths including approximately:

- 320px
- 375px
- 640px
- 768px

Requirements:

- preserve readability
- preserve touch spacing
- avoid overly compressed content
- maintain heading hierarchy
- maintain visible separation between services

---

## [ ] Continue migration toward class-based CSS

**Suggested branch:** `refactor-css-classes`

CSS preference:

Use explicit semantic classes rather than structural selectors.

Prefer:

`.site-header`

instead of:

`header`

Prefer:

`.primary-nav`

instead of:

`nav`

Prefer:

`.site-footer`

instead of:

`footer`

Review broad selectors including:

- `header`
- `nav`
- `footer`
- `header, main, footer`
- `main > section`
- other selectors likely to affect future nested elements

Reason:

As the site grows to include:

- Blog articles
- About page
- Resources
- Products
- Previous Projects
- nested article headers
- reusable components

broad structural selectors are more likely to create unintended CSS inheritance or collisions.

Do not refactor only for cosmetic reasons.

Prioritize changes that:

- prevent collisions
- improve maintainability
- make future components easier to style
- improve consistency

---

# P1 — Search / LLM Discoverability

## [ ] Establish LLM/search discoverability requirements

**Suggested branch:** `feat-llm-discoverability`

Treat LLM readability and answer-engine visibility as formal site requirements.

Every important page should clearly communicate:

- what the page is about
- who it is for
- what problem it addresses
- what service or resource is being described
- what Jack actually does
- what deliverables exist
- relevant pricing where appropriate
- important limitations
- what the visitor should do next

Important content should be available directly in HTML.

Avoid relying on:

- images for important text
- PDF-only explanations
- JavaScript-only rendering for critical information
- interactions that must be clicked before important information becomes available

Write content so an LLM can identify:

- the subject
- the problem
- the proposed approach
- the limitations
- Jack Tyler
- Unified Stack
- relevant services

Do not distort human-readable content solely for LLM optimization.

---

## [ ] Review `robots.txt`

**Suggested branch:** `feat-llm-discoverability`

Review crawler access.

Confirm:

- ordinary search crawlers are allowed
- important site sections are not accidentally blocked
- `sitemap.xml` is referenced

Explicitly review:

- OAI-SearchBot
- GPTBot

Keep two questions separate:

1. Should the site appear in AI/search results?
2. Should site content be available for model training?

Search visibility and model-training permissions are not the same thing.

---

## [ ] Add `llms.txt`

**Suggested branch:** `feat-llms-txt`

Create:

`/llms.txt`

Purpose:

Provide a concise machine-readable overview of important site content.

Potential contents:

- Jack Tyler
- Unified Stack
- concise description of the business
- current services
- products
- solutions
- resources
- Blog
- About / How I Work
- Previous Projects
- important URLs

Requirements:

- include only URLs that actually exist
- update as new sections launch
- keep content factual
- keep it concise
- do not treat it as a replacement for normal SEO or crawling

---

## [ ] Add structured data

**Suggested branch:** `feat-structured-data`

Initial JSON-LD:

- `Person`
- `Organization`
- `WebSite`

Clearly establish:

Jack Tyler  
→ consultant / founder  
→ Unified Stack  
→ jackatyler.com

Potential later structured data:

- `Service`
- `BreadcrumbList`
- `Article`
- `BlogPosting`
- `Product`

Requirements:

- structured data must match visible content
- do not create unsupported claims
- do not create fake reviews
- do not create fake ratings
- do not add credentials that are not actually held
- validate markup after implementation

---

## [ ] Evaluate site search strategy

**Suggested branch:** `chore-site-search-review`

Do not automatically remove site search.

Evaluate whether site search should be:

- kept as-is
- improved
- simplified
- replaced
- removed

Consider:

- current site size
- future Blog volume
- Resources volume
- Products
- Previous Projects
- solution pages
- navigation usability
- accessibility
- mobile usability
- LLM discoverability
- search-engine indexing
- whether visitors actually use on-site search

Potential result:

Site search may become more valuable as content grows.

Do not make the decision only because LLM search exists.

---

## [ ] Verify search-engine indexing infrastructure

**Suggested branch:** `chore-search-indexing`

Review:

- Google Search Console
- Bing Webmaster Tools
- sitemap submission
- indexing coverage
- crawl errors
- canonical URLs
- pages excluded from indexing
- pages discovered but not indexed

As new pages launch:

- update sitemap
- submit where appropriate
- monitor whether pages become indexed

Do not add future URLs to the XML sitemap before the pages exist.

---

## [ ] Track AI referral traffic

**Suggested branch:** `feat-ai-referral-analytics`

Create reporting for identifiable sources including:

- ChatGPT
- Google organic
- Bing organic
- other identifiable AI/search referral traffic

Measure:

- sessions
- landing pages
- service-page visits
- Blog visits
- resource visits
- contact submissions
- conversion rate
- booked meetings later

Do not judge performance solely by raw traffic.

Focus on whether visitors:

- reach relevant pages
- contact Jack
- purchase products
- schedule meetings
- engage with relevant content

---

# P1 — Blog / Publishing Platform

## [ ] Create Blog foundation

**Suggested branch:** `feat-blog-foundation`

Create:

`/blog/`

Purpose:

Make jackatyler.com the primary publishing source for ongoing thought leadership and educational content.

Create:

- Blog index
- reusable article template
- article title
- author information
- published date
- updated date
- article body
- category where useful
- canonical URL
- accessible heading structure
- internal links
- relevant service links
- related content links

Consider future:

- pagination
- archive
- category filtering
- tags

Do not overbuild these features before article volume justifies them.

The Blog should be designed so articles can also be adapted for:

- LinkedIn
- other professional platforms
- future newsletter use

---

## [ ] Add Blog SEO / machine-readable publishing support

**Suggested branch:** `feat-blog-seo-feed`

Add:

- `BlogPosting` or `Article` JSON-LD
- Open Graph metadata
- social sharing metadata
- canonical URLs
- sitemap integration
- RSS or Atom feed

Article metadata should include where appropriate:

- headline
- author
- publication date
- modification date
- canonical URL
- description

Keep structured data consistent with visible content.

---

## [ ] Build cross-platform content workflow

**Suggested branch:** `feat-content-syndication`

Treat jackatyler.com as the canonical/original publication source.

Create a repeatable workflow:

Website Blog article  
→ LinkedIn adaptation  
→ shorter professional posts  
→ other platforms  
→ future newsletter content

Goals:

- write the strongest version for jackatyler.com first
- adapt rather than blindly duplicate
- link back to the original article where useful
- preserve Jack's voice
- avoid creating many low-quality variations solely for search visibility

---

# P1 — Initial Blog Content

## [ ] Publish "Why GA4 and Google Ads Don't Match"

**Suggested branch:** `content-ga4-google-ads`

Potential topics:

- why platforms report different numbers
- attribution differences
- conversion windows
- consent effects
- missing events
- duplicate events
- browser vs server behavior
- expected discrepancies
- problematic discrepancies
- when someone should actually investigate

Goal:

Create a useful explanation that can naturally connect to:

- Marketing Measurement & Conversion Tracking service
- GTM Audit Workbook
- agency solution page

---

## [ ] Publish "The Excel Test for AI Readiness"

**Suggested branch:** `content-excel-test-ai-readiness`

Core idea:

If employees trust a spreadsheet more than the official system, find out what the spreadsheet knows before adding AI or automation.

Potential topics:

- undocumented business rules
- historical exceptions
- manual classifications
- reconciliation
- institutional knowledge
- manual corrections
- trusted data
- AI readiness

Important framing:

Do not present this as employees resisting technology.

The point is:

workarounds may contain business knowledge that has never been encoded in the official system.

---

## [ ] Publish "If Employees Trust Excel More Than Salesforce, Find Out Why"

**Suggested branch:** `content-excel-vs-salesforce`

Potential topics:

- Salesforce reports
- spreadsheet exports
- manual adjustments
- exclusions
- classifications
- conflicting metrics
- report definitions
- institutional knowledge
- business processes

Core idea:

The spreadsheet may not be the problem.

It may reveal information or logic that the official system is missing.

---

## [ ] Publish accessibility scanner article

**Suggested branch:** `content-accessibility-scanners`

Potential title direction:

"What Automated Accessibility Scanners Can — and Cannot — Tell You"

Explain:

- automated scanning
- common detectable problems
- keyboard testing
- screen-reader testing
- manual review
- WCAG conformance
- limited assessments
- comprehensive audits
- remediation

Important:

Do not imply automated tools can certify compliance.

---

# P1 — Dedicated Service Pages

## [ ] Marketing Measurement & Conversion Tracking

**Suggested branch:** `feat-service-marketing-measurement`

Create:

`/services/marketing-measurement/`

Likely first dedicated service page.

Cover:

- GA4
- Google Tag Manager
- conversion tracking
- Google Ads
- Meta/browser/server signals where appropriate
- consent-aware measurement
- data layers
- enhanced conversions
- event deduplication
- measurement discrepancies
- auditing
- remediation

Explain common symptoms:

- GA4 and advertising platforms disagree
- conversions disappear
- conversion volume suddenly changes
- duplicate conversions
- consent changes affect reporting
- unclear tracking implementation
- multiple tools disagree

Include:

- what Jack investigates
- deliverables
- pricing
- limitations
- next step
- relevant Blog/resources

---

## [ ] CRM & Business Data Quality

**Suggested branch:** `feat-service-crm-data-quality`

Create:

`/services/crm-data-quality/`

Focus on trustworthy business information.

Potential problems:

- duplicate records
- inconsistent values
- conflicting sources
- missing data
- unreliable fields
- normalization
- validation
- import preparation
- migration preparation
- reporting reliability
- upstream workflow issues
- business rules
- spreadsheet reconciliation

Avoid positioning this as generic database cleanup.

Explain how unreliable data affects:

- decisions
- reporting
- automation
- customer outreach
- fundraising
- sales
- marketing

---

## [ ] Website Accessibility

**Suggested branch:** `feat-service-accessibility`

Create:

`/services/accessibility/`

Include:

- Accessibility Essentials
- focused accessibility review
- keyboard testing
- manual testing
- common accessibility barriers
- remediation
- retesting
- implementation support
- pricing
- scope limitations

Clearly explain:

- what Accessibility Essentials covers
- what it does not cover
- when a comprehensive WCAG audit is more appropriate
- when specialist partners may be involved

Retain disclaimer:

> This is not a comprehensive WCAG conformance audit, legal certification, or guarantee against a complaint or lawsuit.

---

## [ ] Salesforce Reporting

**Suggested branch:** `feat-service-salesforce-reporting`

Create:

`/services/salesforce-reporting/`

Focus on business reporting questions rather than Salesforce features alone.

Potential topics:

- reports
- dashboards
- filters
- formulas
- report types
- conflicting reports
- report definitions
- underlying data problems
- business rules
- spreadsheet exports
- manual reconciliation

Core positioning:

> Give teams the information they need without fighting Salesforce.

---

## [ ] Product & Asset Data

**Suggested branch:** `feat-service-product-asset-data`

Create:

`/services/product-asset-data/`

Potential topics:

- DAM
- PIM
- product information
- digital assets
- metadata
- taxonomy
- syndication
- source-of-truth problems
- duplicate content
- enrichment
- vendor selection
- process assessment

Keep this a secondary service rather than the primary homepage lead offer.

---

## [ ] Fractional Marketing & Revenue Operations

**Suggested branch:** `feat-service-fractional-operations`

Create:

`/services/fractional-operations/`

Focus on organizations that have enough complexity to need ownership but not enough need for another full-time senior hire.

Potential areas:

- CRM
- analytics
- measurement
- reporting
- marketing systems
- workflows
- vendors
- automation
- data quality
- cross-functional operations

Pricing direction:

- starting at $2,000/month

Avoid leading with AI.

---

# P1 — Products

## [ ] Build Products hub

**Suggested branch:** `feat-products-hub`

Create:

`/products/`

Purpose:

Provide a home for current and future digital products.

Do not structure the entire Products section around only one product.

Potential future product categories:

- audit workbooks
- checklists
- templates
- diagnostic tools
- data-quality tools
- measurement tools
- accessibility tools

---

## [ ] Build GTM Audit Workbook

**Suggested branch:** `feat-product-gtm-audit`

Create:

`/products/gtm-audit/`

Tasks:

- define workbook scope
- define target audience
- create workbook
- determine price
- test workbook
- improve instructions
- define delivery mechanism
- create standalone landing page
- add purchase analytics
- add product structured data
- add licensing language
- add refund language where appropriate

The landing page should work independently.

A visitor should be able to arrive directly from:

- paid advertising
- LinkedIn
- Blog articles
- search
- an LLM answer
- another website

without first visiting the homepage.

Potential relationship:

GTM Audit Workbook  
→ self-service audit  
→ identify measurement issue  
→ optional Unified Stack remediation

---

# P2 — Resources / Evergreen Knowledge

## [ ] Build Resources hub

**Suggested branch:** `feat-resources-hub`

Create:

`/resources/`

Differentiate Resources from Blog.

### Blog

Use for:

- observations
- commentary
- lessons
- current explanations
- project insights
- publishing stream

### Resources

Use for:

- durable guides
- frameworks
- checklists
- methodologies
- reference content
- long-lived educational material

---

## [ ] Measurement Resources

**Suggested branch:** `feat-resources-measurement`

Potential content:

- why GA4 and Google Ads disagree
- GTM audit methodology
- diagnosing missing conversions
- consent-aware measurement
- Shopify customer events
- server-side GTM
- expected vs problematic discrepancies
- conversion tracking checklist

---

## [ ] Data Trust Resources

**Suggested branch:** `feat-resources-data-trust`

Potential content:

- why reports disagree
- what spreadsheet reconciliation reveals
- business definitions
- source-of-truth problems
- undocumented business rules
- manual workarounds
- data-quality warning signs
- reconciliation frameworks

---

## [ ] AI Readiness Resources

**Suggested branch:** `feat-resources-ai-readiness`

Potential content:

- AI readiness starts before AI
- Excel Test for AI Readiness
- institutional knowledge and AI
- trusted data before AI implementation
- don't automate the workaround
- what employees know that systems do not

---

## [ ] Fundraising Reporting Resources

**Suggested branch:** `feat-resources-fundraising-reporting`

Potential content:

- turning fundraising questions into Salesforce reports
- prospect assignment reporting
- donor relationships
- fundraising definitions
- reporting definitions
- data dictionaries
- advancement reporting governance
- why fundraising reports disagree

---

## [ ] Accessibility Resources

**Suggested branch:** `feat-resources-accessibility`

Potential content:

- common accessibility barriers
- keyboard testing
- manual testing
- automated scanner limitations
- accessibility overlays
- what limited accessibility reviews cover
- when comprehensive WCAG audits are appropriate
- remediation planning

---

# P2 — Audience / Solution Pages

## [ ] Marketing Agencies

**Suggested branch:** `feat-solution-marketing-agencies`

Create:

`/solutions/marketing-agencies/`

Target:

- PPC agencies
- paid-media agencies
- SEO agencies
- growth agencies
- web agencies

Likely target size:

- approximately 5–50 employees
- managing multiple client sites
- no dedicated measurement implementation specialist

Core message:

> You manage the campaigns. I make sure the measurement works.

Potential problems:

- GA4
- GTM
- conversion tracking
- attribution
- consent
- client reporting discrepancies
- measurement troubleshooting

This is a high-priority acquisition audience because one agency relationship may generate repeated client projects.

---

## [ ] B2B Growth Companies

**Suggested branch:** `feat-solution-b2b-growth`

Create:

`/solutions/b2b-growth/`

Likely audience:

- approximately 20–100 employees
- B2B SaaS
- technology
- professional services
- specialized manufacturing
- companies using Salesforce and/or HubSpot
- growing companies without mature RevOps

Potential problems:

- CRM data
- lifecycle stages
- unclear attribution
- bad lead routing
- integration problems
- duplicate records
- reports leadership does not trust
- marketing and sales systems disagree
- unclear pipeline definitions

Potential commercial model:

Assessment  
→ remediation  
→ optional fractional operations support

---

## [ ] Nonprofits / Foundations

**Suggested branch:** `feat-solution-nonprofits`

Create:

`/solutions/nonprofits-foundations/`

Potential audience:

- university foundations
- advancement organizations
- alumni organizations
- fundraising organizations
- nonprofits using Salesforce
- development operations teams
- advancement services teams

Use business/fundraising language rather than technical Salesforce implementation language.

Potential questions:

- Who should a fundraiser contact?
- Who has not given recently?
- Who increased giving?
- Which campaign produced donors?
- Which donors belong to which fundraiser?
- Why do reports disagree?
- Why is Excel still required?
- How much has a donor given across multiple entities?

---

## [ ] Ecommerce

**Suggested branch:** `feat-solution-ecommerce`

Create:

`/solutions/ecommerce/`

Target higher-value stores rather than very small merchants.

Useful targeting signals:

- meaningful paid-media spend
- Google Ads
- Meta
- internal marketer or external agency
- enough transaction volume that measurement problems matter

Potential problems:

- Shopify and GA4 disagree
- Google Ads misses conversions
- Meta reports different revenue
- consent affects measurement
- duplicated browser/server events
- customer-event architecture
- server-side tracking
- checkout changes

Do not promise identical revenue numbers across all platforms because attribution systems differ.

---

# P2 — Conversion / Scheduling

## [ ] Add meeting scheduling

**Suggested branch:** `feat-meeting-scheduling`

Evaluate scheduling provider before implementation.

Potential locations:

- Contact page
- Services page
- About page
- individual service pages
- selected Blog/resources pages

Preferred approach:

- lightweight "Schedule a meeting" CTA on normal pages
- fuller calendar/booking experience on Contact page

Requirements:

- keyboard accessible
- screen-reader accessible
- mobile friendly
- minimal performance impact
- track booking interactions in GTM/GA4
- avoid making every page feel dominated by a booking widget

---

# P2 — Evidence and Trust

## [ ] Develop reusable case-study format

**Suggested branch:** `feat-case-studies`

Suggested structure:

1. What the organization thought was wrong
2. What was requested
3. What was investigated
4. What was actually causing the problem
5. What was changed
6. What did not need changing
7. What was delivered
8. Outcome

Requirements:

- use real evidence
- protect confidential information
- anonymize when necessary
- do not invent results
- do not exaggerate metrics

Potential value:

- human trust
- search visibility
- LLM citations
- internal links from service pages
- proof of actual experience

---

## [ ] Develop original consulting frameworks

**Suggested branch:** `content-original-frameworks`

Potential frameworks:

### Excel Test for AI Readiness

If staff trusts spreadsheets more than official systems, determine what knowledge exists in the spreadsheet before adding automation or AI.

### Measurement Trust Audit

Potential framework for separating:

- expected measurement differences
- implementation problems
- attribution differences
- consent effects
- business-definition differences

### Data Trust Checklist

Potential questions:

- Which system is considered authoritative?
- Do teams agree on definitions?
- Are employees modifying data outside the official system?
- Are reports reconciled manually?
- Are exceptions documented?
- Are important business rules encoded anywhere?

### "When the Numbers Don't Add Up" diagnostic model

Potential organizing concept for:

- analytics
- CRM
- Salesforce
- fundraising
- ecommerce
- marketing reporting

Publish enough of the methodology that:

- prospects understand the approach
- search engines understand the expertise
- LLMs have something distinctive to associate with Jack Tyler / Unified Stack

---

## [ ] Improve internal linking architecture

**Suggested branch:** `feat-internal-linking`

Develop deliberate relationships among:

Blog  
→ Resources  
→ Services  
→ Solutions  
→ Products  
→ Previous Projects  
→ Contact

Requirements:

- avoid orphan pages
- use descriptive anchor text
- avoid excessive generic "learn more" links
- link Blog articles to relevant service pages
- link services to useful resources
- link solution pages to underlying services
- link products to relevant educational material
- update sitemap as pages launch

Do not create links to pages that do not yet exist.

---

# P3 — Future Interactive Features

## [ ] How I Work / Client Expectations chatbot

**Suggested branch:** `feat-how-i-work-chatbot`

This is a much-later improvement.

Build only after:

- About page exists
- full How I Work content is stable
- client expectations are documented
- service descriptions are mature

Initial chatbot scope should be intentionally narrow.

Potential questions:

- How does Jack work?
- What happens during an assessment?
- What will I receive?
- How is scope determined?
- Can my internal team implement the recommendations?
- Can I hire another provider?
- Does Unified Stack provide documentation?
- What happens when a problem does not require more work?
- What should I expect during a project?
- What is included in Accessibility Essentials?
- How does a measurement audit work?

Requirements:

- ground answers in approved website content
- do not let it invent services
- do not let it invent pricing
- do not let it make legal claims
- do not let it promise outcomes
- clearly route prospects to Contact when a question requires project-specific analysis

Potential future expansion:

- service routing
- product recommendations
- relevant Blog/resource suggestions
- meeting scheduling

---

## [ ] Reusable lead diagnostics

**Suggested branch:** `feat-lead-diagnostics`

Develop problem-specific diagnostic flows.

Potential categories:

### Marketing Measurement

Questions might address:

- which systems disagree
- when the discrepancy started
- whether implementation recently changed
- whether consent changed
- whether browser/server tracking exists
- which conversions matter

### CRM / Data Quality

Questions might address:

- duplicate records
- source-of-truth problems
- conflicting systems
- manual corrections
- reporting issues
- imports
- workflow sources

### Salesforce Reporting

Questions might address:

- what business question the report should answer
- which reports disagree
- whether users export to Excel
- definitions used by different teams
- underlying object/data problems

### Accessibility

Questions might address:

- site size
- known complaint
- known barriers
- automated scan findings
- keyboard problems
- remediation needs

### Product / DAM / PIM

Questions might address:

- source systems
- syndication
- metadata
- duplicated content
- asset ownership
- workflow problems

### Fractional Operations

Questions might address:

- systems involved
- teams involved
- ownership gaps
- reporting problems
- vendor problems
- recurring operational issues

Use responses to improve preparation for the initial conversation.

---

## [ ] Content workflow automation

**Suggested branch:** `feat-content-workflow`

Build only after publishing volume makes automation worthwhile.

Possible workflow:

Blog article  
→ LinkedIn adaptation  
→ shorter posts  
→ email/newsletter copy  
→ related service links  
→ related resource links

Potential goals:

- reduce repetitive publishing work
- preserve the canonical website article
- maintain consistent messaging
- make it easier to distribute original thinking

Do not create large amounts of low-quality automated content.

---

# Current Recommended Work Order

1. [x] Git cleanup
2. [x] Services-page finalization
3. [x] Contact form production verification
4. [ ] Move Services CTA higher
5. [ ] Improve contact success state
6. [ ] Add lead notifications
7. [ ] Add contact conversion tracking
8. [ ] Reduce mobile vertical spacing
9. [ ] About / How I Work page
10. [ ] Shorten How I Work on Services
11. [ ] LLM/search discoverability foundation
12. [ ] Review `robots.txt`
13. [ ] Add structured data
14. [ ] Add `llms.txt`
15. [ ] Verify search-engine indexing infrastructure
16. [ ] Blog foundation
17. [ ] Blog SEO/feed support
18. [ ] Publish first 2–3 original Blog articles
19. [ ] Marketing Measurement service page
20. [ ] Products hub
21. [ ] GTM Audit Workbook
22. [ ] CRM & Business Data Quality service page
23. [ ] Accessibility service page
24. [ ] Previous Projects page
25. [ ] Meeting scheduling
26. [ ] Salesforce Reporting service page
27. [ ] Product & Asset Data service page
28. [ ] Fractional Operations service page
29. [ ] Marketing Agencies solution page
30. [ ] B2B Growth solution page
31. [ ] Nonprofits / Foundations solution page
32. [ ] Ecommerce solution page
33. [ ] Resources hub
34. [ ] Measurement resources
35. [ ] Data Trust resources
36. [ ] AI Readiness resources
37. [ ] Fundraising Reporting resources
38. [ ] Accessibility resources
39. [ ] Previous-project/case-study expansion
40. [ ] Develop original consulting frameworks
41. [ ] Improve internal linking architecture
42. [ ] Track AI referral traffic
43. [ ] Evaluate built-in site search
44. [ ] Add One Question lead follow-up
45. [ ] Develop First Read response
46. [ ] Add prospect confirmation email
47. [ ] Reusable lead diagnostics
48. [ ] How I Work chatbot
49. [ ] Content workflow automation

---

# Development Principles

- Keep `main` clean and deployable.
- Use one focused feature branch at a time.
- Pull the current `main` branch before creating a new feature branch.
- Delete completed feature branches after merge.
- Prefer semantic class names over structural CSS selectors.
- Keep important content directly available in HTML.
- Prioritize accessibility.
- Use Firefox as the primary browser for website accessibility and QA auditing.
- Prioritize mobile performance and usability.
- Prefer specific business language over generic consulting terminology.
- Keep public pricing visible where practical.
- Keep service scope and limitations clear.
- Avoid creating unnecessary client dependence.
- Do not recommend larger projects when smaller fixes are sufficient.
- Do not add nonexistent URLs to the XML sitemap.
- Update the sitemap as real pages launch.
- Avoid building features before there is evidence they are useful.
- Treat LLM discoverability as an additional requirement, not a replacement for SEO.
- Maintain strong semantic HTML for humans, search engines, assistive technology, and LLM retrieval.
- Keep Blog content original and experience-driven.
- Use Resources for durable reference material.
- Use Services for "hire me" intent.
- Use Products for self-service intent.
- Use Solutions for audience-specific relevance.
- Use Previous Projects and case studies as evidence.
- Allow search behavior, lead questions, and real client feedback to guide future content changes.
- Do not make claims that cannot be supported.
- Do not promise identical measurement across platforms where attribution models differ.
- Do not describe limited accessibility services as comprehensive WCAG audits or legal certification.
- Keep Unified Stack focused on trustworthy data, measurement, reporting, accessibility, and systems rather than generic "digital transformation" or generic AI consulting.