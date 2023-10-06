"use strict";

///////////////////////////////////////
// Modal window

const modal              =     document.querySelector(".modal");
const overlay            =     document.querySelector(".overlay");
const btnCloseModal      =     document.querySelector(".btn--close-modal");
const btnsOpenModal      =     document.querySelectorAll(".btn--show-modal");
const btnScrollTo        =     document.querySelector(".btn--scroll-to");
const section1           =     document.querySelector("#section--1");
const tabs               =     document.querySelectorAll(".operations__tab");
const tabContainer       =     document.querySelector(".operations__tab-container");
const tabContent         =     document.querySelectorAll(".operations__content");
const nav                =     document.querySelector(".nav");
const header             =     document.querySelector(".header");
const section            =     document.querySelectorAll(".section");
const imageObs           =     document.querySelectorAll("img[data-src]");
const slides             =     document.querySelectorAll(".slide");
const btnRight           =     document.querySelector(".slider__btn--right");
const btnLeft            =     document.querySelector(".slider__btn--left");



const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/******************************************************************************************************** */

// Button scrolling
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

// Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

/******************************************************************************************************** */

// Selecting, Creating, and Deleting Elements

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

/******************************************************************************************************** */

//   // Styles, Attributes and Classes

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

/******************************************************************************************************** */

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // Don't use
// logo.clasName = 'jonas';

// const scrolling  = document.getElementById('section--1')
// scrolling.scrollIntoView({ behavior: 'smooth' });
// console.log(scrolling);

/******************************************************************************************************** */

// Types of Events and Event Handlers
const h1 = document.querySelector("h1");

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

/******************************************************************************************************** */

// Event Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });

/******************************************************************************************************** */
// Event delegation

//   Add smooth scrolling to links

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const link = e.target.getAttribute("href");
    // console.log("link",link);
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
  }
});

/******************************************************************************************************** */

// // Dom Traversing

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// // console.log(h1.childNodes);
// // console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// Getting the children from the parent element
// Using the method we learned
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (child) {
//   if(child === h1){
//     child.style.transform = "scale(1)";
//   }
// })

/******************************************************************************************************** */

// Tab component

tabContainer.addEventListener("click", function (e) {
  // use parent element to think about which method to Use
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  // Default the active class if not active
  // Guard clause
  if (!clicked) return;

  // Remove tabs clicked
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // activate the tab
  clicked.classList.add("operations__tab--active");
  console.log(clicked.dataset.tab);

  // Active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

/*********************************************************************************************************/

// passing arguments to events handlers

const hoverEffect = function (e) {
  // If you want to use the hover effect on the links in the navigation
  if (e.target.classList.contains("nav__link")) {
    const clicks = e.target;
    // console.log(clicks);
    const siblings = clicks.closest(".nav").querySelectorAll(".nav__link");

    const logo = clicks.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== clicks) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

// AddEventListener
// Passing Argument into handlers function
// using bind method
// When you hover over a link it applies opacity to the link
nav.addEventListener("mouseover", hoverEffect.bind(0.5));

// when you hover out of a link it applies opacity to the link
nav.addEventListener("mouseout", hoverEffect.bind(1));

/*********************************************************************************************************/
// Sticky navigation

// const coordnate = section1.getBoundingClientRect()
// console.log(coordnate);
// window.addEventListener('scroll',function() {
// if (window.scrollY > coordnate.top){
//   nav.classList.add('sticky');
// }else
// { nav.classList.remove('sticky')}
// });

/*********************************************************************************************************/
// Sticky navigation using intersection observer()

// create a function that will  be called when the navigation starts intersecting

// const obCallback = function (entries ,observer) {
//     entries.forEach(function (entry) { console.log(entry); });
// };

// const options = {
// root: null,
// trashold : 0.1
// };

// const observer = new IntersectionObserver(obCallback, options);
// observer.observe(section1);

// Dynamically  height

const navHeight = nav.getBoundingClientRect().height;

// function for intesection
const stickyNav = function (entries) {
  const [entry] = entries;
  //  console.log(entry);

  // conditioning the function to remove or add the entry
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

// Calling intersection object
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Revealing Elements Onscroll
// Using  IntersectionObserver to Each section

// function for observe section
const realSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  // Knowing which section you are currently at /condition
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  // Avoid scrolling inside the section
  observer.unobserve(entry.target);
};

// Intersection object
const sectionObserver = new IntersectionObserver(realSection, {
  root: null,
  threshold: 0.15,
});

//  Loop through each section and observe with hidden class
section.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy Loading Image
// function lazyLoadingImage
const lazyLoadingImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  // conditional the loading
   if(!entry.isIntersecting) return;

  //  Replace the src with the data-src
  entry.target.src = entry.target.dataset.src

  
// load event handler for removing the lazy loading

entry.target.addEventListener( 'load',function (e) {
  entry.target.classList.remove('lazy-img');
})
// Remove the observer
 observer.unobserve( entry.target );

};

// Apply IntersectionObserver object

const imageObserver = new IntersectionObserver(lazyLoadingImg, {
  root: null,
  threshold: 0,
  rootMargin: '400px'
});

// loop through each image with blur effect
imageObs.forEach(function (image) {
  // console.log(image);
  imageObserver.observe(image);
});

const slider = function (){

// Slider section
const dotContainer       =     document.querySelector('.dots');
const slide = document.querySelector('.slide');
// // console.log(slide);
// slide.style.transform = `scale(0.5) translateX(-1200px)`
// slide.style.overflow = 'visible';
//  Variables for current slider
let curnSlide = 0;
const maxSlide = slides.length;
// console.log(maxSlide);

// Dots functions

const createDots = function () {
  slides.forEach(function (_ , i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button  class="dots__dot" data-slide = "${i}"></button>`)

})
}
createDots()

// Active Dots functions
// const activeDots = function(slide){
//   dots.forEach( function (dot) {
//     dot.classList.remove('dots__dot--active')
//   })
  
//   document.querySelector(`.dots__dot[data-slide="${slide}"]`)
//   .classList.add('dots__dot--active');
// }

const activeDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

// Refactor slides show
// function showSlider
const moveSlider = function(slider) {
  // console.log(slider);
  slides.forEach((s, i) => (s.style.transform = `translateX(${ 100 * (i - slider)}%)`)); 
  
  
};
moveSlider(0)
activeDots(0)

// function for next slide
const nextSlide = function(){
  if (curnSlide === maxSlide - 1){
    curnSlide = 0
  }else {
    curnSlide++;
  }
  moveSlider(curnSlide)
  activeDots(curnSlide)
}

// Previous btn click
const prevSlide = function (){
  if (curnSlide === 0){
    curnSlide = maxSlide - 1
  }else {
curnSlide--;
}
moveSlider(curnSlide)
activeDots(curnSlide)
}

// Button section  addEventListener

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);



// Adding Keyboard events

document.addEventListener('keydown', function (e) {
  console.log(e);
  // Condition using ShortCircuit 
  e.key === "ArrowRight" && nextSlide();
  e.key === 'ArrowLeft' && prevSlide();
});

// Dots section addEventListener
dotContainer.addEventListener('click', function (e) {
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset
    moveSlider(slide)
    activeDots(slide)
  }
});
}
slider()