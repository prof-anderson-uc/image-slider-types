/* ==========================================
   VANILLA JS IMAGE SLIDER
   Web II – Simple Configurable Version
   ========================================== */


/* ==========================================
   CONFIGURATION (You can safely edit this)
   ========================================== */

// Animation speed (in milliseconds)
var animationSpeed = 350;

// Should the slider loop from last → first?
var infinite = true;

// Autoplay settings
var autoplay = false; // change to true to automatically advance slides
var autoplayDelay = 2500; // pause between auto playing slides


/* ==========================================
   SELECT ELEMENTS - Must match HTML class names!
   ========================================== */

var slider = document.querySelector(".slider");
var track = document.querySelector(".track");
var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var dots = document.querySelectorAll(".dot");


/* ==========================================
   SETUP
   ========================================== */

var currentIndex = 0;
var totalSlides = slides.length;
var autoInterval;

// Set transition speed from configuration
track.style.transition = "transform " + animationSpeed + "ms ease";


/* ==========================================
   CORE FUNCTION: Update Slide Position
   ========================================== */

function updateSlider() {

  // Move the track left based on currentIndex
  var offset = currentIndex * -100;
  track.style.transform = "translateX(" + offset + "%)";

  // Update active dot
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  dots[currentIndex].classList.add("active");
}


/* ==========================================
   ◀ ▶ ARROW NAVIGATION
   ========================================== */

nextButton.addEventListener("click", function () {

  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else if (infinite) {
    currentIndex = 0;
  }

  updateSlider();
});

prevButton.addEventListener("click", function () {

  if (currentIndex > 0) {
    currentIndex--;
  } else if (infinite) {
    currentIndex = totalSlides - 1;
  }

  updateSlider();
});


/* ==========================================
   ● DOT NAVIGATION
   ========================================== */

dots.forEach(function (dot) {

  dot.addEventListener("click", function () {

    var index = parseInt(this.getAttribute("data-index"));
    currentIndex = index;

    updateSlider();
  });

});


/* ==========================================
   AUTOPLAY (Optional)
   ========================================== */

function startAutoplay() {
  autoInterval = setInterval(function () {

    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else if (infinite) {
      currentIndex = 0;
    }

    updateSlider();

  }, autoplayDelay);
}

if (autoplay) {
  startAutoplay();
}


/* ==========================================
   🚀 INITIALIZE
   ========================================== */
updateSlider();
