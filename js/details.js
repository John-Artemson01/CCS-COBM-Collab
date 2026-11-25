const MAX_GALLERY_IMAGES = 3;
const SWIPE_MIN_DISTANCE_PIXELS = 50;

const COLOR_SAMPLE_SIZE_PIXELS = 40;
const HUE_BUCKET_COUNT = 12;
const HUE_BUCKET_SIZE_DEGREES = 30;
const MIN_OPAQUE_ALPHA = 200;
const MIN_PIXEL_LIGHTNESS = 0.15;
const MAX_PIXEL_LIGHTNESS = 0.85;
const MIN_PIXEL_SATURATION = 0.2;
const MIN_COLORFUL_WEIGHT = 1;

const PAGE_BACKGROUND_LIGHTNESS = 0.24;
const PAGE_BACKGROUND_MIN_SATURATION = 0.3;
const PAGE_BACKGROUND_MAX_SATURATION = 0.55;
const DEFAULT_PAGE_COLOR = { red: 99, green: 72, blue: 37 };
const HEX_COLOR_PATTERN = /^#[0-9a-f]{6}$/i;

const lightboxState = {
  imageUrls: [],
  currentIndex: 0,
  title: "",
  returnFocusElement: null,
  touchStartX: 0
};

let lightboxElements = {};

document.addEventListener("DOMContentLoaded", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const placeId = searchParams.get("id");
  const notFoundBox = document.getElementById("not-found-box");
  const placeShell = document.getElementById("place-shell");

  if (!placeId || typeof DESTINATIONS === "undefined") {
    showNotFound(notFoundBox, placeShell);
    return;
  }

  const place = findPlace(placeId);

  if (!place) {
    showNotFound(notFoundBox, placeShell);
    return;
  }

  document.title = `${place.name} – SJDM Tourist Navigator`;
  notFoundBox.hidden = true;
  placeShell.hidden = false;

  setupLightbox();
  renderBackdrop(place);
  applyAccentTheme(place);
  renderHero(place);

  const comingSoonBox = document.getElementById("coming-soon-box");
  const detailsSections = document.getElementById("details-sections");

  if (place.comingSoon) {
    comingSoonBox.hidden = false;
    detailsSections.hidden = true;
    return;
  }

  comingSoonBox.hidden = true;
  detailsSections.hidden = false;

  renderRoutes(place.howToGo);
  renderGallery(place);
  renderTips(place.tips);
  renderGoodToKnow(place.info);
  renderCafes(place.cafes);
});

function showNotFound(notFoundBox, placeShell) {
  placeShell.hidden = true;
  notFoundBox.hidden = false;
}

function renderBackdrop(place) {
  const backdropImage = document.getElementById("backdrop-img");
  backdropImage.src = place.image || "";
  backdropImage.alt = "";
}

function applyAccentTheme(place) {
  if (typeof place.accent === "string" && HEX_COLOR_PATTERN.test(place.accent)) {
    const accentColor = hexToRgb(place.accent);
    setPageColor(accentColor.red, accentColor.green, accentColor.blue);
    return;
  }

  if (!place.image) {
    return;
  }

  const photo = new Image();

  photo.onload = function () {
    try {
      const dominantColor = getDominantColor(photo);
      setPageColor(dominantColor.red, dominantColor.green, dominantColor.blue);
    } catch (error) {
      return;
    }
  };

  photo.src = place.image;
}

function hexToRgb(hexColor) {
  return {
    red: parseInt(hexColor.slice(1, 3), 16),
    green: parseInt(hexColor.slice(3, 5), 16),
    blue: parseInt(hexColor.slice(5, 7), 16)
  };
}

