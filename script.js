// les donner-----------------------------------------------------
let presentation = document.getElementById("texte-presentation");
// console.log(presentation);

let imageIntroduction = document.getElementById("image-intro1");
// console.log(imageIntroduction);
let threshold1 = 650;
let threshold2 = 1417;
let imageDescprition = document.getElementById("image-descprition");
// console.log(imageDescprition);

let titreMission = document.getElementById("texte-mission1");
// console.log(titreMission);

let titreValeur = document.getElementById("titre-valeur");
// console.log(titreValeur);
let titreActivite = document.getElementById("titre-Activite");
// console.log(titreActivite);

let titreMembre = document.getElementById("titre-membre");
console.log(titreMembre);
// -------------------------------------------------------------------------

// animation lorsque le page s'ouvert--------------------------

window.addEventListener("DOMContentLoaded", () => {
  presentation.style.opacity = "2";
  presentation.style.transform = "translateX(0)";
  presentation.style.color = "white";
});

window.addEventListener("DOMContentLoaded", () => {
  titreMission.style.opacity = "2";
  titreMission.style.transform = "translateX(0)";
  titreMission.style.color = "white";
});
window.addEventListener("DOMContentLoaded", () => {
  titreValeur.style.opacity = "2";
  titreValeur.style.transform = "translateX(0)";
  titreValeur.style.color = "white";
});

window.addEventListener("DOMContentLoaded", () => {
  titreActivite.style.opacity = "2";
  titreActivite.style.transform = "translateX(0)";
  titreActivite.style.color = "white";
});

window.addEventListener("DOMContentLoaded", () => {
  titreMembre.style.opacity = "2";
  titreMembre.style.transform = "translateX(0)";
  titreMembre.style.color = "white";
});

function animateElement(element) {
  element.style.opacity = "2";
  element.style.transform = "translateX(0)";
  element.style.color = "white";
}
window.addEventListener("DOMContentLoaded", () => {
  animateElement(titreMission);
  animateElement(presentation);

  animateElement(titreValeur);
  animateElement(titreActivite);
  animateElement(titreMembre);
});

// function animateElements() {
//   animateElement(presentation);
//   animateElement(titreMission);
//   animateElement(titreValeur);
//   animateElement(titreActivite);
//   animateElement(titreMembre);
// }

// function animateElement(element) {
//   element.style.opacity = "2";
//   element.style.transform = "translateX(0)";
//   element.style.color = "white";
// }

// document.addEventListener("DOMContentLoaded", animateElements);

// -------------------------------------------------------------

// animation lorsque on scroll----------------------------------
window.addEventListener("scroll", () => {
  //   console.log(e);
  if (window.scrollY > threshold1) {
    imageIntroduction.style.transform = "translateX(O)";
    imageIntroduction.style.opacity = "2";
  }
});

window.addEventListener("scroll", () => {
  //   console.log(e);
  if (window.scrollY > threshold2) {
    imageDescprition.style.transform = "translateX(O)";
    imageDescprition.style.opacity = "2";
  }
});

// ------------------------------------------------------------------

window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  console.log(
    "La position de défilement verticale est maintenant :",
    scrollPosition
  );
});
