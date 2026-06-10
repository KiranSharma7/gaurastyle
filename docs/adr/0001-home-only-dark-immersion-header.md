# Home-only "Dark Immersion" header as a page-scoped Elementor template

The home page (3530) needs a transparent navbar that overlays its dark hero video; that
treatment is unreadable on the site's light catalog/product pages. We therefore deliver it
as a **new Elementor header template scoped `include/singular/page/3530`** and add
`exclude/singular/page/3530` to the existing general header **3298** (`include/general`),
rather than rebuilding 3298 site-wide — so home shows the dark header and every other page
keeps the existing one, with no page ever rendering two headers.

## Considered Options

- **Replace general header 3298 site-wide** — rejected: the dark overlay is unreadable on
  white pages and no light-page variant exists.
- **Recover the previously-built (then user-removed) template 3531 from trash** — rejected:
  user chose a clean rebuild.

## Consequences

- The header's custom CSS/JS is delivered via **html-widget `<style>` and `<script>` blocks
  inside the template** (not the Elementor per-element custom-CSS field, which does not render
  on this site, and not the global `ihaf_*` fields). Because the template is home-scoped, this
  code loads only on home automatically.
- A future engineer must remember the 3298 exclusion: if home ever stops showing its header,
  check that 3298 still excludes 3530 and the home template's condition is intact.
- Rolling Dark Immersion out site-wide later requires designing light-surface header variants
  first; it is deliberately out of scope here.
