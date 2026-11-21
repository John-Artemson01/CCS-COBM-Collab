/* Map page: pins, search suggestions, place card, and the full list. */
(function () {
  const map = document.getElementById("map");
  const panel = document.getElementById("panel");
  const search = document.getElementById("search");
  const suggest = document.getElementById("suggest");
  const filters = document.getElementById("map-filters");
  const listAll = document.getElementById("list-all");
  const defaultPanel = panel.innerHTML;
  const pinEls = {};
  let activeTag = null;
  let selectedPlaceId = null;

  const tags = [];
  DESTINATIONS.forEach(function (p) {
    p.tags.forEach(function (tag) {
      if (!tags.includes(tag)) tags.push(tag);
    });
  });
  filters.innerHTML = tags.map(function (tag) {
    return '<button class="map-filter" type="button" aria-pressed="false">' + esc(tag) + "</button>";
  }).join("");

  DESTINATIONS.forEach(function (p) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pin";
    b.dataset.id = p.id;
    b.style.left = p.pin.x + "%";
    b.style.top = p.pin.y + "%";
    b.setAttribute("aria-label", p.name);
    b.setAttribute("aria-pressed", "false");
    b.innerHTML =
      '<span class="pin-graphic" aria-hidden="true"><span class="pin-content">' +
      '<img class="pin-photo" src="' + p.image + '" alt="">' +
      '<img class="pin-shape" src="assets/images/map/map-pin.png" alt="">' +
      "</span></span><span class=\"pin-name\">" + esc(p.name) + "</span>";
    b.addEventListener("click", function () { selectPlace(p.id); });
    map.appendChild(b);
    pinEls[p.id] = b;
  });

  function updatePinLabelWidths() {
    const mapWidth = map.clientWidth;
    DESTINATIONS.forEach(function (p) {
      const rightSpace = mapWidth * (1 - p.pin.x / 100);
      const pin = pinEls[p.id];
      pin.style.setProperty("--pin-label-width", Math.max(48, Math.min(140, rightSpace - 32)) + "px");
      pin.style.setProperty("--pin-selected-label-width", Math.max(48, Math.min(140, rightSpace - 76)) + "px");
    });
  }
  updatePinLabelWidths();
  window.addEventListener("resize", updatePinLabelWidths);

  listAll.innerHTML = DESTINATIONS.map(function (p) {
    return '<li><button type="button" data-id="' + p.id + '" aria-pressed="false">' + esc(p.name) + "</button></li>";
  }).join("");
  listAll.addEventListener("click", function (e) {
    const b = e.target.closest("button");
    if (b) selectPlace(b.dataset.id);
  });
  panel.addEventListener("click", function (e) {
    if (e.target.closest("#back")) {
      resetMap();
      return;
    }
    if (e.target.closest("#view-all")) {
      const open = listAll.hidden;
      listAll.hidden = !open;
      document.getElementById("view-all").setAttribute("aria-expanded", String(open));
    }
  });

  function applyFilters() {
    const term = search.value.trim();
    const matches = [];
    DESTINATIONS.forEach(function (p) {
      const match = (!term || matchesText(p, term)) && (!activeTag || p.tags.includes(activeTag));
      pinEls[p.id].classList.toggle("dim", !match);
      listAll.querySelector('[data-id="' + p.id + '"]').closest("li").hidden = !match;
      if (match && term) matches.push(p);
    });
    suggest.innerHTML = matches.map(function (p) {
      return '<li><button type="button" data-id="' + p.id + '">' + esc(p.name) + "</button></li>";
    }).join("");
    suggest.hidden = !term || matches.length === 0;
  }

  filters.addEventListener("click", function (e) {
    const btn = e.target.closest(".map-filter");
    if (!btn) return;
    activeTag = activeTag === btn.textContent ? null : btn.textContent;
    filters.querySelectorAll(".map-filter").forEach(function (filter) {
      filter.setAttribute("aria-pressed", String(filter.textContent === activeTag));
    });
    applyFilters();
  });

  function selectPlace(id) {
    const p = findPlace(id);
    if (!p) return;
    if (selectedPlaceId === id) {
      resetMap();
      return;
    }
    selectedPlaceId = id;
    map.classList.add("has-selection");
    Object.keys(pinEls).forEach(function (k) {
      const selected = k === id;
      pinEls[k].setAttribute("aria-pressed", String(selected));
      listAll.querySelector('[data-id="' + k + '"]').setAttribute("aria-pressed", String(selected));
    });
    panel.innerHTML =
      '<div class="place-card"><img src="' + p.image + '" alt="' + esc(p.name) + '">' +
      "<div><p class=\"hint\">" + esc(p.type) + "</p><h2>" + esc(p.name) + "</h2><p>📍 " + esc(p.address) + "</p></div></div>" +
      '<div class="actions">' +
      '<a class="btn btn-solid" href="' + detailsUrl(p) + '">View Full Details <span class="btn-external" aria-hidden="true">⇗</span></a>' +
      '<a class="btn btn-outline" target="_blank" rel="noopener" href="' + mapsUrl(p) + '">🧭 Directions <span class="btn-external" aria-hidden="true">⇗</span></a>' +
      '<button class="btn btn-outline" type="button" id="back">← Back to Map</button></div>';
    pinEls[id].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }

  function resetMap() {
    selectedPlaceId = null;
    map.classList.remove("has-selection");
    panel.innerHTML = defaultPanel;
    document.getElementById("view-all").setAttribute("aria-expanded", String(!listAll.hidden));
    Object.keys(pinEls).forEach(function (k) {
      pinEls[k].setAttribute("aria-pressed", "false");
      listAll.querySelector('[data-id="' + k + '"]').setAttribute("aria-pressed", "false");
    });
  }

  search.addEventListener("input", applyFilters);
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
  applyFilters();
})();
