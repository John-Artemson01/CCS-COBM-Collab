# Team rules

## Who edits what
- Content Lead: `data/destinations.js` only.
- Designer: `css/styles.css` tokens and `assets/`.
- Map developer: `map.html`, `css/map.css`, `js/map.js`.
- Details developer: `destination.html`, `css/details.css`, `js/details.js`.
- Tech Lead: `index.html`, `css/home.css`, `js/home.js`, `js/shared.js`, and merging.

## Add a new place
1. Add the photo to `assets/images/destinations/<id>.jpg` (under 300 KB).
2. Copy an existing entry in `data/destinations.js`, change the id, and fill in the fields.
3. Set `pin: { x, y }` as percentages (0 to 100) of the map width and height. Open `map.html` and adjust until the pin sits where you want it.
4. Leave `verified: false` until a second source confirms routes, fees, and hours.
5. Reload `map.html`, `index.html`, and `destination.html?id=<id>` and check all three.

## Before you share your work
- No errors in the browser console (F12).
- Works at phone width (F12, device toolbar).
- No text typed into HTML or JS that belongs in the data file.

## Known content issues to resolve
- Padre Pio Mountain of Healing and River Park Esplanade have no detail pages in the Canva file (`comingSoon: true`).
- The Rising Heart page in the Canva file showed the St. Joseph Parish route. Only the Licao-Licao route was kept.
- Burong Falls lists a price of 1 to 500 pesos. Confirm the real fee.
- Addresses for Padre Pio, River Park Esplanade, and Grotto Church are partial.
