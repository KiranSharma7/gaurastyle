import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../shop-v1-dark.html', import.meta.url), 'utf8');

assert.match(html, /<title>Gaura Style - Shop<\/title>/);
assert.match(html, /<div class="announcement-bar" id="announcementBar" role="banner">/);
assert.match(html, /<nav class="navbar" id="navbar" aria-label="Main navigation">/);
assert.match(html, /<footer class="site-footer" id="site-footer" aria-labelledby="footerTitle">/);

assert.match(html, /<section class="shop-hero" aria-labelledby="shopTitle">/);
assert.match(html, /<h1 class="shop-title" id="shopTitle">Shop Gaura Style<\/h1>/);
assert.doesNotMatch(html, /<form class="shop-filters"/);
assert.doesNotMatch(html, /shop-filter-ribbon/);
assert.doesNotMatch(html, /data-filter-trigger=/);
assert.doesNotMatch(html, /data-filter-group=/);
assert.doesNotMatch(html, /id="filterDrawer"/);
assert.doesNotMatch(html, /id="filterToggle"/);
assert.doesNotMatch(html, /id="filterBackdrop"/);

const cards = html.match(/class="atelier-card shop-product"/g) ?? [];
assert.ok(cards.length >= 8, 'renders at least eight shop product cards');

assert.match(html, /data-category="rings"/);
assert.match(html, /data-category="earrings"/);
assert.match(html, /data-category="bracelets"/);
assert.match(html, /data-category="pendants"/);
assert.match(html, /class="atelier-quick-add"/);

assert.doesNotMatch(html, /function applyFilters\(\)/);
assert.doesNotMatch(html, /product\.hidden = !matches/);
assert.doesNotMatch(html, /clearFilters\.addEventListener\('click'/);
assert.doesNotMatch(html, /shopEmpty/);

console.log('shop page contract passed');
