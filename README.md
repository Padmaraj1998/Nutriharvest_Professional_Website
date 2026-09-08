# Reethika Nutriharvest Website - Production-Ready Static Build

This build is based on the supplied Reethika Nutriharvest business card and uses only verified brand/contact information from that source.

## Included pages
- `index.html` - Home
- `about.html` - About Us
- `products.html` - Product catalogue/request page
- `contact.html` - Contact + enquiry form
- `404.html` - static-hosting fallback page
- `styles.css` - responsive brand system
- `script.js` - mobile navigation, reveal animation, mailto enquiry
- `manifest.webmanifest` - basic web app metadata
- `robots.txt` - allows search-engine crawling
- `assets/reethika-logo.png` - cleaned logo extracted from the supplied business-card artwork
- `assets/favicon.png` - site icon

## Verified source information used
- Brand: Reethika Nutriharvest
- Tagline: Nourishing Nature, Enhancing Beauty
- Brand line: Trusted Quality, Naturally Yours.
- Quality statements: 100% Natural, Premium Quality, Cosmetic Grade
- Contact: S. Vimalprasath
- Role: Co-Founder & Operations Head
- Address shown: S.R.S Nagar, Sirumugai
- Email: vimalprasath2021@gmail.com
- Phone: 8838257656

## Brand palette used
- Plum purple: `#70405C` / `#865571`
- Botanical green: `#17370E` / `#304D22`
- Warm gold: `#D1AD71`
- Ivory: `#F6F0E5`

The palette was derived from the supplied purple business-card artwork so the website remains visually consistent with the existing brand.

## What is intentionally NOT invented
The supplied material does not provide a verified product list, certifications, GST/FSSAI details, legal entity type, manufacturing status, MOQ, pack sizes, test reports, shelf life or regulatory claims. The site does not invent any of these.

## Enquiry form behaviour
The form uses `mailto:` and opens the visitor's email application with the enquiry pre-filled. It does not store or transmit form data to a website backend.

## Before public launch
1. Provide the verified product catalogue (names, product photos, grades/specs, pack sizes and application details).
2. Confirm whether the phone number is also a WhatsApp number before adding a WhatsApp button.
3. Add legal/compliance details only after verifying them (for example GST, FSSAI, certifications, business registration, lab reports).
4. Confirm the full postal address if a more precise map/location is desired.
5. Choose a domain and hosting provider.
6. After the final domain is known, add canonical URLs, `sitemap.xml`, `robots.txt`, Open Graph absolute URLs and Search Console setup.
7. If the enquiry form is changed to a server/backend form, add an appropriate privacy notice and spam protection.
8. Test email and phone links on the deployed HTTPS site.

## Local preview
From this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.
