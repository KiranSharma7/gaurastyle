---
name: Gaura Style Design System
description: Fine jewelry e-commerce design system for a bold, warm, modern luxury brand.
colors:
  house-gold: "#FFCF36"
  house-gold-hover: "#F0C020"
  house-gold-light: "#FFF3B0"
  house-gold-subtle: "#FFF8D6"
  brand-brown: "#7A5C38"
  brand-brown-dark: "#5A4228"
  brand-brown-light: "#C4A882"
  brand-brown-subtle: "#F0E8DA"
  page-ground: "#FAFAF8"
  surface-white: "#FFFFFF"
  surface-warm: "#F5F1EA"
  surface-dark: "#1A1714"
  text-primary: "#1A1714"
  text-secondary: "#6B5E57"
  text-tertiary: "#A8988E"
  text-inverse: "#FAFAF8"
  border-default: "#E8E3DA"
  border-strong: "#C8BFB4"
  semantic-error: "#C0392B"
  semantic-error-bg: "#FDECEA"
  semantic-success: "#2D6A4F"
  semantic-success-bg: "#E8F5EE"
  semantic-warning: "#D97706"
  semantic-warning-bg: "#FEF3C7"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "72px"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "56px"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Jost, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "100px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "40px"
  8: "48px"
  9: "64px"
  10: "80px"
  11: "96px"
  12: "128px"
components:
  button-primary:
    backgroundColor: "{colors.house-gold}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "16px 40px"
  button-primary-hover:
    backgroundColor: "{colors.house-gold-hover}"
    textColor: "{colors.text-primary}"
  button-dark:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.sm}"
    padding: "16px 40px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "16px 40px"
  input-default:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
  card-product:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.sm}"
    padding: "0px"
motion:
  ease-expo: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-quart: "cubic-bezier(0.25, 1, 0.5, 1)"
  dur-fast: "150ms"
  dur-base: "280ms"
  dur-slow: "400ms"
layout:
  content-width: "1440px"
  gutter: "40px"
  bar-h: "44px"
  nav-h: "92px"
  nav-height-compact: "72px"
---

# Design System: Gaura Style

## 1. Overview

**Creative North Star: "The Declaration"**

Gaura Style is a luxury jewelry system with a direct voice: warm surfaces, decisive serif type, disciplined gold, and product imagery that does the emotional work. The interface should feel like an atelier gallery, not a warehouse. It earns trust through spacing, photography, material clarity, and restraint.

The system rejects generic WooCommerce grids, discount-retailer clutter, dark-mode neon, heavy animation, cold sterile minimalism, and whispering neutrality. It should feel bold, confident, modern, and premium without becoming noisy.

**Key Characteristics:**
- Large, light Cormorant Garamond headings carry the luxury signal.
- Jost provides clean, readable UI and body text.
- House Gold appears rarely, mainly on primary action and confirmation.
- Warm off-white, brown-tinted neutrals, and warm shadows keep every surface aligned with the jewelry photography.
- Corners are near-sharp. Cards and controls use 4px radius unless the component needs a pill shape.
- Product photography leads. UI recedes.

## 2. Colors

The palette is a warm neutral foundation with one high-signal gold accent and a brown brand anchor.

### Primary

- **House Gold** (`#FFCF36`): Primary CTA, active selection, price highlight, and focus-ring signal. It should occupy no more than 10% of a screen.
- **House Gold Hover** (`#F0C020`): Hover and pressed state for gold actions.
- **House Gold Light** (`#FFF3B0`): Rare tint for subtle emphasis where gold needs to read softly.
- **House Gold Subtle** (`#FFF8D6`): Very light gold wash for low-intensity highlight areas.

### Secondary

- **Brand Brown** (`#7A5C38`): Logo color, secondary accents, text links, and warm grounding details.
- **Brand Brown Dark** (`#5A4228`): Editorial headings or dark brown emphasis where near-black feels too severe.
- **Brand Brown Light** (`#C4A882`): Decorative separators and tertiary accents.
- **Brand Brown Subtle** (`#F0E8DA`): Warm brown wash for soft background moments.