function getDominantColor(photo) {
  const canvas = document.createElement("canvas");
  canvas.width = COLOR_SAMPLE_SIZE_PIXELS;
  canvas.height = COLOR_SAMPLE_SIZE_PIXELS;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(photo, 0, 0, COLOR_SAMPLE_SIZE_PIXELS, COLOR_SAMPLE_SIZE_PIXELS);

  const pixelData = context.getImageData(0, 0, COLOR_SAMPLE_SIZE_PIXELS, COLOR_SAMPLE_SIZE_PIXELS).data;

  const hueBuckets = Array.from({ length: HUE_BUCKET_COUNT }, () => {
    return { totalWeight: 0, redSum: 0, greenSum: 0, blueSum: 0 };
  });
  const overallTotals = { redSum: 0, greenSum: 0, blueSum: 0, pixelCount: 0 };

  for (let pixelStart = 0; pixelStart < pixelData.length; pixelStart += 4) {
    const red = pixelData[pixelStart];
    const green = pixelData[pixelStart + 1];
    const blue = pixelData[pixelStart + 2];
    const alpha = pixelData[pixelStart + 3];

    if (alpha < MIN_OPAQUE_ALPHA) {
      continue;
    }

    overallTotals.redSum += red;
    overallTotals.greenSum += green;
    overallTotals.blueSum += blue;
    overallTotals.pixelCount += 1;

    const pixelColor = rgbToHsl(red, green, blue);
    const isTooDark = pixelColor.lightness < MIN_PIXEL_LIGHTNESS;
    const isTooLight = pixelColor.lightness > MAX_PIXEL_LIGHTNESS;
    const isTooGray = pixelColor.saturation < MIN_PIXEL_SATURATION;

    if (isTooDark || isTooLight || isTooGray) {
      continue;
    }

    const brightnessBalance = 1 - Math.abs(2 * pixelColor.lightness - 1);
    const pixelWeight = pixelColor.saturation * brightnessBalance;
    const bucketIndex = Math.floor(pixelColor.hue / HUE_BUCKET_SIZE_DEGREES) % HUE_BUCKET_COUNT;
    const bucket = hueBuckets[bucketIndex];

    bucket.totalWeight += pixelWeight;
    bucket.redSum += red * pixelWeight;
    bucket.greenSum += green * pixelWeight;
    bucket.blueSum += blue * pixelWeight;
  }

  let strongestBucket = hueBuckets[0];

  hueBuckets.forEach((bucket) => {
    if (bucket.totalWeight > strongestBucket.totalWeight) {
      strongestBucket = bucket;
    }
  });

  if (strongestBucket.totalWeight < MIN_COLORFUL_WEIGHT) {
    if (overallTotals.pixelCount > 0) {
      return {
        red: Math.round(overallTotals.redSum / overallTotals.pixelCount),
        green: Math.round(overallTotals.greenSum / overallTotals.pixelCount),
        blue: Math.round(overallTotals.blueSum / overallTotals.pixelCount)
      };
    }

    return DEFAULT_PAGE_COLOR;
  }

  return {
    red: Math.round(strongestBucket.redSum / strongestBucket.totalWeight),
    green: Math.round(strongestBucket.greenSum / strongestBucket.totalWeight),
    blue: Math.round(strongestBucket.blueSum / strongestBucket.totalWeight)
  };
}

function setPageColor(red, green, blue) {
  const sourceColor = rgbToHsl(red, green, blue);
  const clampedSaturation = Math.min(
    Math.max(sourceColor.saturation, PAGE_BACKGROUND_MIN_SATURATION),
    PAGE_BACKGROUND_MAX_SATURATION
  );
  const backgroundColor = hslToRgb(sourceColor.hue, clampedSaturation, PAGE_BACKGROUND_LIGHTNESS);

  const pageElement = document.getElementById("content");
  pageElement.style.setProperty(
    "--page-bg",
    `rgb(${backgroundColor.red}, ${backgroundColor.green}, ${backgroundColor.blue})`
  );
  pageElement.style.setProperty(
    "--page-bg-rgb",
    `${backgroundColor.red}, ${backgroundColor.green}, ${backgroundColor.blue}`
  );
}

function rgbToHsl(red, green, blue) {
  const redFraction = red / 255;
  const greenFraction = green / 255;
  const blueFraction = blue / 255;

  const highest = Math.max(redFraction, greenFraction, blueFraction);
  const lowest = Math.min(redFraction, greenFraction, blueFraction);
  const range = highest - lowest;
  const lightness = (highest + lowest) / 2;

  let hue = 0;
  let saturation = 0;

  if (range !== 0) {
    saturation = range / (1 - Math.abs(2 * lightness - 1));

    if (highest === redFraction) {
      hue = ((greenFraction - blueFraction) / range) % 6;
    } else if (highest === greenFraction) {
      hue = (blueFraction - redFraction) / range + 2;
    } else {
      hue = (redFraction - greenFraction) / range + 4;
    }

    hue *= 60;

    if (hue < 0) {
      hue += 360;
    }
  }

  return { hue, saturation, lightness };
}

