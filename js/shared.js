/* Small helpers used by every page. Plain JavaScript, no libraries. */
function esc(text) {
  const d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}
function mapsUrl(place) {
  const q = encodeURIComponent(place.name + " " + place.address);
  return "https://www.google.com/maps/search/?api=1&query=" + q;
}
function detailsUrl(place) {
  return "destination.html?id=" + encodeURIComponent(place.id);
}
function findPlace(id) {
  return DESTINATIONS.find(function (p) { return p.id === id; });
}
function matchesText(place, term) {
  const hay = (place.name + " " + place.summary + " " + place.tags.join(" ") + " " + place.type).toLowerCase();
  return hay.includes(term.toLowerCase());
}
