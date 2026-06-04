# Product Page Data Fields

All data fields required for the Gaura Style product detail page (PDP), derived from `product-v1.html`.

---

## Core Product

| Field | Type | Example |
|---|---|---|
| Product name | text | Luna Pear Ring |
| Material subtitle | text | 18K yellow gold, pear-cut Ceylon sapphire, two brilliant diamonds |
| Price | number | 2650 |
| Price note | text | incl. duties |
| Sale price | number (optional) | — |
| Short lede | text (1–2 sentences) | A single pear-cut sapphire, set off-axis... |
| Rating | number (0–5) | 5 |
| Review count | number | 47 |
| Badge label | text (optional) | New · Bestseller · Only 2 left |
| Collection / eyebrow | text | Luna Collection |
| SKU | text | GS-LPR-18KY |

---

## Gallery

| Field | Type | Notes |
|---|---|---|
| Hero image | image | Main stage, 4:5 ratio |
| Thumbnail images | image[] | 2–4 alternates |

---

## Variants

| Field | Type | Notes |
|---|---|---|
| Available sizes | number[] | e.g., 4, 4.5, 5, 5.5 … 9 |
| Unavailable sizes | number[] | Shown crossed out |

---

## Specifications (Details & Dimensions accordion)

| Field | Type | Example |
|---|---|---|
| Center stone | text | Pear-cut Ceylon sapphire, 1.4 ct |
| Accent stones | text (optional) | 2 brilliant diamonds, 0.16 ct total |
| Metal | text | 18K yellow gold, recycled |
| Band width | text | 1.8 mm, tapering |
| Setting height | text | 6.2 mm |
| Total weight | text | 3.1 g (size 6) |

---

## Materials & Care (accordion)

| Field | Type |
|---|---|
| Care instructions | text (paragraph) |

---

## Shipping & Returns (accordion)

| Field | Type | Example |
|---|---|---|
| Production time | text | Made to order in 2 to 3 weeks |
| Shipping destinations | text | US, Japan, India, Russia |
| Return window | text | 30 days in original condition |
| Return exceptions | text | Engraved pieces are final sale |
| Duties / taxes note | text | Included in the price shown |

---

## Gift & Engraving

| Field | Type | Notes |
|---|---|---|
| Gift note option | boolean | Checkbox |
| Gift receipt option | boolean | Checkbox |
| Engraving type | enum | none · initials · date · message |
| Engraving text | text (max 24 chars) | Inside-band text |

---

## Story / Narrative Section

| Field | Type | Example |
|---|---|---|
| Story eyebrow | text | The Design |
| Story title | text (supports `<em>`) | Worn, not displayed |
| Story body | text[] (paragraphs) | 2–3 paragraphs |
| Story signature | text | Artisan's name or studio sign-off |
| Story image | image | 4:5 ratio |

---

## Detail Strip (4 feature cells)

Each cell repeats:

| Field | Type |
|---|---|
| Icon (SVG) | svg |
| Heading | text |
| Description | text (short paragraph) |

---

## "Pairs With" Cross-Sell (2 items)

| Field | Type | Example |
|---|---|---|
| Product name | text | Mira Blue Ring |
| Image | image | |
| Tag label | text | Same stone · Gold contrast |
| Material | text | 18K yellow gold, sapphire |
| Price | number | 1450 |
| Link / slug | url | /shop#mira-blue-ring |

---

## Related Products (bottom grid)

Each card:

| Field | Type | Notes |
|---|---|---|
| Product name | text | |
| Primary image | image | |
| Hover image | image (optional) | Shown on hover |
| Badge label | text (optional) | e.g., Sale · New |
| Material | text | |
| Price | number | |
| Sale price | number (optional) | |
| Link / slug | url | |
