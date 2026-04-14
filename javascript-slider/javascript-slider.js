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
  // Use translateX() to move the track left by offset percent
  ;

  // Update active dot
  dots.forEach(function(dot) {
    ;
  });

  // Add the "active" class to the current slide dot
  dots[currentIndex].classList.add("active");
}


/* ==========================================
   ◀ ▶ ARROW NAVIGATION
   ========================================== */
nextButton.addEventListener("click", function() {

  if (currentIndex < totalSlides - 1) {
    ;
  } else if (infinite) {
    currentIndex = 0;
  }

  updateSlider();
});

prevButton.addEventListener("click", function() {

  if (currentIndex > 0) {
    ;
  } else if (infinite) {
    currentIndex = totalSlides - 1;
  }

  updateSlider();
});


/* ==========================================
   ● DOT NAVIGATION
   ========================================== */
dots.forEach(function(dot) {

  dot.addEventListener("click", function() {

    var index = parseInt(this.getAttribute("data-index"));
     ;

    updateSlider();
  });

});


/* ==========================================
   AUTOPLAY (Optional)
   ========================================== */
function startAutoplay() {
  autoInterval = setInterval(function() {

    if (currentIndex < totalSlides - 1) {
      ;
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
    INITIALIZE
   ========================================== */
updateSlider();




/* ==========================================
   QUICK MENTAL MODEL (How the slider works)
   ========================================== 
Think of this like a picture book:
  currentIndex = which page you’re on
  currentIndex++ = go to the next page
  currentIndex-- = go to the previous page
  currentIndex = index = jump to a specific page

translateX(...) = physically slides the row of images left/right

The dots are like bookmarks:
.classList.add("active") = highlight the current slide’s dot

*/


/* ==========================================
   VARIABLE GLOSSARY (Quick Reference)
   ==========================================

animationSpeed
 How fast the sliding animation happens (milliseconds).
 Lower = faster, Higher = slower.

infinite
 Controls whether the slider loops.
 true = last slide goes back to first
 false = stops at the ends

autoplay
 Should the slider move automatically?
 true = moves on its own
 false = waits for user clicks

autoplayDelay
 How long to wait between slides during autoplay (milliseconds).

slider
 The outer container that holds the entire slider.

track
 The long row that holds all slides side-by-side.
 This is the element that moves left/right.

slides
 A list of all slide elements (each image).

prevButton
 The “previous” arrow button (◀).

nextButton
 The “next” arrow button (▶).

dots
 A list of the dot buttons under the slider.

currentIndex
 The current slide number (starts at 0).
 0 = first slide, 1 = second, etc.

totalSlides
 Total number of slides in the slider.

autoInterval
 Stores the autoplay timer (setInterval).

offset
 How far the track should move.
 Calculated as currentIndex * -100 (one slide at a time).

index
 The slide number from a clicked dot (read from data-index).

 */
