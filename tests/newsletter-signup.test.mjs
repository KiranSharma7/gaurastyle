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
assert.match(html, /<h2 class="newsletter-title" id="newsletterTitle">Welcome to the Gaura World<\/h2>/);
assert.match(html, /Sign up to receive email updates from Gaura Style about the latest jewelry drops and collection previews\./);
assert.match(html, /<form class="newsletter-form" id="newsletterForm" novalidate>/);
assert.match(html, /type="email"[\s\S]*placeholder="Enter your email"/);
assert.match(html, /<button class="newsletter-submit" type="submit">Submit<\/button>/);
assert.match(html, /Privacy Policy/);
assert.match(html, /Terms of Use/);
assert.doesNotMatch(html, /class="newsletter-visual"/);
assert.match(html, /newsletterForm\.addEventListener\('submit'/);

console.log('newsletter signup contract passed');
