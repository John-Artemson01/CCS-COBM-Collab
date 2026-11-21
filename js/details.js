// This will look for the "id" in the link then kukuha ng information sa details/destinations.js sa matching id
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const placeId = params.get("id");
  const container = document.getElementById("content");

  if (!placeId || typeof DESTINATIONS === "undefined") {
    renderNotFound(container);
    return;
  }

  const place = DESTINATIONS.find((item) => item.id === placeId);

  if (!place) {
    renderNotFound(container);
    return;
  }

  document.title = `${place.name} – SJDM Tourist Navigator`;
  renderPlace(place, container);
});

function renderNotFound(container) {
  container.innerHTML = `
    <div class="wrap not-found">
      <h1>Place not found</h1>
      <p>The destination you are looking for does not exist or the link is incorrect.</p>
      <a class="btn btn-solid" href="map.html">Back to Map</a>
    </div>
  `;
}

function renderPlace(place, container) {
  const mapsQuery = encodeURIComponent(`${place.name}, ${place.address}`);
  let mapsHref = "";

  if (typeof mapsUrl === "function") {
    mapsHref = mapsUrl(place);
  } else {
    mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  }

  let noticeHtml = "";
  if (!place.verified) {
    noticeHtml = `<p class="notice-badge">Not confirmed, check before visiting</p>`;
  }

  let addressHtml = "";
  if (place.address) {
    addressHtml = `<p class="place-address">${place.address}</p>`;
  }

  let bodyHtml = "";
  if (place.comingSoon) {
    bodyHtml = `
      <div class="coming-soon-box">
        <p>Full details for this place are coming soon.</p>
      </div>
    `;
  } else {
    bodyHtml = renderThreeColumnGrid(place);
  }

  container.innerHTML = `
    <div class="details-banner">
      <img class="banner-bg" src="${place.image}" alt="${place.name}">
      <div class="banner-overlay">
        <a class="banner-back" href="map.html">← SJDM TOURIST NAVIGATOR</a>
      </div>
    </div>

    <div class="wrap sheet-container">
      <article class="details-sheet">
        <header class="sheet-header">
          <div class="sheet-title-group">
            <h1>${place.name}</h1>
            <p class="place-type">${place.type}</p>
            ${addressHtml}
            ${noticeHtml}
          </div>
          <div class="sheet-actions">
            <a class="btn btn-solid" href="${mapsHref}" target="_blank" rel="noopener">Directions</a>
          </div>
        </header>

        ${bodyHtml}
      </article>
    </div>
  `;
}

function renderThreeColumnGrid(place) {
  let routesHtml = "";
  if (place.howToGo && place.howToGo.length) {
    routesHtml = place.howToGo.map((route, index) => {
      let openAttr = "";
      if (index === 0) {
        openAttr = "open";
      }

      const stepsList = route.steps.map((step) => `<li>${step}</li>`).join("");

      return `
        <details class="route-group" ${openAttr}>
          <summary>${route.title}</summary>
          <ol>
            ${stepsList}
          </ol>
        </details>
      `;
    }).join("");
  } else {
    routesHtml = `<p>Directions coming soon.</p>`;
  }

  let cafesHtml = "";
  if (place.cafes && place.cafes.length) {
    const cafesList = place.cafes.map((cafe) => `<li>${cafe}</li>`).join("");
    cafesHtml = `
      <ul>
        ${cafesList}
      </ul>
    `;
  } else {
    cafesHtml = `<p>No nearby cafés listed.</p>`;
  }

  let tipsHtml = "";
  if (place.tips && place.tips.length) {
    const tipsList = place.tips.map((tip) => `<li>${tip}</li>`).join("");
    tipsHtml = `
      <ul>
        ${tipsList}
      </ul>
    `;
  }

  const info = place.info || {};
  const hasActivities = Array.isArray(info.activities) && info.activities.length > 0;
  const hasInfo = info.hours || info.fee || info.capacity || info.contact || hasActivities;

  let infoHtml = "";
  if (hasInfo) {
    let infoFields = "";

    if (info.hours) {
      infoFields += `<p><strong>Hours:</strong> ${info.hours}</p>`;
    }
    if (info.fee) {
      infoFields += `<p><strong>Fee:</strong> ${info.fee}</p>`;
    }
    if (info.capacity) {
      infoFields += `<p><strong>Capacity:</strong> ${info.capacity}</p>`;
    }
    if (info.contact) {
      infoFields += `<p><strong>Contact:</strong> ${info.contact}</p>`;
    }
    if (hasActivities) {
      const activitiesList = info.activities.map((act) => `<li>${act}</li>`).join("");
      infoFields += `
        <p><strong>Activities:</strong></p>
        <ul>
          ${activitiesList}
        </ul>
      `;
    }

    infoHtml = `
      <div class="extra-info">
        ${infoFields}
      </div>
    `;
  }

  let col3Content = "";
  if (tipsHtml || infoHtml) {
    col3Content = `${tipsHtml}${infoHtml}`;
  } else {
    col3Content = `<p>No additional tips or info listed.</p>`;
  }

  return `
    <div class="slide-columns">
      <section class="slide-card card-routes">
        <h2>HOW TO GO FROM TUNGKO</h2>
        ${routesHtml}
      </section>

      <section class="slide-card card-cafes">
        <h2>NEARBY CAFÉ / F&amp;B</h2>
        ${cafesHtml}
      </section>

      <section class="slide-card card-tips">
        <h2>TOURIST TIPS / INFO:</h2>
        ${col3Content}
      </section>
    </div>
  `;
}