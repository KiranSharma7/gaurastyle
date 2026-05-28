# Section 04 Product Gallery Design

## Feature Summary

Add a new full-width product gallery section directly below the existing 2x2 featured collections showcase in `hero-v1-dark.html`. The section presents four selected jewelry pieces as a calm atelier row, using product photography and alternate-angle hover imagery to create desire without reading as a discount-led catalog.

The promotional modal remains separate and unchanged.

## Primary User Action

Study a selected piece, reveal its alternate photographic view on hover or keyboard focus, then follow the collection link or product card to continue shopping.

## Design Direction

- Selected lane: `B / Calm Collection Row`.
- Color strategy: Restrained, matching the established Gaura Style design system. Warm parchment backgrounds and near-black text carry the section; house gold appears only in a link accent or one considered offer label.
- Scene sentence: A shopper studies four fine-jewelry pieces in soft afternoon light, looking for one considered object rather than scanning a sale wall.
- References: the existing Gaura category carousel for image confidence and spacing; the selected atelier-row direction probe for gallery rhythm; warm stone-and-silk jewelry photography as the physical product reference.

## Scope

- Fidelity: production-ready HTML/CSS behavior.
- Breadth: one new homepage section.
- Interactivity: working hover and keyboard-focus image switch, responsive layout, accessible linking.
- Time intent: polished enough to sit naturally in the existing homepage prototype.

## Layout Strategy

- Position the new section after `.showcase` and before the promotional modal markup.
- Give the section a warm light surface to create a breath after the photographic showcase.
- Use a restrained header with the serif title `Chosen for now.`, the supporting line `Four pieces, selected for the light they catch.`, and one `Explore the collection` link.
- Present four equal portrait product cards in one aligned desktop row with generous gutters.
- Keep cards visually quiet at rest: photography first, text underneath, no resting shadow or heavy frame.
- Move to two columns at tablet widths.
- On mobile, use an easy-to-scan horizontal row with snap alignment so product imagery retains scale without creating an overly long stacked page.

## Card Content

Each of four cards includes:

- A linked portrait image area with primary and alternate product photographs.
- A small badge positioned within the image area on only the two specified cards.
- Product name.
- Concise material descriptor, such as `18K yellow gold, diamond`.
- Price, including an original and reduced price only for the single offer item.

Use realistic collection content across rings, earrings, a pendant, and a bracelet. Badge density is limited to exactly two labels across the entire row:

- The first card shows `NEW`.
- The third card shows `20% OFF` and is the only product with an original and reduced price.

## Interaction Model

- Rest: primary product image is visible; text and any badge remain stable.
- Pointer hover: alternate image cross-fades in while the image surface receives a very small scale increase; no overlay buttons appear.
- Keyboard focus: focusing the linked product card triggers the same alternate-image state and a clear gold focus outline.
- Pointer exit or focus exit: card returns to its primary photograph.
- Touch devices: no hover-dependent controls; tapping follows the product link with the primary image shown.
- Reduced motion: remove cross-fade and transform transitions; maintain usable card links and stable product imagery.

## Visual Details

- Typography follows the existing design system: Cormorant Garamond for the heading and Jost for interface/product metadata.
- Product imagery uses portrait crops with a subtle low-opacity outline for definition on the warm surface.
- Card corners remain near-sharp (`4px`), matching Gaura Style.
- Badge labels are compact, all-caps, and warm-toned. `NEW` uses a neutral warm surface; `20% OFF` uses restrained house gold.
- Product cards have no shadow at rest. A minimal lifted shadow may appear on interactive hover/focus if it remains secondary to the image switch.
- Avoid quick-add buttons, favorite icons, stacked badges, aggressive strike-through pricing, or sales language in the header.

## States And Accessibility

- Default: four complete products with primary imagery and legible product information.
- Hover/focus: alternate image visible with restrained motion and clear link focus treatment.
- Reduced motion: transitions disabled.
- Responsive: four-column desktop, two-column tablet, horizontal-scroll mobile with appropriately sized touch targets.
- Image fallback: if the secondary image does not load, the primary image remains visible and all product information stays usable.
- Content accessibility: meaningful product alt text, linked card accessible names, badge text present in DOM, AA contrast against the warm section surface.

## Required Assets

- Eight product image roles: four primary product photos and four alternate-angle photos.
- Prefer existing project assets where suitable; use verified remote product photography for remaining alternate angles.
- Do not generate new product imagery for this implementation.

## Implementation References

- `impeccable/reference/brand.md` for image-led brand hierarchy.
- `impeccable/reference/interaction-design.md` for linked-card and focus behavior.
- `impeccable/reference/motion-design.md` for restrained image transitions.
- `make-interfaces-feel-better` guidance for image outlines, exact transitions, focus/press affordance, and responsive touch behavior.

## Acceptance Criteria

- A distinct fourth homepage section appears below the showcase without changing the promotional modal.
- Four editorial product cards are shown at desktop width with no generic discount-grid clutter.
- Every card has a functional alternate-image reveal on hover and keyboard focus.
- Only two understated badges appear in total.
- The layout adapts cleanly for tablet and mobile and respects reduced-motion preferences.
