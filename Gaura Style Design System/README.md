# Gaura Style Design System

Version: 1.0  
Maintainer: Design System

Gaura Style is a fine jewelry e-commerce brand built around warm luxury, decisive typography, restrained UI, and product-led desire. This folder is a portable design-system package for agents, prototypes, and implementation work.

## Start Here

- [DESIGN.md](DESIGN.md): Parseable design-system spec with machine-readable tokens and human guidance.
- [colors_and_type.css](colors_and_type.css): CSS custom properties for color, type, spacing, radius, shadows, layout, and motion.
- [SKILL.md](SKILL.md): Agent skill entry point for using this package.
- [preview/](preview/): Static HTML specimens for tokens and component examples.

Use `DESIGN.md` when another tool or agent needs the formal design language. Use `colors_and_type.css` when building HTML, React, or production UI. Use the preview files to inspect how the tokens behave visually.

## Brand Position

Gaura Style designs and sells fine jewelry, primarily rings, direct to consumers across the US, Japan, India, and Russia. Shoppers are often deciding without seeing the piece in person, so the interface must earn trust immediately.

The brand is bold, confident, and modern. It should feel like a curated gallery, not a warehouse. The emotional target is desire and aspiration: every landing moment should make the visitor want to own the jewelry.

Avoid generic WooCommerce grids, discount-retailer clutter, dark-mode neon, heavy animations, cold sterile minimalism, and whispering neutrality.

## Visual Foundations

### Color

The system uses warm neutrals and one high-signal gold.

| Token | Value | Role |
|---|---:|---|
| `--gold` | `#FFCF36` | Primary CTA, focus, price highlight, active selection |
| `--gold-hover` | `#F0C020` | Gold hover and pressed state |
| `--brown` | `#7A5C38` | Logo, secondary accents, text links |
| `--bg` | `#FAFAF8` | Warm page background |
| `--surface` | `#FFFFFF` | Product cards, image backgrounds, overlays |
| `--surface-warm` | `#F5F1EA` | Editorial and feature-section background |
| `--surface-dark` | `#1A1714` | Footer, inverted sections, dark overlays |
| `--fg1` | `#1A1714` | Primary text |
| `--fg2` | `#6B5E57` | Secondary text and captions |
| `--fg3` | `#A8988E` | Tertiary and placeholder text |
| `--border` | `#E8E3DA` | Default borders |
| `--border-strong` | `#C8BFB4` | Strong dividers and emphasized structure |

House Gold is an action signal. Keep it rare. Most screens should be carried by warm ground, photography, and type.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display | Cormorant Garamond | Light 300 for heroes and editorial statements |
| Body | Jost | Regular 400 for copy, Medium 500 for UI labels |
| Mono | DM Mono | Product codes, rare data, and technical snippets |

Display type should stay light. Size and space carry authority. Avoid bold display headings.

### Spacing, Radius, Shadow

- Spacing scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px.
- Radius: 2px for chips, 4px for buttons/cards/inputs, 8px for modals, 100px for pills.
- Shadows are warm-tinted and state-driven. Resting cards should be flat unless separation requires a slight ambient shadow.

## Component Guidance

### Buttons

Primary buttons use House Gold with Text Primary. Dark buttons use Text Primary as the background and Text Inverse as the label. Ghost buttons start transparent with a 1px dark border and fill on hover.

Labels use Jost Medium, 14px, uppercase or compact Title Case depending on context, with generous tracking for navigational surfaces.

### Product Cards

Product cards are the signature component. Use square or portrait photography, minimal copy, no badge clutter, and no decorative overlay. On hover, the image may scale subtly with `transform`. Quick-add can appear at the image bottom edge.

### Forms

Inputs use white surfaces, warm borders, 4px radius, and direct focus treatment. Focus darkens the border. Errors use red border plus a quiet red-tinted background and short explanatory text.

### Navigation

Navigation is uppercase, tracked, and restrained. It may be transparent over a hero image at page top, then switch to a warm white surface with subtle blur after scroll. Mobile navigation should use a full-height drawer with large stacked links.

## Preview Index

- [preview/colors-brand.html](preview/colors-brand.html): Brand color swatches.
- [preview/colors-neutral.html](preview/colors-neutral.html): Neutral and semantic swatches.
- [preview/type-display.html](preview/type-display.html): Display type examples.
- [preview/type-body.html](preview/type-body.html): Body and UI type examples.
- [preview/spacing-tokens.html](preview/spacing-tokens.html): Spacing, radius, and shadows.
- [preview/btn-components.html](preview/btn-components.html): Button variants.
- [preview/form-components.html](preview/form-components.html): Input and select patterns.
- [preview/card-product.html](preview/card-product.html): Product card pattern.
- [preview/card-editorial.html](preview/card-editorial.html): Editorial card pattern.
- [preview/badge-components.html](preview/badge-components.html): Badges and labels.
- [preview/nav-component.html](preview/nav-component.html): Navigation component.
- [preview/logo-lockups.html](preview/logo-lockups.html): Logo usage.

## Do

- Do use warm neutrals everywhere.
- Do reserve House Gold for moments that need action or confirmation.
- Do use large, light serif type for the brand voice.
- Do let product photography lead.
- Do keep UI edges sharp and confident.
- Do verify contrast on `--bg` and `--surface-warm`.

## Don't

- Don't use dark neon, purple gradients, or glassmorphism.
- Don't create dense marketplace grids or discount clutter.
- Don't use gradient text.
- Don't use colored side-stripe borders.
- Don't use emoji in brand-facing UI.
- Don't use heavy scroll animation, bounce easing, or parallax.
