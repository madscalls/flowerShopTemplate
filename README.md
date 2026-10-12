# Nightbloom: Florist Template

A florist website template by **Whelk Works**, built with React + Vite. It's part of the template portfolio for small local businesses.

"Nightbloom" is a placeholder brand. Swap in the client's name, copy and photos.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in dist/
```

## Pages

| Route | File | What's on it |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Hero photo trio with leaf vine, featured arrangements, studio gallery, events teaser |
| `/shop` | `src/pages/Shop.jsx` | Product grid with category filters and a demo cart counter |
| `/events` | `src/pages/Events.jsx` | Inquiry form with Wedding / Event and Funeral / Sympathy tabs |
| `/about` | `src/pages/About.jsx` | Story, values, team, visit/map |

## Customizing

- **Theme:** `src/theme.js` holds the button color (`accent`), the sage green (`leaf`) and the photo shape style (`organic`, `soft` or `square`).
- **Products:** the product list and photo mapping live in the `renderVals` function at the top of `src/pages/Shop.jsx`.
- **Team:** names, roles and portraits are in `src/pages/About.jsx`.
- **Photos:** everything is in `public/images/`. Replace a file with the same name, or point the `src` at a new one.
- **Placeholders:** search for `[` to find every bracketed placeholder, such as `[PRICE]`, `[HOURS]` and `[Your City]`.

The pages were generated from the design mockup, so styles are inline and match it exactly. Edit them directly.

## Before a client launch

- The inquiry form isn't wired up. Connect it to Formspree, Netlify Forms or similar.
- The shop and cart are a visual demo. Connect them to Square, Shopify Buy Button or Snipcart.
- Replace the map placeholder with a Google Maps embed.
- Stock photos are from Pexels and Unsplash (free licenses). Replace the team portraits with the client's real staff before going live.

## Deploying

The project deploys to GitHub Pages at https://madscalls.github.io/flowerShopTemplate/. Pushes to `main` build and publish the site through GitHub Actions. The build also generates a `404.html` fallback so React Router routes continue to work when opened or refreshed directly.

For Cloudflare Pages or Netlify, `public/_redirects` sends every route to `index.html`.
