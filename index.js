/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
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
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
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
//Llamar al botón
let mybutton = document.getElementById("btn-back-to-top");

// Cuando se baja un 20% aparece
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop > 0
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Al darle click, sube hasta arriba
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

*/
let modo=document.getElementById("modo");
let body=document.body;

modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark-theme")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor=="true") {
  body.classList.remove("day-theme")
  body.classList.add("dark-theme")
  
} else {
  body.classList.remove("dark-theme")
  body.classList.add("day-theme")
    
    
}
