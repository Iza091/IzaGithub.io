/* -----------------------------------------
  Años UGB
 ---------------------------------------- */

 $(document).ready(function(){
  var nacimiento=moment("2017-01-16");
  var hoy=moment();
  var anios=hoy.diff(nacimiento,"years");
  $("#res").text(anios);
});
 

/* -----------------------------------------
  Barra
 ---------------------------------------- */
 const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

const backToTopButton = document.querySelector('.back-to-top');
let isBackToTopRendered = false;

const alterStyles = () => {
  backToTopButton.style.visibility = isBackToTopRendered ? 'visible' : 'hidden';
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered ? 'scale(1)' : 'scale(0)';
};

const handleScroll = () => {
  isBackToTopRendered = window.scrollY > 700;
  alterStyles(isBackToTopRendered);
};

window.addEventListener('keydown', handleFirstTab);
window.addEventListener('scroll', handleScroll);

/* -----------------------------------------
  Testimonios
 ---------------------------------------- */
const testimContent = [...document.getElementById("testim-content").children];
const testimDots = [...document.getElementById("testim-dots").children];
const testimImages = [...document.getElementById("testim-images").children];
let currentSlide = 0;
let currentActive = 0;
const testimSpeed = 5000;
let testimTimer;

function playSlide(slide) {
  for (const [i, content] of testimContent.entries()) {
    content.classList.remove("active");
    content.classList.remove("inactive");
    testimDots[i].classList.remove("active");
  }

  for (const [i, image] of testimImages.entries()) {
    image.classList.remove("active");
  }

  if (slide < 0) {
    slide = currentSlide = testimContent.length - 1;
  }

  if (slide > testimContent.length - 1) {
    slide = currentSlide = 0;
  }

  if (currentActive !== currentSlide) {
    testimContent[currentActive].classList.add("inactive");
  }

  testimContent[slide].classList.add("active");
  testimDots[slide].classList.add("active");
  testimImages[slide].classList.add("active");

  currentActive = currentSlide;

  clearTimeout(testimTimer);
  testimTimer = setTimeout(() => {
    playSlide(currentSlide += 1);
  }, testimSpeed);
}

playSlide(currentSlide);

for (const [i, dot] of testimDots.entries()) {
  dot.addEventListener("click", () => {
    playSlide(i);
  });
}

 // Function to initialize the slideshow
 function initTestim() {
   testimContent[0].classList.add("active");
   testimDots[0].classList.add("active");
   testimImages[0].classList.add("active");
 
   playSlide(currentSlide);
 
   for (const [i, dot] of testimDots.entries()) {
     dot.addEventListener("click", () => {
       playSlide(i);
       currentSlide = i;
     });
   }
 }
 
 // Initialize the slideshow
 initTestim();
 
/* -----------------------------------------
    Modo
 ---------------------------------------- */

