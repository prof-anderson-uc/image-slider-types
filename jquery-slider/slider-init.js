/* jQuery + Slick initialization

   This is the “jQuery era” approach:
   - Include libraries
   - Call one function
   - Configure options
*/

$(function () {
  $(".slider").slick({
    dots: true,       // show dot navigation
    arrows: true,     // show prev/next arrows
    infinite: true,   // loop back to first slide
    speed: 350,       // transition speed (ms)
    autoplay: false,   // Change to true to have slides autimatically advance
  });
});



// Customization options to try:
// Add these options to the others shown above

// Show multiple slides at once:
// -------------------------
// slidesToShow: 2,
// slidesToScroll: 1,

// Cross-fade instead of sliding:
// -------------------------
// fade: true,

// Allow dragging with mouse / touch
// -------------------------
// draggable: true,
// swipe: true,

// Autoplay
// -------------------------
// autoplay: true,
// autoplaySpeed: 2000,
// pauseOnHover: true,

// Height behavior makes slider height match each slide’s content.
// WARNING: can cause the page to jump up/down between slides.
// -------------------------
// adaptiveHeight: true,