### Neutral

- **Page Ground** (`#FAFAF8`): Default page background. Warm off-white, never cold white.
- **Surface White** (`#FFFFFF`): Product cards, image backgrounds, and modal surfaces when maximum photo contrast is needed.
- **Surface Warm** (`#F5F1EA`): Alternating atelier sections and feature areas.
- **Surface Dark** (`#1A1714`): Footer, inverted campaigns, and dark image overlays.
- **Text Primary** (`#1A1714`): Primary text and dark buttons.
- **Text Secondary** (`#6B5E57`): Captions, metadata, and supporting copy.
- **Text Tertiary** (`#A8988E`): Placeholder text and quiet structural labels.
- **Border Default** (`#E8E3DA`): Default borders.
- **Border Strong** (`#C8BFB4`): Emphasized dividers and focus-adjacent structure.

### Named Rules

**The One Voice Rule.** House Gold is an action signal, not decoration. If gold is everywhere, it stops meaning anything.

**The Warmth Mandate.** Every neutral should feel warm. Avoid cold grays, blue-tinted whites, and RGB-equal shadows.

## 3. Typography

**Display Font:** Cormorant Garamond, with Georgia and serif fallback  
**Body Font:** Jost, with Helvetica Neue, Arial, and sans-serif fallback  
**Mono Font:** DM Mono, with Courier New and monospace fallback

**Character:** The type pairing creates a deliberate tension: elegant, fine-stroked display type paired with clean geometric body text. It should feel refined but not timid.

### Hierarchy

- **Display** (300, 72px, 1.1, `-0.02em`): Hero headlines and major brand moments only.
- **Headline** (300, 56px, 1.25, `-0.02em`): Section headings and atelier campaign statements.
- **Title** (400, 40px, 1.25): Product category titles, feature titles, and subsection leads.
- **Body** (400, 16px, 1.65): Running copy. Keep line length around 65 to 75 characters.
- **Label** (500, 14px, 1.2, `0.12em`): Navigation, CTAs, badges, and compact UI labels.

### Named Rules

**The Light Weight Rule.** Display serif headings stay light. Use scale, spacing, and composition for authority, not bold weight.

**The Case Protocol.** Navigation and compact labels use uppercase with generous tracking. Body copy uses sentence case. CTAs use concise Title Case.

## 4. Elevation

Gaura Style is flat by default. Depth is created through tonal layering, whitespace, and photography. Shadows are reserved for state changes and overlays, not resting decoration.

### Shadow Vocabulary

- **Ambient** (`0 1px 3px rgba(26, 23, 20, 0.08)`): Rare same-tone surface definition.
- **Lifted** (`0 4px 16px rgba(26, 23, 20, 0.10)`): Hover state for product and atelier cards.
- **Overlay** (`0 12px 40px rgba(26, 23, 20, 0.12)`): Modals, drawers, dropdowns, and elevated navigation layers.
- **Deep** (`0 24px 64px rgba(26, 23, 20, 0.14)`): Highest-priority overlays only.

### Named Rules

**The Ambient Lift Rule.** A shadow means the state changed. Resting cards should not carry a decorative shadow unless the background would otherwise erase their boundary.

## 5. Components

Components are sharp-edged, confident, and recessive. They help the shopper act without competing with the jewelry.

### Buttons

- **Shape:** Near-sharp 4px radius.
- **Primary:** House Gold background, Text Primary label, 16px 40px padding, Jost Medium 14px label.
- **Dark:** Text Primary background, Text Inverse label, same sizing as primary.
- **Ghost:** Transparent background, 1px Text Primary border, Text Primary label.
- **Hover / Focus:** Gold darkens to House Gold Hover. Ghost fills to Text Primary and inverts. Focus-visible uses a 2px House Gold outline with 3px offset.
- **Press:** Use `transform: scale(0.98)` and a slight brightness reduction.

### Cards / Containers

