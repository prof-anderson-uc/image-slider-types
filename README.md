# Image Slider Types

This coding exercise compares **three different ways to build an image slider** on a website:

1. Vanilla JavaScript  
2. jQuery + Slick  
3. HTML & CSS only  

All three versions solve the same design problem: displaying multiple images in a limited space with navigation controls.

---

## Purpose of this exercise

Image sliders are a very common web pattern. You will see them on:

- homepages  
- landing pages  
- product pages  
- portfolio sites  

Instead of learning just one way to build a slider, this exercise shows you that developers often have **multiple valid approaches**, each with different strengths and tradeoffs.

---

## What you will learn

- How sliders are structured in HTML  
- How CSS controls layout and animation  
- How JavaScript adds interactivity  
- How libraries and plugins work  
- The difference between custom code and pre-built tools  
- How newer CSS features are starting to replace JavaScript in some cases  

---

## Folder structure

```
image-slider-types/
│
├── index.html
├── reset.css
├── overview-styles.css
├── README.md
├── images/
│
├── javascript-slider/
│   ├── javascript-slider.html
│   ├── javascript-slider.css
│   ├── javascript-slider.js
│
├── jquery-slider/
│   ├── jquery-slider.html
│   ├── jquery-slider.css
│   ├── slider-init.js
│   └── slick/
│
└── css-slider/
    ├── css-slider.html
    ├── css-slider.css
```

---

## Files at the top level

### `index.html`
Overview page explaining the exercise and linking to each slider version.

### `reset.css`
Basic stylesheet that removes default browser styling differences.

### `overview-styles.css`
Styles the main overview page.

### `images/`
Stores shared images used in all sliders.

---

## The three slider versions

---

# 1) Vanilla JavaScript Slider

**Folder:** `javascript-slider/`

This version builds the slider completely from scratch using JavaScript.

## How it works

### HTML
Creates:
- a `.viewport` (visible area)
- a `.track` (holds all slides)
- `.slide` elements (individual images)
- navigation arrows
- dot buttons

### CSS
- `.viewport` uses `overflow: hidden`
- `.track` uses `display: flex`
- slides are arranged horizontally
- transitions create smooth movement

### JavaScript
Controls everything:
- tracks current slide (`currentIndex`)
- moves the track using `translateX`
- updates active dots
- handles arrow clicks
- optionally handles autoplay

### Key concept

The slider moves by shifting the entire `.track` left and right:

- Slide 1 → `translateX(0%)`
- Slide 2 → `translateX(-100%)`
- Slide 3 → `translateX(-200%)`

## Pros

- full control  
- no dependencies  
- great for learning  

## Cons

- more code  
- easier to break  
- requires careful coordination between HTML, CSS, and JS  

---

# 2) jQuery Slider (Slick)

**Folder:** `jquery-slider/`

This version uses the **Slick plugin**, which depends on jQuery.

## How it works

Instead of writing your own logic, you:

1. load jQuery  
2. load Slick  
3. initialize the slider with a few options  

## Example initialization

```js
$(".slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 350,
  autoplay: false
});
```

## HTML structure

Each direct child becomes a slide:

```html
<div class="slider">
  <div><img src="..."></div>
  <div><img src="..."></div>
</div>
```

## Pros

- quick to set up  
- lots of built-in features  
- less custom code  

## Cons

- depends on external files  
- less control  
- older approach compared to modern JS  

---

# 3) HTML & CSS Only Slider

**Folder:** `css-slider/`

This version uses modern CSS features instead of JavaScript.

## How it works

Uses:

- `overflow-x: auto`
- `scroll-snap-type`
- `scroll-snap-align`
- `scroll-behavior`

Basic idea:

```css
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
```

Each slide:

```css
.slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
}
```

## Important note

Some advanced features in this version are **experimental** and may not work in all browsers.

Even when they don’t work, the slider still functions as a scrollable gallery.

## Pros

- very lightweight  
- minimal or no JavaScript  
- modern approach  

## Cons

- limited browser support  
- fewer features  
- harder to customize  

---

## What all three versions have in common

- display one slide at a time  
- allow navigation between slides  
- use arrows and/or dots  
- manage image sizing and layout  

---

## How to run the project

1. Open the folder in VS Code  
2. Open `index.html`  
3. Click into each slider version  
4. Edit code and refresh to test  

No special setup is required.

---

## Suggested experiments

### Vanilla JS
- turn on autoplay  
- change speed  
- disable infinite looping  

### jQuery
- try `fade: true`  
- change `slidesToShow`  
- enable autoplay  

### CSS-only
- change image height  
- test in different browsers  
- modify scroll behavior  

---

## Troubleshooting

### Slider not moving (JS version)
- check console errors  
- confirm script is linked  
- confirm class names match  

### jQuery version not working
- jQuery must load before Slick  
- Slick must load before initialization file  

### CSS version looks different
- expected behavior due to browser support  

---

## Choosing the right approach

### Use jQuery/Slick when:
- working with older codebases  
- need quick setup  

### Use Vanilla JS when:
- you want control  
- building modern projects  

### Use CSS-only when:
- experimenting  
- targeting modern browsers  

---

## Why this exercise matters

This exercise shows that:

- there is rarely only one correct solution  
- older and newer techniques both matter  
- good developers make decisions based on context  

---

# Glossary

**Active state**  
Visual indicator for the current slide.

**Autoplay**  
Slides advance automatically after a delay.

**Carousel**  
Another term for an image slider.

**Class**  
Reusable label used in HTML and CSS.

**Dependency**  
External file or library required for something to work.

**Dot navigation**  
Clickable indicators for each slide.

**Event listener**  
JavaScript that waits for user interaction.

**Flexbox**  
CSS layout system used to align slides horizontally.

**Infinite loop**  
Slider wraps back to the beginning.

**jQuery**  
JavaScript library used by Slick.

**Plugin**  
Tool that adds functionality (like Slick).

**Scroll snap**  
CSS feature that locks scrolling into positions.

**Selector**  
Pattern used to target elements in CSS or JS.

**Slide**  
Individual image inside the slider.

**Track**  
Container that moves all slides.

**Transform**  
CSS property used to move elements.

**Transition**  
Smooth animation between states.

**TranslateX**  
Moves an element horizontally.

**Viewport**  
Visible area of the slider.

**object-fit**  
Controls how images scale inside containers.
