/* -----------------------------------------
  Años UGB.
 ---------------------------------------- */

 $(document).ready(function(){
  var nacimiento=moment("2017-01-16");
  var hoy=moment();
  var anios=hoy.diff(nacimiento,"years");
  $("#res").text(anios);
});
 

/* -----------------------------------------
  Barra.
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

const testimWrapper = document.querySelector(".testim-wrapper");
const testimBtnPrev = document.querySelector(".testim-btn-prev");
const testimBtnNext = document.querySelector(".testim-btn-next");
const testimItem = document.querySelectorAll(".testim-item");
let testimWidth = parseFloat(getComputedStyle(document.querySelector(".testim-container")).getPropertyValue("--testim-width"));
let testimIndex = 0;

// Array de objetos con la información de cada testimonio
const testimonios = [  {    imagen: "images/t1.png",    nombre: "Nayeli Pineda | Técnica en sistemas y redes informáticas",    texto: "Es un buen compañero, responsable, trabajador y honesto, es dedicado y apasionado a su carrera y a la programación pero más que todo a la programación, sabe trabajar bajo presión",  },  {    imagen: "images/t4.png",    nombre: "Jackson Borja | Artista visual para la expresión plástica.",    texto: "Es muy apasionado cuando se trata de trabajar.",  },  {    imagen: "images/t5.png",    nombre: "Cristina Rodríguez | Ingeniera en sistemas y redes informáticas.",    texto: "Brinda siempre con lo requerido y cumple todos los requisitos asignados.",  },];


// Función para crear los elementos HTML de los testimonios
function crearTestimonio(testimonio) {
  const testimItem = document.createElement("div");
  testimItem.classList.add("testim-item");

  // const img = document.createElement("img");
  // img.src = testimonio.imagen;
  // img.id = `testim-image-${testimonios.indexOf(testimonio) + 1}`;
  // testimItem.appendChild(img);

  const h3 = document.createElement("h3");
  h3.textContent = testimonio.nombre;
  testimItem.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = testimonio.texto;
  testimItem.appendChild(p);

  const testimContainer = document.createElement("div");
  testimContainer.classList.add("testim-container");
  testimContainer.appendChild(testimItem);

  testimWrapper.appendChild(testimContainer);
}

// Crear los elementos HTML de los testimonios usando un bucle
for (const testimonio of testimonios) {
  crearTestimonio(testimonio);
}

function showTestim(index) {
  const testimItems = document.querySelectorAll(".testim-item");
  
  if (index < 0) {
    testimIndex = testimItems.length - 1;
  }
  if (index >= testimItems.length) {
    testimIndex = 0;
  }
  testimWrapper.style.transform = `translateX(-${testimWidth * testimIndex}px)`;
}

showTestim(testimIndex);

// testimBtnPrev.addEventListener("click", () => {
//   testimIndex--;
//   showTestim(testimIndex);
// });

// testimBtnNext.addEventListener("click", () => {
//   testimIndex++;
//   showTestim(testimIndex);
// });

// setInterval(() => {
//   testimIndex++;
//   showTestim(testimIndex);
// }, 5000);

/* -----------------------------------------
    Modo
 ---------------------------------------- */