- **Corner Style:** 4px radius.
- **Background:** Surface White for product cards, Surface Warm for atelier features.
- **Shadow Strategy:** No shadow at rest where possible. Lifted shadow on hover.
- **Border:** Avoid heavy borders. Use Border Default only when tonal separation is insufficient.
- **Internal Padding:** Product image flush to edges, copy padded 24px. Editorial cards use 32px to 40px.

### Inputs / Fields

- **Style:** Surface White background, 1px Border Default stroke, 4px radius, 14px 16px padding.
- **Focus:** Border shifts to Text Primary. Avoid glow.
- **Error:** Error border and Error BG with short error copy below the field.
- **Disabled:** Lower opacity. Do not invent a separate disabled color system.

### Announcement Bar

- **Height:** `--bar-h` = 44px. Fixed above the navbar.
- **Background:** House Gold. Text in Jost Medium 12px, uppercase, `0.14em` tracking, Text Primary color.
- **Dismiss:** Absolute-positioned `×` button on the right edge, 40×40px touch target. Animates `translateY(-100%)` out.
- **Links:** Text Primary underline, `text-underline-offset: 2px`.
- **JavaScript:** Show with `.visible` class on load. Hide with `.hidden` when dismissed; write a session-storage flag to suppress on return visit.

### Navigation

- **Three-row structure:** utility row (Stores + account/wishlist/cart icons) → wordmark logo centered → category links.
- **Full height:** `--nav-h` = 92px (all three rows). Compact scrolled height `--nav-height` = 72px (wordmark + links only).
- **Typography:** Uppercase Jost Medium 12px, `0.18em` tracking for category links. Utility row links Jost Medium 12px, `0.04em` tracking.
- **Dark variant (hero / shop pages):** Starts transparent-over-imagery with inverted white links. On scroll, morphs to warm white with `backdrop-filter: blur(18px) saturate(140%)`. The utility row collapses (`height → 0`, `opacity → 0`) and the wordmark shrinks from 96px → 46px.
- **Light variant (product / editorial pages):** Always the scrolled light state from page load. Wordmark starts at 62px.
- **Active link:** Underline `::after` drawn `scaleX(1)`. Color: House Gold in dark variant, Brand Brown in light variant.
- **Scroll-hide behavior:** Hides on scroll-down via `translateY(-200%)`, reappears on scroll-up.
- **Mobile:** Utility row collapses. Links row becomes horizontally scrollable without visible scrollbar. Wordmark reduces to 64px.
- **Specimen:** `preview/nav-component.html` — all three variants.

### Product Card

- **Image:** Square or portrait image, full width, no decorative overlay.
- **Text:** Product name in Jost Medium 16px, price in Jost Regular 14px Text Secondary.
- **Hover:** Image scales subtly with transform only. Quick-add appears at the lower image edge.
- **Badges:** Use sparingly. Never stack discount, sale, and urgency badges.

### Accordion / Disclosure

- **Structure:** `.accordion` container with `border-top` separator, one `.acc-item` per entry with `border-bottom`.
- **Trigger:** Full-width `<button>`, uppercase Jost Semibold 12px, `0.14em` tracking. `aria-expanded` + `aria-controls` required.
- **Icon:** Pure-CSS `+` / `×` symbol using two `::before`/`::after` pseudo-elements on `.acc-icon`. The vertical bar animates `rotate(90deg) → rotate(0)` when open.
- **Panel:** `grid-template-rows: 0fr → 1fr` pattern. No `max-height` hacks. Transition: `0.36s --ease-expo`.
- **Body text:** Jost Regular 14px, `1.72` line-height, Text Secondary. Spec list uses two-column `key / value` layout.
- **Surfaces:** Works on Page Ground, Surface Warm, and Surface White without style changes.
- **Specimen:** `preview/accordion.html`.

### Trust Bar

