import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const thankYou = readFileSync(new URL('../thank-you.html', import.meta.url), 'utf8');
const checkout = readFileSync(new URL('../checkout.html', import.meta.url), 'utf8');

assert.match(thankYou, /<title>Thank You - Gaura Style<\/title>/);
assert.match(thankYou, /<main class="thank-you-page/);
assert.match(thankYou, /<h1[^>]*>Thank you for placing your trust in our collection\.<\/h1>/);
assert.match(thankYou, /Your purchase is confirmed\./);
assert.match(thankYou, /We have received your order and will send tracking details as soon as your piece is ready to travel\./);
assert.match(thankYou, /Order GS-2601/);
assert.match(thankYou, /Continue Shopping/);
assert.match(thankYou, /Track Your Order/);
assert.match(thankYou, /@media \(prefers-reduced-motion: reduce\)/);

assert.match(checkout, /href="thank-you\.html"/);

console.log('thank you page contract passed');
