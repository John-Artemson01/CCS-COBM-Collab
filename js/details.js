/* Details page: reads ?id=... from the address and fills the page. */
(function () {
  const root = document.getElementById("content");
  const id = new URLSearchParams(window.location.search).get("id");
  const p = findPlace(id);

  if (!p) {
    document.title = "Place not found – SJDM Tourist Navigator";
    root.innerHTML = '<div class="detail-hero"><a class="back" href="map.html">← Back to Map</a>' +
      '<div class="soon">We could not find that place. Go back to the map and pick another pin.</div></div>';
    return;
  }
  document.title = p.name + " – SJDM Tourist Navigator";

  function list(items, ordered) {
    const tag = ordered ? "ol" : "ul";
    return "<" + tag + ">" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</" + tag + ">";
  }

  let html = '<div class="detail-hero">' +
    '<a class="back" href="map.html">← Back to Map</a>' +
    '<div class="detail-head"><div><span class="tag">' + esc(p.type) + "</span><h1>" + esc(p.name) + "</h1>" +
    '<p class="addr">📍 ' + esc(p.address) + "</p>" +
    (p.verified ? "" : '<p><span class="note-unverified">Not confirmed. Check before visiting.</span></p>') +
    '<div class="actions"><a class="btn btn-solid" target="_blank" rel="noopener" href="' + mapsUrl(p) + '">🧭 Directions</a>' +
    '<a class="btn btn-outline" href="map.html">← Back to Map</a></div></div>' +
    '<img src="' + p.image + '" alt="' + esc(p.name) + '"></div></div>';

  html += '<div class="detail-grid"><div>';
  if (p.comingSoon) {
    html += '<div class="soon">Full details for this place are coming soon.</div>';
  }
  if (p.howToGo.length) {
    html += '<section class="box"><h2>How to go from Tungko</h2>' +
      p.howToGo.map(function (r, i) {
        return '<details class="route"' + (i === 0 ? " open" : "") + "><summary>" + esc(r.title) + "</summary>" + list(r.steps, true) + "</details>";
      }).join("") + "</section>";
  }
  html += "</div><div>";
  if (p.cafes.length) html += '<section class="box"><h2>Nearby café / F&amp;B</h2>' + list(p.cafes) + "</section>";
  if (p.tips.length) html += '<section class="box"><h2>Tourist tips</h2>' + list(p.tips) + "</section>";

  const i = p.info || {};
  const rows = [["Operating hours", i.hours], ["Entrance fee", i.fee], ["Capacity", i.capacity], ["Contact", i.contact]]
    .filter(function (r) { return r[1]; });
  if (rows.length || (i.activities && i.activities.length)) {
    html += '<section class="box info"><h2>Good to know</h2><dl>' +
      rows.map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("") +
      (i.activities ? "<dt>Activities</dt><dd>" + list(i.activities) + "</dd>" : "") + "</dl></section>";
  }
  html += "</div></div>";
  root.innerHTML = html;
})();
