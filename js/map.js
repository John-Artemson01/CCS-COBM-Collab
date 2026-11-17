/* Map page: pins, search suggestions, place card, and the full list. */
(function () {
  const map = document.getElementById("map");
  const panel = document.getElementById("panel");
  const search = document.getElementById("search");
  const suggest = document.getElementById("suggest");
  const listAll = document.getElementById("list-all");
  const viewAll = document.getElementById("view-all");
  const defaultPanel = panel.innerHTML;
  const pinEls = {};

  DESTINATIONS.forEach(function (p) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pin";
    b.style.left = p.pin.x + "%";
    b.style.top = p.pin.y + "%";
    b.setAttribute("aria-pressed", "false");
    b.innerHTML = '<img src="' + p.image + '" alt=""><span>' + esc(p.name) + "</span>";
    b.addEventListener("click", function () { selectPlace(p.id); });
    map.appendChild(b);
    pinEls[p.id] = b;
  });

  listAll.innerHTML = DESTINATIONS.map(function (p) {
    return '<li><button type="button" data-id="' + p.id + '">' + esc(p.name) + "</button></li>";
  }).join("");
  listAll.addEventListener("click", function (e) {
    const b = e.target.closest("button");
    if (b) selectPlace(b.dataset.id);
  });
  viewAll.addEventListener("click", function () {
    const open = listAll.hidden;
    listAll.hidden = !open;
    viewAll.setAttribute("aria-expanded", String(open));
  });

  function selectPlace(id) {
    const p = findPlace(id);
    if (!p) return;
    Object.keys(pinEls).forEach(function (k) { pinEls[k].setAttribute("aria-pressed", String(k === id)); });
    panel.innerHTML =
      '<div class="place-card"><img src="' + p.image + '" alt="' + esc(p.name) + '">' +
      "<div><p class=\"hint\">" + esc(p.type) + "</p><h2>" + esc(p.name) + "</h2><p>📍 " + esc(p.address) + "</p></div></div>" +
      '<div class="actions">' +
      '<a class="btn btn-solid" href="' + detailsUrl(p) + '">View Full Details</a>' +
      '<a class="btn btn-outline" target="_blank" rel="noopener" href="' + mapsUrl(p) + '">🧭 Directions</a>' +
      '<button class="btn btn-outline" type="button" id="back">← Back to Map</button></div>';
    document.getElementById("back").addEventListener("click", resetMap);
    pinEls[id].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }

  function resetMap() {
    panel.innerHTML = defaultPanel;
    Object.keys(pinEls).forEach(function (k) { pinEls[k].setAttribute("aria-pressed", "false"); });
    const btn = document.getElementById("view-all");
    btn.addEventListener("click", function () {
      const open = listAll.hidden;
      listAll.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  search.addEventListener("input", function () {
    const term = search.value.trim();
    let matches = [];
    DESTINATIONS.forEach(function (p) {
      const ok = !term || matchesText(p, term);
      pinEls[p.id].classList.toggle("dim", !ok);
      if (ok && term) matches.push(p);
    });
    suggest.innerHTML = matches.map(function (p) {
      return '<li><button type="button" data-id="' + p.id + '">' + esc(p.name) + "</button></li>";
    }).join("");
    suggest.hidden = !term || matches.length === 0;
  });
  suggest.addEventListener("click", function (e) {
    const b = e.target.closest("button");
    if (!b) return;
    suggest.hidden = true;
    search.value = findPlace(b.dataset.id).name;
    selectPlace(b.dataset.id);
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-box")) suggest.hidden = true;
  });
})();
