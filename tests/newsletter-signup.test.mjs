import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../hero-v1-dark.html', import.meta.url), 'utf8');

const trustBarIndex = html.indexOf('<!-- TRUST BAR -->');
const newsletterIndex = html.indexOf('<!-- NEWSLETTER SIGNUP -->');
const promoIndex = html.indexOf('<!-- PROMOTIONAL MODAL POPUP -->');

assert.ok(trustBarIndex >= 0, 'trust bar exists');
assert.ok(newsletterIndex > trustBarIndex, 'newsletter appears after trust bar');
assert.ok(promoIndex > newsletterIndex, 'newsletter appears before promo modal');

assert.match(html, /<section class="newsletter-signup" aria-labelledby="newsletterTitle">/);
assert.match(html, /<span class="newsletter-eyebrow">Private Preview<\/span>/);
assert.match(html, /<h2 class="newsletter-title" id="newsletterTitle">Be first to see what arrives next<\/h2>/);
assert.match(html, /Early access to new jewelry drops and limited designs\./);
assert.match(html, /<form class="newsletter-form" id="newsletterForm" novalidate>/);
assert.match(html, /type="email"[\s\S]*placeholder="Email address"/);
assert.match(html, /<button class="newsletter-submit" type="submit">Join<\/button>/);
assert.match(html, /No clutter\. Only new releases and private previews\./);
assert.match(html, /newsletterForm\.addEventListener\('submit'/);

console.log('newsletter signup contract passed');
