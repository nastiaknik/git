var currentIndex = 0;
var newIndex = 0;

var slideElements = document.getElementsByClassName("slider_slide");
var slidesLength = slideElements.length;
var paginationElement = document.getElementsByClassame("slider_pagination")[0];
var navElements = document.getElementsByClassName("slider_nav");

function navigateSlider() {
  /* ... */
}

navElements[0].addEventListener("click", function () {
  /* ... */
});

navElements[1].addEventListener("click", function () {
  /* ... */
});
var paginationHTML = [];
for (var i = 0; i < slidesLength; i++) {
  paginationHTML.push('<button class="slider_pagination_btn"></button>');
}
paginationElement.innerHTML = paginationHTML.join("");
//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
