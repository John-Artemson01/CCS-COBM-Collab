# SJDM Tourist Navigator

Student tourism website for San Jose del Monte, Bulacan. Plain HTML, CSS, and native JavaScript. No frameworks, no jQuery, no build step, no npm.

## Run it

Double-click `index.html`, or in VS Code right-click it and choose **Open with Live Server**. It works without a server because place data is a normal script file.

## Folder structure

```
sjdm-tourist-navigator/
  index.html            Landing page: hero, destination cards, tips, about, QR box
  map.html              Interactive map: pins, search, place card
  destination.html      One template that shows any place (destination.html?id=the-rising-heart)
  README.md
  css/
    styles.css          Shared: colors, fonts, header, footer, buttons (every page loads this)
    home.css            index.html only
    map.css             map.html only
    details.css         destination.html only
  js/
    shared.js           Helpers: esc(), mapsUrl(), detailsUrl(), findPlace(), matchesText()
    home.js             Cards, search, filter chips
    map.js              Pins, suggestions, place card, view list
    details.js          Reads ?id= and fills the details page
  data/
    destinations.js     ALL place content (one entry per place)
  assets/
    icons/              logo.svg
    images/
      map/              map-bg.jpg
      destinations/     one photo per place, named by id (the-rising-heart.jpg)
  docs/
    CONTRIBUTING.md     Team rules and how to add a place
```

## Rules

- No frameworks or libraries. Use `document.querySelector`, `addEventListener`, and template strings.
- Each page loads only its own CSS and JS, plus the shared files.
- Content lives only in `data/destinations.js`. Never type place text into HTML or JS files.
- One class naming style: lowercase with dashes (`place-card`). One file naming style: lowercase with dashes.
- Images: JPG, under 300 KB, named like the place id.
- Indent with 2 spaces. Comment why, not what.

## Page load order (bottom of every page)

```
data/destinations.js  ->  js/shared.js  ->  js/<page>.js
```
