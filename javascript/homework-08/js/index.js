"use strict";
// Create element
const imageGallery = $qs("js-image-gallery");
const fullview = $cel("div", { className: "fullview" });
const img = $cel("img", { src: "#", alt: "" });
const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  }
];

// Add class

// add attribute

// add elem

// imageGallery.append(fullview);
// fullview.append(img);

function createListPreview(items) {
  const list = $cel("ul", { class: "preview" });

  for (let item of items) {
    console.log(item);
  }
}
createListPreview(galleryItems);