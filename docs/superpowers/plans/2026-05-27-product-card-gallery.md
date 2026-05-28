# Product Card Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a responsive fourth-section atelier product row to `hero-v1-dark.html` with restrained badges and hover/focus alternate-image switching.

**Architecture:** Keep the feature local to the existing single-file prototype: semantic section markup is inserted after the showcase and a scoped `.atelier-*` CSS block controls visual treatment and responsive states. A small Node contract test reads the HTML and verifies the required structure, interactions, badge restraint, and reduced-motion CSS before browser-level visual verification.

**Tech Stack:** HTML5, CSS, existing Gaura Style CSS variables/assets, Node.js built-in assertions, Codex in-app browser verification.

---

## File Structure

- Create `tests/product-card-gallery.test.mjs`: structural contract checks for the new section and CSS states.
- Modify `hero-v1-dark.html`: new `.atelier-selection` stylesheet block and semantic fourth-section markup only.
- Use existing `prototype-assets/Second Section Image/*.webp` files as primary and alternate photographic views; no new project image assets are required.

### Task 1: Add A Failing Contract Test

**Files:**
- Create: `tests/product-card-gallery.test.mjs`
- Test: `tests/product-card-gallery.test.mjs`

- [ ] **Step 1: Write the test for the approved gallery contract**

```javascript
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../hero-v1-dark.html', import.meta.url), 'utf8');

assert.match(html, /<section class="atelier-selection" aria-labelledby="atelierTitle">/);
assert.match(html, /<h2[^>]*id="atelierTitle"[^>]*>Chosen for now\.<\/h2>/);
assert.match(html, /Four pieces, selected for the light they catch\./);

const cards = html.match(/class="atelier-card"/g) ?? [];
assert.equal(cards.length, 4, 'renders four atelier product cards');

const primaryImages = html.match(/class="atelier-card-img atelier-card-img--primary"/g) ?? [];
const alternateImages = html.match(/class="atelier-card-img atelier-card-img--alternate"/g) ?? [];
assert.equal(primaryImages.length, 4, 'renders one primary image per card');
assert.equal(alternateImages.length, 4, 'renders one alternate image per card');

assert.match(html, /<span class="atelier-badge">New<\/span>/);
assert.match(html, /<span class="atelier-badge atelier-badge--offer">20% Off<\/span>/);
assert.equal((html.match(/class="atelier-badge/g) ?? []).length, 2, 'limits badges to two');

assert.match(html, /\.atelier-card:hover \.atelier-card-img--alternate,\s*\.atelier-card:focus-visible \.atelier-card-img--alternate/);
assert.match(html, /\.atelier-card:focus-visible/);
assert.match(html, /@media \(max-width: 768px\)[\s\S]*?\.atelier-grid[\s\S]*?scroll-snap-type: x mandatory/);
assert.match(html, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.atelier-card-img/);

console.log('product-card-gallery contract passed');
```

- [ ] **Step 2: Run the test and observe the expected failure**

Run:

```powershell
node tests/product-card-gallery.test.mjs
```

Expected: failure on the missing `<section class="atelier-selection" ...>` assertion because the fourth section does not yet exist.

### Task 2: Implement The Atelier Product Row

**Files:**
- Modify: `hero-v1-dark.html` in the stylesheet before the promotion modal styles and in the document flow immediately after `</section>` for `.showcase`.
- Test: `tests/product-card-gallery.test.mjs`

- [ ] **Step 1: Add scoped section styles**

Add `.atelier-selection`, `.atelier-head`, `.atelier-title`, `.atelier-copy`, `.atelier-link`, `.atelier-grid`, `.atelier-card`, `.atelier-media`, `.atelier-card-img`, `.atelier-badge`, `.atelier-name`, `.atelier-material`, and `.atelier-price` styles.

The implementation must:

```css
.atelier-card-img--alternate { opacity: 0; transform: scale(1.015); }
.atelier-card:hover .atelier-card-img--alternate,
.atelier-card:focus-visible .atelier-card-img--alternate { opacity: 1; transform: scale(1); }
.atelier-card:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }
```

Include a two-column breakpoint and a mobile horizontal-scroll row with `scroll-snap-type: x mandatory`. Under `prefers-reduced-motion: reduce`, disable image/card transitions.

- [ ] **Step 2: Insert semantic section markup**

Insert directly after the showcase:

```html
<section class="atelier-selection" aria-labelledby="atelierTitle">
  <header class="atelier-head">
    <div>
      <h2 class="atelier-title" id="atelierTitle">Chosen for now.</h2>
      <p class="atelier-copy">Four pieces, selected for the light they catch.</p>
    </div>
    <a class="atelier-link" href="#collection">Explore the collection<span class="atelier-link-arrow" aria-hidden="true"></span></a>
  </header>
  <div class="atelier-grid">
    <!-- Four linked cards, each containing primary and alternate local WebP images. -->
  </div>
</section>
```

Use actual local imagery and accurate names: signet rings, hand pendant, tree pendant, and beaded bracelet. Add `NEW` only to the first product and `20% OFF` only to the third product.

- [ ] **Step 3: Run the contract test and observe success**

Run:

```powershell
node tests/product-card-gallery.test.mjs
```

Expected:

```text
product-card-gallery contract passed
```

### Task 3: Verify The Visual And Interactive Result

**Files:**
- Verify: `hero-v1-dark.html`
- Verify: `tests/product-card-gallery.test.mjs`

- [ ] **Step 1: Open the local document in the in-app browser**

Open `file:///C:/Users/black/OneDrive/Desktop/Code/Tachoon/Gaura%20Style/hero-v1-dark.html` and scroll to the new fourth section.

Expected: the `Chosen for now.` section appears between the 2x2 showcase and the modal layer; four aligned portrait product cards are visible on desktop.

- [ ] **Step 2: Verify interaction states**

Hover one card and keyboard-focus one card.

Expected: the alternate image fades into place for both pointer and keyboard; focus has a visible gold outline; only `NEW` and `20% OFF` badges appear.

- [ ] **Step 3: Verify responsive and motion states**

Check a mobile viewport and emulate reduced motion.

Expected: the card row scrolls horizontally with snap behavior on mobile; reduced-motion CSS disables image transitions without removing usable product links.

- [ ] **Step 4: Re-run automated verification**

Run:

```powershell
node tests/product-card-gallery.test.mjs
```

Expected:

```text
product-card-gallery contract passed
```

## Workflow Note

This directory is not a Git repository, so the commit steps normally included in the Superpowers workflow cannot be executed in this workspace.
