# jackatyler.com

Source code for [jackatyler.com](https://jackatyler.com), the personal website of Jack Tyler and a project operated through Unified Stack.

The site is intentionally built with plain HTML, CSS, and JavaScript and hosted on Vercel.

It does not use a website builder, frontend framework, external font library, or general-purpose site template.

## Why the site is manually built

The site is manually maintained because direct control over the frontend is useful for the kind of website this is intended to become.

The goal is not to avoid platforms, frameworks, or third-party services simply for the sake of avoiding them. The goal is to make those decisions deliberately.

As the site evolves, it may include additional analytics, forms, scheduling, CRM, marketing, data products, and other integrations. A relatively small, understandable codebase makes it easier to decide exactly how those systems are introduced and what effect they have on visitors.

That is particularly important in four areas.

### Privacy

Third-party integrations can introduce scripts, cookies, network requests, identifiers, and data collection that are not always obvious from the visible website.

Maintaining the frontend directly makes it easier to understand:

* what code is running
* what information is collected
* when third-party scripts load
* where information is sent
* whether an integration is necessary
* how consent should affect its behavior

The intention is to add integrations individually rather than inherit a collection of scripts and dependencies from a theme, plugin ecosystem, or website platform.

Privacy-related implementation decisions should remain understandable from the codebase.

### Accessibility

Accessibility is intended to be part of the site's underlying structure rather than an enhancement applied after the site has been designed.

The site favors semantic HTML, native browser behavior, progressive enhancement, and relatively small amounts of CSS and JavaScript.

This makes it easier to review and test:

* document structure
* heading hierarchy
* landmarks
* forms and labels
* keyboard navigation
* focus behavior
* link and button semantics
* responsive behavior
* changes introduced by third-party integrations

Keeping the implementation understandable also makes it easier to determine where an accessibility problem originates and correct it directly.

This project prioritizes accessible implementation, but the existence of this approach should not be interpreted as a claim of formal WCAG conformance, certification, or legal compliance.

### Future integrations

The site is expected to evolve.

Potential integrations may involve areas such as analytics, CRM, scheduling, forms, marketing systems, downloadable products, and other business tools.

Maintaining control of the application layer allows each integration to be evaluated for its effect on:

* privacy
* accessibility
* security
* performance
* consent
* maintainability
* data flow

An integration should be added because it solves a real problem, not simply because a platform or template makes it available.

### Simplicity and maintainability

The website does not need to be a large frontend application.

The current approach is intentionally straightforward:

* semantic HTML
* CSS
* limited JavaScript
* Vercel hosting
* serverless functionality where appropriate

A small codebase is easier to inspect, test, troubleshoot, and change.

It also reduces the number of abstractions that have to be understood before making a simple website change.

## Design philosophy

The visual design is intentionally restrained.

The site is not intended to imitate a large consulting agency or look as though it came from a generic marketing template.

The objective is for it to feel clear, practical, credible, and independently built.

That means favoring:

* strong typography and spacing
* straightforward navigation
* visible business information
* semantic page structure
* limited visual decoration
* useful content over promotional language
* understandable interfaces over unnecessary interaction

The site can become more polished without losing the character of a website that was deliberately built and maintained by an individual.

## Content philosophy

The site focuses primarily on business problems and outcomes rather than lists of software platforms or technical capabilities.

Content should be useful, specific, and defensible.

The site should avoid:

* unsupported claims
* invented outcomes or case studies
* unnecessary marketing language
* keyword stuffing
* content created solely for search engines
* technical complexity that does not improve the visitor experience

Technical expertise can support the content without becoming the content.

## Dependencies

New dependencies should be introduced cautiously.

Before adding a library, embedded service, tracking technology, third-party script, or platform integration, consider whether the benefit justifies its effect on:

1. accessibility
2. privacy and data collection
3. security
4. performance
5. maintainability

The goal is not zero dependencies. The goal is intentional dependencies.

## Current technology

The site currently uses:

* HTML
* CSS
* JavaScript
* Vercel
* Vercel serverless functions where needed
* Cloudflare Turnstile for contact-form abuse protection
* Supabase for contact-form data storage
* Google Tag Manager and Google Analytics 4 for measurement

Third-party services should remain isolated enough that they can be understood, modified, or removed without requiring a complete rebuild of the site.

## Development principles

Changes to the site should generally favor:

* semantic HTML
* progressive enhancement
* accessibility
* privacy-conscious implementation
* minimal dependencies
* strong browser support
* mobile performance
* understandable code
* focused, reviewable changes
* documentation of non-obvious implementation decisions

Complexity should have a reason.

## Repository

This repository contains the production source for jackatyler.com.

The `main` branch should remain the reliable source of truth for the production site. Changes should normally be developed in focused branches and kept small enough to review and understand.

The website will continue to evolve incrementally rather than through periodic wholesale redesigns.
