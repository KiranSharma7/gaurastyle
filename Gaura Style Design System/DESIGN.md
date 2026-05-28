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
---

# Design System: Gaura Style

## 1. Overview

**Creative North Star: "The Declaration"**

Gaura Style is a luxury jewelry system with a direct voice: warm surfaces, decisive serif type, disciplined gold, and product imagery that does the emotional work. The interface should feel like a curated gallery, not a warehouse. It earns trust through spacing, photography, material clarity, and restraint.

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
- **Surface Warm** (`#F5F1EA`): Alternating editorial sections and feature areas.
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
- **Headline** (300, 56px, 1.25, `-0.02em`): Section headings and editorial campaign statements.
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
- **Lifted** (`0 4px 16px rgba(26, 23, 20, 0.10)`): Hover state for product and editorial cards.
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
- **Background:** Surface White for product cards, Surface Warm for editorial features.
- **Shadow Strategy:** No shadow at rest where possible. Lifted shadow on hover.
- **Border:** Avoid heavy borders. Use Border Default only when tonal separation is insufficient.
- **Internal Padding:** Product image flush to edges, copy padded 24px. Editorial cards use 32px to 40px.

### Inputs / Fields

- **Style:** Surface White background, 1px Border Default stroke, 4px radius, 14px 16px padding.
- **Focus:** Border shifts to Text Primary. Avoid glow.
- **Error:** Error border and Error BG with short error copy below the field.
- **Disabled:** Lower opacity. Do not invent a separate disabled color system.

### Navigation

- **Style:** Sticky or fixed navigation at 72px height.
- **Typography:** Uppercase Jost Medium 14px with `0.18em` tracking.
- **Default / Hover:** Text Primary by default, Brand Brown on hover.
- **Scroll Treatment:** Transparent at page top when over imagery. After scroll, use a warm white surface with subtle backdrop blur.
- **Mobile:** Collapse to icon-triggered drawer with large stacked links.

### Product Card

- **Image:** Square or portrait image, full width, no decorative overlay.
- **Text:** Product name in Jost Medium 16px, price in Jost Regular 14px Text Secondary.
- **Hover:** Image scales subtly with transform only. Quick-add appears at the lower image edge.
- **Badges:** Use sparingly. Never stack discount, sale, and urgency badges.

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
