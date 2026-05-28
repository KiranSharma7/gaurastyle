import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../hero-v1-dark.html', import.meta.url), 'utf8');

assert.match(html, /<section class="atelier-selection" id="atelier" aria-labelledby="atelierTitle">/);
assert.match(html, /<h2[^>]*id="atelierTitle"[^>]*>Chosen for now\.<\/h2>/);
assert.match(html, /Explore the atelier/);
assert.doesNotMatch(html, /Four pieces, selected for the light they catch\./);

const cards = html.match(/class="atelier-card"/g) ?? [];
assert.equal(cards.length, 4, 'renders four atelier product cards');

const ringAssets = html.match(/\.\/prototype-assets\/Rings\/ChatGPT Image May 27, 2026, 02_47_(?:25|27|31|34|39) PM\.png/g) ?? [];
assert.equal(ringAssets.length, 5, 'uses all five selected ring photographs');
assert.match(html, /class="atelier-media atelier-media--duo"/);
assert.equal((html.match(/class="atelier-card-img"/g) ?? []).length, 5, 'renders the split fourth image card');

assert.match(html, /<span class="atelier-badge">New<\/span>/);
assert.match(html, /<span class="atelier-badge">Best Seller<\/span>/);
assert.equal((html.match(/class="atelier-badge/g) ?? []).length, 2, 'limits badges to two');

assert.match(html, /Luna Pear Ring/);
assert.match(html, /Mira Hoops/);
assert.match(html, /Élan Solitaire Ring/);
assert.match(html, /Aurea Twist Ring/);
assert.match(html, /\.atelier-card:focus-visible/);
assert.match(html, /@media \(max-width: 768px\)[\s\S]*?\.atelier-grid[\s\S]*?scroll-snap-type: x mandatory/);

console.log('product-card-gallery contract passed');
