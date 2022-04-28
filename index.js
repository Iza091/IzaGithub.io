/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */
 
 const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered ?
    "scale(1)" :
    "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/*
*/
let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function () {
  let val = body.classList.toggle("dark-theme")
  localStorage.setItem("modo", val)
})

let valor = localStorage.getItem("modo")

if (valor == "true") {
  body.classList.remove("day-theme")
  body.classList.add("dark-theme")

} else {
  body.classList.remove("dark-theme")
  body.classList.add("day-theme")


}