const buttonOne = document.getElementById("getBtn");

const button = document.getElementById("gallery22");
const loadMore123Btn = document.getElementById("loadMore123");

let itemsToShow = 6; // number of items to show at a time
let shownItems = 0; // count of items shown so far

// hide all items after the first 'itemsToShow'
Array.from(gallery22.children).forEach((item, index) => {
  if (index >= itemsToShow) {
    item.style.display = "none";
  } else {
    shownItems++;
  }
});

// when the 'Load More' button is clicked, show more items
loadMore123Btn.addEventListener("click", () => {
  Array.from(gallery22.children).forEach((item, index) => {
    if (index >= shownItems + itemsToShow) {
      item.style.display = "none";
    } else if (index >= shownItems) {
      item.style.display = "grid-item";
    }
  });
  shownItems += itemsToShow;

  // hide the 'Load More' button if all items have been shown
  if (shownItems >= gallery22.children.length) {
    loadMore123Btn.style.display = "none";
  }
});