function hslToRgb(hue, saturation, lightness) {
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const secondLargest = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const lightnessOffset = lightness - chroma / 2;

  let baseColors;

  if (hue < 60) {
    baseColors = [chroma, secondLargest, 0];
  } else if (hue < 120) {
    baseColors = [secondLargest, chroma, 0];
  } else if (hue < 180) {
    baseColors = [0, chroma, secondLargest];
  } else if (hue < 240) {
    baseColors = [0, secondLargest, chroma];
  } else if (hue < 300) {
    baseColors = [secondLargest, 0, chroma];
  } else {
    baseColors = [chroma, 0, secondLargest];
  }

  return {
    red: Math.round((baseColors[0] + lightnessOffset) * 255),
    green: Math.round((baseColors[1] + lightnessOffset) * 255),
    blue: Math.round((baseColors[2] + lightnessOffset) * 255)
  };
}

function getPrimaryTag(place) {
  const hasTags = Array.isArray(place.tags) && place.tags.length > 0;

  if (hasTags) {
    return place.tags[0];
  }

  return place.type || "";
}

function renderHero(place) {
  const nameElement = document.getElementById("place-name");
  const addressElement = document.getElementById("place-address");
  const typeElement = document.getElementById("place-type");
  const noticeElement = document.getElementById("place-notice");
  const photoElement = document.getElementById("place-img");
  const tagElement = document.getElementById("place-tag");
  const directionsLink = document.getElementById("place-maps");

  nameElement.textContent = place.name || "";
  addressElement.textContent = place.address || "";
  typeElement.textContent = place.type || "";
  typeElement.hidden = !place.type;
  noticeElement.hidden = Boolean(place.verified);

  photoElement.src = place.image || "";
  photoElement.alt = place.name || "Destination photo";

  const primaryTag = getPrimaryTag(place);
  tagElement.textContent = primaryTag;
  tagElement.hidden = !primaryTag;

 directionsLink.href = mapsUrl(place);
  directionsLink.target = "_blank";
  directionsLink.rel = "noopener";

  setupHeroPhotoTrigger(place);
}

function setupHeroPhotoTrigger(place) {
  const photoTrigger = document.getElementById("open-modal");

  photoTrigger.addEventListener("click", () => {
    if (!place.image) {
      return;
    }

    openLightbox({
      imageUrls: [place.image],
      startIndex: 0,
      title: place.name,
      returnFocusElement: photoTrigger
    });
  });
}

function buildNumberedImageUrls(mainImageUrl) {
  const urlWithoutExtension = mainImageUrl.replace(/\.[^./]+$/, "");
  const fileExtension = mainImageUrl.slice(urlWithoutExtension.length);
  const baseUrl = urlWithoutExtension.replace(/-\d+$/, "");
  const numberedUrls = [];

  for (let photoNumber = 1; photoNumber <= MAX_GALLERY_IMAGES; photoNumber++) {
    numberedUrls.push(`${baseUrl}-${photoNumber}${fileExtension}`);
  }

  return numberedUrls;
}

function checkImageLoads(imageUrl) {
  return new Promise((resolve) => {
    const testImage = new Image();

    testImage.onload = () => {
      resolve(true);
    };

    testImage.onerror = () => {
      resolve(false);
    };

    testImage.src = imageUrl;
  });
}

async function findGalleryImageUrls(place) {
  const hasCustomGallery = Array.isArray(place.gallery) && place.gallery.length > 0;

  if (hasCustomGallery) {
    return place.gallery.slice(0, MAX_GALLERY_IMAGES);
  }

  if (!place.image) {
    return [];
  }

  const candidateUrls = buildNumberedImageUrls(place.image);
  const loadResults = await Promise.all(candidateUrls.map(checkImageLoads));
  const loadedUrls = candidateUrls.filter((candidateUrl, candidateIndex) => {
    return loadResults[candidateIndex];
  });

  if (loadedUrls.length > 0) {
    return loadedUrls;
  }

  return [place.image];
}

async function renderGallery(place) {
  const imageUrls = await findGalleryImageUrls(place);
  const slotElements = document.querySelectorAll(".collage-slot");

  slotElements.forEach((slotElement, slotIndex) => {
    const imageUrl = imageUrls[slotIndex];

    if (imageUrl) {
      fillGallerySlot({
        slotElement,
        slotIndex,
        imageUrls,
        placeName: place.name
      });
    } else {
      clearGallerySlot(slotElement);
    }
  });
}