- **Layout:** Horizontal flex row with centered alignment. Items separated by `1px` `--border-default` vertical divider. Last item no divider.
- **Icon:** 44×44px SVG, stroke-based, Text Primary. Stroke-width `1.3` to match the brand's fine-line aesthetic.
- **Label:** Jost Medium 11px, `0.14em` tracking, uppercase. Emphasis (`<em>`) in Brand Brown (or House Gold in dark variant).
- **Variants:** White surface (homepage below hero), Warm surface (alternating sections), Dark surface (inverted sections — text and icons at reduced opacity, emphasis in House Gold).
- **Mobile:** Flex-wrap with tighter padding. Each item wraps to its own row pair if needed.
- **Specimen:** `preview/trust-bar.html`.

### Newsletter CTA

- **Layout:** Full-width section, centered column, max-width 860px. Generous padding: `116px` vertical default.
- **Ambient decoration:** Two `radial-gradient` corner glows via `::before`/`::after` pseudo-elements. Removed in dark variant.
- **Eyebrow:** DM Mono 11px, `0.24em` tracking, Brand Brown uppercase.
- **Headline:** Cormorant Garamond 300 weight, display-size, with italic em in Brand Brown color.
- **Body copy:** Jost Regular 15px, Text Secondary. Keep under 60 characters per line.
- **Form:** Two-column `1fr 148px` grid. Input: 52px height, sharp (no radius), `1px border-strong`, white background. Submit: matching 52px height, Text Primary fill, Text Inverse label. On mobile: single column, both 54px.
- **Variants:** Default (Page Ground), Dark (Brand Brown Dark background — links in gold, submit in gold).
- **Success state:** Note text changes to success copy. No modal, no redirect.
- **Specimen:** `preview/newsletter-cta.html`.

### Filter / Refine Bar

- **Use:** Shop and collection pages. Sticky below the navbar at `top: var(--nav-h)`.
- **Pill with dropdown:** Round-cornered filter button (`border-radius: 999px`), Jost Semibold 11px uppercase, `0.14em` tracking. Chevron icon animates `rotate(180deg)` when open. Dropdown appears on hover/focus-within with `opacity + translateY` transition.
- **Dropdown menu:** `border-radius: --radius-md`, `--shadow-lg`, 188px minimum width. Items are Jost 12px uppercase, 9px 14px padding. Active item has gold-tinted background and brown-dark text. An invisible hover bridge (`::before`) spans the gap between pill and menu to prevent accidental close.
- **Selected state:** Active filter pill gets gold-tinted background (`rgba(255,207,54,0.22)`), `--brown-light` border, and appends the selected value as non-uppercase text.
- **Toggle pill:** In-Stock toggle with a green dot indicator (`#2FAE5E` with green glow ring). No dropdown.
- **Meta row:** Result count (right-aligned in refine inner, `margin-left: auto`) and "Clear all" underline button. Only show "Clear all" when at least one filter is active.
- **Specimen:** `preview/filter-bar.html`.

## 6. Do's and Don'ts

### Do:

- **Do** use House Gold only for actions, active states, focus rings, and rare price emphasis.
- **Do** use warm backgrounds: Page Ground (`#FAFAF8`) and Surface Warm (`#F5F1EA`) should define most sections.
- **Do** let product photography lead heroes, product cards, and campaign sections.
- **Do** use uppercase tracked labels for navigation and compact UI.
- **Do** keep corners sharp or near-sharp, especially on buttons, cards, and inputs.
- **Do** verify contrast against Page Ground and Surface Warm, not only Surface White.

### Don't:

- **Don't** create generic WooCommerce product grids, dense catalog clutter, or repeated identical card grids.
- **Don't** use dark-mode neon, purple gradients, glassmorphism, or cold sterile minimalism.
- **Don't** use gradient text.
- **Don't** use colored side-stripe borders on cards, alerts, list items, or callouts.
- **Don't** animate width, height, padding, or margin. Use transform and opacity.
- **Don't** use heavy scroll theatrics, bounce easing, parallax, or springy motion.
- **Don't** use emoji in brand-facing copy or UI.
- **Don't** use superlatives. State the material, craft, and action clearly.
