/* Landing page: destination cards, search, and filter chips. */
(function () {
  const grid = document.getElementById("grid");
  const q = document.getElementById("q");
  const chipsBox = document.getElementById("chips");
  const countEl = document.getElementById("count");
  const emptyEl = document.getElementById("empty");
  let activeTag = null;

  const words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
  const n = DESTINATIONS.length;
  document.getElementById("place-count").textContent = n < words.length ? words[n] : String(n);

  const tags = [];
  DESTINATIONS.forEach(function (p) { p.tags.forEach(function (t) { if (!tags.includes(t)) tags.push(t); }); });
  chipsBox.innerHTML = tags.map(function (t) {
    return '<button class="chip" type="button" aria-pressed="false">' + esc(t) + "</button>";
  }).join("");

  grid.innerHTML = DESTINATIONS.map(function (p) {
    const note = p.verified ? "" : "Sample/estimated: verify before travel. Ask locally about current fees.";
    return '<article class="card" data-id="' + p.id + '">' +
      '<img src="' + p.image + '" alt="' + esc(p.name) + '" loading="lazy">' +
      '<div class="card-body">' +
      '<span class="tag">' + esc(p.tags.join(" · ")) + "</span>" +
      "<h3>" + esc(p.name) + "</h3>" +
      "<p>" + esc(p.summary) + "</p>" +
      (note ? '<p class="note">' + note + "</p>" : "") +
      '<div class="actions">' +
      '<a class="btn btn-outline" href="' + detailsUrl(p) + '">View Details</a>' +
      '<a class="btn btn-solid" target="_blank" rel="noopener" href="' + mapsUrl(p) + '">View Route ↗</a>' +
      "</div></div></article>";
  }).join("");

  function apply() {
    const term = q.value.trim();
    let shown = 0;
    DESTINATIONS.forEach(function (p) {
      const ok = (!term || matchesText(p, term)) && (!activeTag || p.tags.includes(activeTag));
      grid.querySelector('[data-id="' + p.id + '"]').hidden = !ok;
      if (ok) shown++;
    });
    countEl.textContent = "Showing " + shown + " destination" + (shown === 1 ? "" : "s");
    emptyEl.style.display = shown ? "none" : "block";
  }

  q.addEventListener("input", apply);
  chipsBox.addEventListener("click", function (e) {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeTag = activeTag === btn.textContent ? null : btn.textContent;
    chipsBox.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", String(c.textContent === activeTag));
    });
    apply();
  });
  apply();
})();
