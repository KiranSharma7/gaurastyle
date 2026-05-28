---
name: Gaura Style
description: Fine jewelry, direct-to-consumer. Bold, confident, modern.
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
  semantic-success: "#2D6A4F"
  semantic-warning: "#D97706"
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
    lineHeight: 1.1
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
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "16px 40px"
  button-ghost-hover:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.text-inverse}"
  button-dark:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.text-inverse}"
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
---

# Design System: Gaura Style

## 1. Overview

**Creative North Star: "The Declaration"**

Gaura Style does not ask for attention. It takes it. This design system is built on the premise that a brand confident enough in its product does not need to decorate. What other luxury brands whisper, Gaura Style states. The typography is decisive: large serifs at low weight, doing the emotional lifting that lesser systems outsource to gradients and shadows. The space between things is as considered as the things themselves.

The color system operates on radical restraint. The House Gold (#FFCF36) appears rarely and fires only where it matters: CTAs, price moments, hover confirmations. Its rarity is its power. The warm parchment ground (#FAFAF8) and surface-warm tone (#F5F1EA) ensure that product photography breathes rather than competes. Nothing on the page fights the jewelry.

This system explicitly rejects: generic WooCommerce product grids, discount-retailer visual clutter, dark-mode neon, scroll-driven animation theatrics, cold sterile minimalism with no warmth, and the whispering neutrality of established luxury competitors. Where Cartier and Tiffany whisper, Gaura Style declares.

**Key Characteristics:**
- Cormorant Garamond light-weight display serif anchors every hero and section heading
- House Gold fires on ≤10% of any screen surface; its rarity signals its meaning
- Warm tones everywhere: ground, borders, shadows all tinted toward brown
- Near-zero radius on all interactive elements; no softening, no rounding
- Photography leads; UI recedes
- ALL CAPS navigation with generous letter-spacing (0.12–0.18em)

## 2. Colors: The Declaration Palette

A two-pole palette: warm earth neutrals as the ground, a single saturated gold as the sole accent. Everything else is restraint.

### Primary
- **The House Gold** (#FFCF36): The brand's signal color. Used exclusively on primary CTAs, price highlights, hover confirmation states, and active selection indicators. Never used as a background wash. Its appearance means: act now.
- **House Gold Hover** (#F0C020): The pressed/hover state of The House Gold. A darkening, not a shift. Confirms the action is registered.

### Secondary
- **Brand Brown** (#7A5C38): Logo color. Secondary accents, text links, decorative borders where color is needed. Grounds the gold without competing.
- **Brand Brown Dark** (#5A4228): Headings on light surfaces where the near-black primary is too stark. Occasionally used as a button variant for editorial sections.
- **Brand Brown Light** (#C4A882): Decorative and tertiary moments only. Horizontal rules in editorial sections, category label accents. Never structural.

### Neutral
- **Page Ground** (#FAFAF8): The page background. Warm off-white; not paper, not cream. Product photography breathes on it.
- **Surface White** (#FFFFFF): Cards, modals, product image backgrounds. Pure white for maximum photo contrast.
- **Surface Warm** (#F5F1EA): Editorial sections, featured content, alternating rhythm. 2–4 sections per page use this as background.
- **Surface Dark** (#1A1714): Inverted sections: footer, campaign overlays, full-bleed dark heroes. The near-black is warm, not neutral.
- **Text Primary** (#1A1714): All body copy and primary labels. Same warm near-black as Surface Dark.
- **Text Secondary** (#6B5E57): Captions, metadata, supporting copy. Not muted: intentional secondary voice.
- **Text Tertiary** (#A8988E): Placeholders, timestamps, structural labels that recede.
- **Border Default** (#E8E3DA): All default borders. Warm and light.
- **Border Strong** (#C8BFB4): Dividers, emphasized separators, form field borders on focus-adjacent surfaces.

### Named Rules
**The One Voice Rule.** The House Gold appears on ≤10% of any screen surface. A CTA, a price, a hover state. Never a background wash, never a decorative band. If it appears everywhere, it signals nothing.

**The Warmth Mandate.** No true neutrals. Every gray carries a brown tint. Every shadow is warm-tinted. Every background is off-white, not white. #000, #fff, and any RGB-equal gray are prohibited. If a value has equal R, G, B components, it has failed.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Jost (with Helvetica Neue, Arial, sans-serif fallback)
**Mono:** DM Mono (for prices, product codes, rare data contexts)

**Character:** The pairing is deliberately asymmetric in personality: Cormorant Garamond carries authority through elegance and fragility (light weights, high x-height, fine strokes). Jost answers with geometric confidence and legibility at small sizes. Together they produce the brand's core tension: something beautiful that means business.

### Hierarchy
- **Display** (300 weight, 72–96px, line-height 1.1, tracking −0.02em): Hero headlines only. Used at light weight; the fragility of the stroke IS the luxury signal. Never bold at display size.
- **Headline** (300 weight, 56px, line-height 1.1): Section headers on desktop. Major editorial moments.
- **Title** (400 weight, 40px, line-height 1.25): Sub-section headers, product category titles, feature callouts.
- **Body** (400 weight, 16px, line-height 1.65): All running prose. Max line length: 65–75ch. Never compress line height below 1.5 for reading copy.
- **Label** (500 weight, 14px, letter-spacing 0.12em, ALL CAPS): Navigation, CTA button text, UI affordances, category tags. The ALL CAPS + generous tracking is the brand's UI signature; it distinguishes interface from editorial.

### Named Rules
**The Light Weight Rule.** Cormorant Garamond displays at 300 (Light). Bold display headings are prohibited. Size and letterform carry authority; weight addition destroys it.

**The Case Protocol.** Display and headline: Title Case or ALL CAPS for short brand-voice moments. Body: Sentence case. UI labels and CTAs: Title Case. Navigation: ALL CAPS with +0.12em minimum tracking. Mixed case in navigation is a violation.

## 4. Elevation

This system is flat by default. Surfaces are undifferentiated at rest; separation is created by background color (Page Ground vs. Surface Warm vs. Surface White), not by shadow. Shadows are state indicators, not structural labels.

**The Ambient Lift Rule.** A shadow means something has changed. Resting cards have no shadow. On hover, a card lifts (shadow-md). Modals and drawers carry shadow-lg to communicate true elevation above the page. If a surface has a shadow at rest and also on hover, the distinction collapses. Pick one state.

### Shadow Vocabulary
- **Ambient (shadow-sm)** (`0 1px 3px rgba(26, 23, 20, 0.08)`): Nearly invisible. Used only in rare cases where a surface needs a hairline of definition against a same-tone background (e.g., a white form card on a white section).
- **Lifted (shadow-md)** (`0 4px 16px rgba(26, 23, 20, 0.10)`): The hover state of cards and interactive containers. Signals elevation, not decoration.
- **Overlay (shadow-lg)** (`0 12px 40px rgba(26, 23, 20, 0.12)`): Modals, drawers, dropdown menus. Communicates that this layer is above the page.
- **Deep (shadow-xl)** (`0 24px 64px rgba(26, 23, 20, 0.14)`): Reserved for the rarest, highest-stakes overlay moments. One use per screen maximum.

All shadows are warm-tinted with RGB(26, 23, 20) — the same warm near-black as the text. Cold (RGB-equal) shadow tints are prohibited.

## 5. Components

Sharp-edged, confident, recessive. Every component's job is to deliver its function and get out of the way of the product photography.

### Buttons
- **Shape:** Near-sharp (4px radius). The edge is part of the brand's refusal to soften itself.
- **Primary (gold):** `background: #FFCF36`, `color: #1A1714`, padding 16px 40px, label in Jost Medium 14px ALL CAPS, tracking 0.12em. On hover: background shifts to #F0C020 + `transform: scale(1.01)`.
- **Dark:** `background: #1A1714`, `color: #FAFAF8`. Same dimensions. Used in inverted (dark surface) sections and as an alternative to gold when gold would create too much heat.
- **Ghost:** No background, 1px `border: #1A1714`. On hover: background fills to #1A1714, text inverts to #FAFAF8. Same padding and typography as primary.
- **Press/Active:** `transform: scale(0.98)`, `filter: brightness(0.96)` on all variants. Confirms the click.
- **Focus-visible:** `outline: 2px solid #FFCF36`, `outline-offset: 3px`. The House Gold focus ring; WCAG AA-compliant contrast on all backgrounds.

### Cards / Containers
- **Corner Style:** 4px radius (near-sharp).
- **Background:** Surface White (#FFFFFF) for product cards. Surface Warm (#F5F1EA) for editorial feature cards.
- **Shadow Strategy:** No shadow at rest. `shadow-md` on hover. No exceptions.
- **Border:** None by default. Let shadow define edges on hover.
- **Internal Padding:** 24px for product cards (image flush to edges, copy padded inside). 32–40px for editorial/feature cards.
- **The No-Nest Rule.** Cards do not contain cards. A container within a container within a container is always a structural failure; flatten the hierarchy.

### Inputs / Fields
- **Style:** 1px border `#E8E3DA`, white background, 4px radius, 14px 16px padding.
- **Focus:** Border shifts to `#1A1714` (1px → 1.5px). No glow, no shadow. The line darkens; the field claims attention without theatrics.
- **Error:** Border `#C0392B`, background `#FDECEA`. Error text in Jost Regular 12px, color `#C0392B`, below the field.
- **Disabled:** Opacity 0.5. No background change.

### Navigation
- **Style:** Sticky/fixed. On scroll-down: hides. On scroll-up: reappears (Headroom pattern). At scroll position 0: transparent background. After first scroll: white background + `backdrop-filter: blur(12px)` at 90% opacity.
- **Typography:** ALL CAPS, Jost Medium 14px, tracking 0.18em. Text Primary (#1A1714) by default; Brand Brown (#7A5C38) on hover.
- **Height:** 72px.
- **Logo:** Left-aligned. Icon cluster (search, account, cart) right-aligned.
- **Mobile:** Collapses to hamburger. Drawer slides from right; full-height, white background, links stacked at 24px type.

### Product Card
The signature component. This is what every user judges the brand by.
- Full-width image (square or portrait crop, aspect-ratio: 1/1 or 3/4).
- Image hover: subtle scale(1.03) over 400ms ease-out. No overlay, no color shift.
- Copy below the image: product name in Jost Medium 16px, price in Jost Regular 14px Text Secondary. No badge clutter.
- Quick-add affordance appears on hover only: a ghost button appearing at the image bottom edge. Hidden at rest.

## 6. Do's and Don'ts

### Do:
- **Do** use Cormorant Garamond at 300 weight for all display headings. The fine stroke at large size IS the luxury signal.
- **Do** keep The House Gold (#FFCF36) to ≤10% of any screen surface. It fires on CTAs, prices, and hover confirmations; nowhere else.
- **Do** warm every neutral. Every shadow, border, and background must carry a brown-tinted warm cast. RGB(26, 23, 20) for shadow alpha, #FAFAF8 (not #FFFFFF) for page backgrounds.
- **Do** use ALL CAPS with 0.12–0.18em letter-spacing for all navigation and CTA label text.
- **Do** let product photography fill the screen. Hero sections use full-bleed images; text overlays use a warm gradient veil (rgba(26,23,20,0.35) → transparent).
- **Do** use near-sharp corners (4px) on all interactive elements. Luxury does not round its edges.
- **Do** address the reader as "you" in all copy: "Find your ring," not "Customers can discover."
- **Do** use WCAG 2.1 AA minimum contrast on all text/background combinations. Verify against Page Ground (#FAFAF8) and Surface Warm (#F5F1EA), not just Surface White.

### Don't:
- **Don't** use generic WooCommerce-style product grids: identical cards, dense layouts, category breadcrumb clutter, discount badge pileups.
- **Don't** use dark-mode neon, purple gradients, glassmorphism, or any cold-toned visual treatment. This is a warm brand.
- **Don't** use gradient text (`background-clip: text`). Decorative and prohibited. Use a single solid color.
- **Don't** use border-left or border-right greater than 1px as a colored accent stripe on any element. Rewrite with full borders, background tints, or nothing.
- **Don't** animate layout properties (width, height, padding, margin). Animate transform and opacity only.
- **Don't** use heavy scroll animations, parallax effects, or entrance theatrics. Micro-transitions only (150–280ms).
- **Don't** use emoji anywhere in any brand-facing context: copy, UI, navigation, or error states.
- **Don't** use cold (RGB-equal) shadows or borders. Every shadow must use the warm near-black tint.
- **Don't** apply shadow to resting cards. Shadow is a state indicator (hover, elevation) not a structural default.
- **Don't** use `#000` or `#fff`. Tint every near-black toward warm; use #FAFAF8 for white surfaces.
- **Don't** use superlatives ("exceptional," "amazing," "world-class") in copy. State facts; let the work speak.
- **Don't** whisper. Where Cartier and Tiffany use quiet luxury, Gaura Style declares. Bigger type, more decisive spacing, less hedging.