function fillGallerySlot({ slotElement, slotIndex, imageUrls, placeName }) {
  const imageElement = slotElement.querySelector(".collage-img");
  const triggerElement = slotElement.querySelector(".collage-trigger");
  const photoNumber = slotIndex + 1;
  const displayName = placeName || "Destination";

  imageElement.src = imageUrls[slotIndex];
  imageElement.alt = `${displayName} photo ${photoNumber}`;
  imageElement.hidden = false;

  slotElement.dataset.hasImage = "true";
  triggerElement.disabled = false;
  triggerElement.setAttribute("aria-label", `View ${displayName} photo ${photoNumber} larger`);

  triggerElement.addEventListener("click", () => {
    openLightbox({
      imageUrls,
      startIndex: slotIndex,
      title: displayName,
      returnFocusElement: triggerElement
    });
  });
}

function clearGallerySlot(slotElement) {
  const imageElement = slotElement.querySelector(".collage-img");
  const triggerElement = slotElement.querySelector(".collage-trigger");

  imageElement.removeAttribute("src");
  imageElement.alt = "";
  imageElement.hidden = true;

  slotElement.dataset.hasImage = "false";
  triggerElement.disabled = true;
  triggerElement.removeAttribute("aria-label");
}

function setupLightbox() {
  lightboxElements = {
    modal: document.getElementById("image-modal"),
    backdrop: document.getElementById("modal-backdrop"),
    closeButton: document.getElementById("close-modal"),
    previousButton: document.getElementById("modal-prev"),
    nextButton: document.getElementById("modal-next"),
    image: document.getElementById("modal-img"),
    title: document.getElementById("modal-title"),
    counter: document.getElementById("modal-counter")
  };

  lightboxElements.closeButton.addEventListener("click", closeLightbox);
  lightboxElements.backdrop.addEventListener("click", closeLightbox);
  lightboxElements.previousButton.addEventListener("click", showPreviousImage);
  lightboxElements.nextButton.addEventListener("click", showNextImage);

  lightboxElements.modal.addEventListener("touchstart", handleLightboxTouchStart, { passive: true });
  lightboxElements.modal.addEventListener("touchend", handleLightboxTouchEnd, { passive: true });

  document.addEventListener("keydown", handleLightboxKeydown);
}

function openLightbox({ imageUrls, startIndex, title, returnFocusElement }) {
  lightboxState.imageUrls = imageUrls;
  lightboxState.currentIndex = startIndex;
  lightboxState.title = title || "Destination photo";
  lightboxState.returnFocusElement = returnFocusElement;

  renderLightboxImage();
  lightboxElements.modal.hidden = false;
  lightboxElements.closeButton.focus();
}

function closeLightbox() {
  lightboxElements.modal.hidden = true;

  if (lightboxState.returnFocusElement) {
    lightboxState.returnFocusElement.focus();
  }
}

function renderLightboxImage() {
  const totalImages = lightboxState.imageUrls.length;
  const photoNumber = lightboxState.currentIndex + 1;
  const hasMultipleImages = totalImages > 1;

  lightboxElements.image.src = lightboxState.imageUrls[lightboxState.currentIndex];
  lightboxElements.title.textContent = lightboxState.title;

  if (hasMultipleImages) {
    lightboxElements.image.alt = `${lightboxState.title} photo ${photoNumber} of ${totalImages}`;
    lightboxElements.counter.textContent = `${photoNumber} / ${totalImages}`;
  } else {
    lightboxElements.image.alt = lightboxState.title;
    lightboxElements.counter.textContent = "";
  }

  lightboxElements.counter.hidden = !hasMultipleImages;
  lightboxElements.previousButton.hidden = !hasMultipleImages;
  lightboxElements.nextButton.hidden = !hasMultipleImages;
}

function showNextImage() {
  const totalImages = lightboxState.imageUrls.length;

  if (totalImages <= 1) {
    return;
  }

  lightboxState.currentIndex = (lightboxState.currentIndex + 1) % totalImages;
  renderLightboxImage();
}

function showPreviousImage() {
  const totalImages = lightboxState.imageUrls.length;

  if (totalImages <= 1) {
    return;
  }

  lightboxState.currentIndex = (lightboxState.currentIndex - 1 + totalImages) % totalImages;
  renderLightboxImage();
}

