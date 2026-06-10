# Gaura Style — Agent Quick-Start

This repo is a **local design system workspace** for [gaura.style](https://gaura.style) (WordPress + WooCommerce + Elementor 4.x). It is **not** the live site. All canonical design tokens and prototypes live here; changes ship to the live install via MCP.

## Source of Truth

Canonical values live in `Gaura Style Design System/`:
- **`colors_and_type.css`** — all CSS variables (colors, type, spacing, radius, shadows, motion, layout)
- **`DESIGN.md`** — machine-readable design spec
- **`README.md`** — brand voice, component guidance, do/don't list
- **`preview/*.html`** — 12 static HTML specimens

Always reference `Gaura Style Design System/` before making visual decisions.

## Architecture

- **v4 Atomic** is primary. v3 classic widgets coexist and inherit Kit tokens + Theme Style only.
- **Global Variables** (`e-gv-*`) are the single source of truth inside Elementor. Key IDs:
  - `e-gv-d664fc8` = font-family-heading (Cormorant Garamond)
  - `e-gv-68225ff` = font-family-body (Jost)
  - `e-gv-948aa44` = font-family-mono (DM Mono)
  - `e-gv-c7718d7` = color-primary-500 (gold #FFCF36)
  - `e-gv-4030fb3` = color-brown (#7A5C38)
  - `e-gv-a28b536` = color-fg1 (#1A1714)
- **Global Classes** (`gc-*`) cover buttons, badges, cards, nav, forms, type helpers — all reference the global variables above.
- **Kit Theme Style** sets h1–h6, body, links for v3 widget inheritance.
- **Kit custom CSS** holds the full `:root { --sp-* --text-* ... }` token block.

## MCP Workflow

All writes to the live site go through the `novamira-gaura-style` MCP server (configured in `opencode.json` and `.mcp.json`).

Key abilities:
- `novamira/elementor-edit-variable` — update global variable value
- `novamira/elementor-create-global-class` / `edit-global-class` — manage `gc-*` classes
- `novamira/elementor-edit-v3-color` / `create-v3-color` — manage Kit color palette
- `novamira/elementor-edit-v3-typography` — manage Kit typography presets
- `novamira/execute-php` — direct DB writes, CSS recompile

After any Kit `_elementor_page_settings` write via PHP, invalidate CSS:
```php
$plugin = \Elementor\Plugin::instance();
delete_post_meta(7, '_elementor_css');
$plugin->files_manager->clear_cache();
```

## v4 Atomic Local-Style Gotchas

- `background` must use `{"$$type":"background","value":{"color":{...}}}` — not a bare hex
- `border-width` per-side uses `{"$$type":"border-width","value":{"block-start":...}}` — NOT `dimensions`
- `padding`/`margin` use `dimensions` with `block-start/end`, `inline-start/end` keys
- Scalar values auto-wrap on create/edit (e.g. `"font-size": 16` → wrapped size object)
- No `grid-template-columns` or `flex` shorthand — use `display`, `flex-direction`, `gap` separately

## Operational Constraints

- **WPCode Lite does not auto-inject CSS snippets.** Use `wp_custom_css_post` (post ID 3328) for any site-wide CSS that must go outside the Kit.
- **Post ID 3232** = single product template — primary v3 inheritance check after Kit changes.
- **No site-wide CSS injection** — tokens go in Kit custom CSS only.
- **No v3 saved templates/blocks** — out of scope.
- **No Lucide Icons CDN** — deferred.
- **No copy/voice changes** to existing pages — out of scope.

## Terminology (from CONTEXT.md)

- **Category** = true product category (Rings, Earrings, Bracelets, Pendants). Do not use "Collection" for this.
- **Collection** = brand/merchandising grouping (seasonal/themed edit). Do not use interchangeably with Category.
- **Merchandising bucket** = non-category filter surfaced like a category (e.g. "New arrivals"). Not a true category.
- **Chrome** = shared header (announcement bar + navbar) and footer, delivered as Elementor Theme Builder templates, not page content.

## Brand Voice Constraints (from PRODUCT.md)

- Direct second-person: "Find your ring," not "Customers can discover."
- No superlatives ("exceptional," "amazing," "world-class").
- No exclamation marks, no emoji.
- Emotional bar: every screen must clear **Luxury**, **Premium**, and **Wow**.

## Build & Test

- **No build system** — this is static HTML + CSS + design specs. No `package.json`, no CI, no lint.
- **No automated tests** — verification is manual visual inspection of `preview/*.html` and the live site.
- To preview locally, open `index.html` (redirects to `home.html`) or any `.html` prototype directly in a browser.

## Installed Skills

- `impeccable` — UI design review and polish
- `make-interfaces-feel-better` — design engineering and micro-interactions

## Reference Files

- `CLAUDE.md` — full project guide (more detail than this file)
- `PRODUCT.md` — product definition and brand personality
- `CONTEXT.md` — storefront language glossary
- `DESIGN.md` — machine-readable design spec
- `docs/adr/` — architecture decision records
