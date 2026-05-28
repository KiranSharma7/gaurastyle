# Gaura Style — Claude Code Project Guide

## What this repo is

Local design system workspace for **gaura.style** — a WordPress + WooCommerce + Elementor 4.x fine jewelry e-commerce site. This folder is NOT the live site. It holds the canonical design system source and MCP config to push changes to the live WP install.

## Live site access

- **URL**: https://gaura.style
- **WP Admin**: https://gaura.style/wp-admin
- **MCP server**: `novamira-gaura-style` (defined in `.mcp.json`)
- **MCP endpoint**: `https://gaura.style/wp-json/mcp/novamira`
- **Elementor Kit ID**: post `7` — all global tokens, theme style, and global classes live here

## Design system source of truth

All canonical values live in `Gaura Style Design System/`:

| File | Purpose |
|---|---|
| `colors_and_type.css` | Every CSS variable — colors, type scale, spacing, radius, shadows, motion, layout |
| `README.md` | Brand brief, voice rules, component guidance, do/don't list |
| `DESIGN.md` | Machine-readable design spec |
| `preview/*.html` | 12 static HTML specimens (colors, type, buttons, badges, forms, cards, nav, logo) |

**Never use `design-components/` as source** — that is an older variant. Always reference `Gaura Style Design System/`.

## Brand tokens (key values)

```
Fonts:      Cormorant Garamond (display) · Jost (sans/UI) · DM Mono (mono/eyebrow)
Gold:       #FFCF36  (hover: #F0C020)
Brown:      #7A5C38  (dark: #5A4228 · light: #C4A882)
BG:         #FAFAF8  (surface: #FFFFFF · warm: #F5F1EA · dark: #1A1714)
FG:         #1A1714 / #6B5E57 / #A8988E / #FAFAF8 (inverse)
Border:     #E8E3DA  (strong: #C8BFB4)
```

## Elementor architecture

- **v4 Atomic** is primary. v3 classic widgets coexist and inherit Kit tokens + Theme Style only.
- **Global Variables** (`e-gv-*`) are the single source of truth for colors/fonts/sizes inside Elementor. Key IDs:
  - `e-gv-d664fc8` = font-family-heading (Cormorant Garamond)
  - `e-gv-68225ff` = font-family-body (Jost)
  - `e-gv-948aa44` = font-family-mono (DM Mono)
  - `e-gv-c7718d7` = color-primary-500 (gold #FFCF36)
  - `e-gv-4030fb3` = color-brown (#7A5C38)
  - `e-gv-a28b536` = color-fg1 (#1A1714)
- **Global Classes** (`gc-*`) cover buttons, badges, cards, nav, forms, type helpers — all reference the global variables above.
- **Kit Theme Style** sets h1–h6, body, links for v3 widget inheritance.
- **Kit custom CSS** holds the full `:root { --sp-* --text-* ... }` token block.

## Fonts

Fonts load from **Google Fonts CDN** currently (Elementor auto-fetches because it recognises the family names). The intent is to self-host all three families as Elementor Custom Fonts and then disable Google Fonts in Elementor Settings → Advanced. Until that's done, the CDN fallback works fine.

## MCP workflow

All writes to the live site go through novamira MCP abilities:
- `novamira/elementor-edit-variable` — update a global variable value
- `novamira/elementor-create-global-class` / `edit-global-class` — manage gc-* classes
- `novamira/elementor-edit-v3-color` / `create-v3-color` — manage Kit color palette
- `novamira/elementor-edit-v3-typography` — manage Kit typography presets
- `novamira/execute-php` — direct DB writes, CSS recompile
- After any Kit `_elementor_page_settings` write via PHP: call `files_manager->clear_cache()` to invalidate CSS

**CSS recompile snippet** (after direct meta writes):
```php
$plugin = \Elementor\Plugin::instance();
delete_post_meta(7, '_elementor_css');
$plugin->files_manager->clear_cache();
```

## v4 Atomic local-style gotchas

- `background` must use `{"$$type":"background","value":{"color":{...}}}` shape — not a bare hex
- `border-width` per-side uses `{"$$type":"border-width","value":{"block-start":...}}` — NOT `dimensions`
- `padding`/`margin` use `dimensions` with `block-start/end`, `inline-start/end` keys
- Scalar values auto-wrap on create/edit (e.g. `"font-size": 16` → wrapped size object)
- No `grid-template-columns` or `flex` shorthand — use `display`, `flex-direction`, `gap` separately

## WPCode Lite CSS

WPCode Lite does **not** auto-inject CSS snippets into the frontend. Use `wp_custom_css_post` (post ID 3328) for any site-wide CSS that must go outside the Kit.

## Reference template

Post ID **3232** = single product template — primary v3 inheritance check after Kit changes.

## Out of scope (explicit decisions)

- No site-wide CSS injection (tokens go in Kit custom CSS only)
- No v3 saved templates/blocks
- No Lucide Icons CDN (deferred)
- No copy/voice changes to existing pages