function handleLightboxKeydown(event) {
  if (lightboxElements.modal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    showPreviousImage();
  } else if (event.key === "ArrowRight") {
    showNextImage();
  }
}

function handleLightboxTouchStart(event) {
  lightboxState.touchStartX = event.changedTouches[0].clientX;
}

function handleLightboxTouchEnd(event) {
  const touchEndX = event.changedTouches[0].clientX;
  const swipeDistance = touchEndX - lightboxState.touchStartX;

  if (Math.abs(swipeDistance) < SWIPE_MIN_DISTANCE_PIXELS) {
    return;
  }

  if (swipeDistance > 0) {
    showPreviousImage();
  } else {
    showNextImage();
  }
}

function renderRoutes(howToGo) {
  const routesContainer = document.getElementById("routes-container");
  const emptyMessage = document.getElementById("routes-empty");
  routesContainer.textContent = "";

  if (!Array.isArray(howToGo) || howToGo.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  howToGo.forEach((route, routeIndex) => {
    const routeDetails = document.createElement("details");
    routeDetails.className = "route-group";
    routeDetails.open = routeIndex === 0;

    const routeSummary = document.createElement("summary");
    routeSummary.className = "route-summary";
    routeSummary.textContent = route.title || `Option ${routeIndex + 1}`;
    routeDetails.appendChild(routeSummary);

    if (Array.isArray(route.steps) && route.steps.length > 0) {
      routeDetails.appendChild(createRouteStepsList(route.steps));
    }

    routesContainer.appendChild(routeDetails);
  });
}

function createRouteStepsList(steps) {
  const stepsList = document.createElement("ol");
  stepsList.className = "route-steps";

  steps.forEach((stepText) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = stepText;
    stepsList.appendChild(stepItem);
  });

  return stepsList;
}

function renderTextList(listId, emptyMessageId, items) {
  const listElement = document.getElementById(listId);
  const emptyMessage = document.getElementById(emptyMessageId);
  listElement.textContent = "";

  const hasItems = Array.isArray(items) && items.length > 0;
  listElement.hidden = !hasItems;
  emptyMessage.hidden = hasItems;

  if (!hasItems) {
    return;
  }

  items.forEach((itemText) => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    listElement.appendChild(listItem);
  });
}

function renderTips(tips) {
  renderTextList("tips-container", "tips-empty", tips);
}

function renderCafes(cafes) {
  renderTextList("cafes-container", "cafes-empty", cafes);
}

function renderGoodToKnow(info) {
  const infoList = document.getElementById("info-container");
  const emptyMessage = document.getElementById("info-empty");
  infoList.textContent = "";

  const safeInfo = info || {};
  let activities = [];

  if (Array.isArray(safeInfo.activities)) {
    activities = safeInfo.activities;
  }

  const infoRows = [
    { label: "Entrance Fee", value: safeInfo.fee },
    { label: "Hours", value: safeInfo.hours },
    { label: "Capacity", value: safeInfo.capacity },
    { label: "Contact", value: safeInfo.contact }
  ];
  const filledRows = infoRows.filter((infoRow) => Boolean(infoRow.value));
  const hasActivities = activities.length > 0;
  const hasContent = filledRows.length > 0 || hasActivities;

  infoList.hidden = !hasContent;
  emptyMessage.hidden = hasContent;

  if (!hasContent) {
    return;
  }

  filledRows.forEach((infoRow) => {
    appendInfoRow(infoList, infoRow.label, infoRow.value);
  });

  if (hasActivities) {
    appendInfoRow(infoList, "Activities", createActivitiesList(activities));
  }
}

function appendInfoRow(infoList, labelText, descriptionContent) {
  const termElement = document.createElement("dt");
  termElement.className = "meta-term";
  termElement.textContent = labelText;

  const descriptionElement = document.createElement("dd");
  descriptionElement.className = "meta-desc";

  if (typeof descriptionContent === "string") {
    descriptionElement.textContent = descriptionContent;
  } else {
    descriptionElement.appendChild(descriptionContent);
  }

  infoList.appendChild(termElement);
  infoList.appendChild(descriptionElement);
}

function createActivitiesList(activities) {
  const activitiesList = document.createElement("ul");
  activitiesList.className = "meta-sublist";

  activities.forEach((activityText) => {
    const activityItem = document.createElement("li");
    activityItem.textContent = activityText;
    activitiesList.appendChild(activityItem);
  });

  return activitiesList;
}