// Cibler tout les éléments avec lesqueles travailler
let carres = document.querySelectorAll(".carre");

// Déclarer une variable qui va changer le statut du booléen
let bool = false;

// Boucle for each pour parcrourir tout les élèments de la class "carre"
carres.forEach(function (carre) {
  // Ajouter un écouteur d'évènement sur chaque élèment portant la class carre
  carre.addEventListener("click", function () {
    // Passer de true à false à chaque clic
    bool = !bool;

    // Changer la couleur du carre
    if (!bool) {
      carre.style.backgroundColor = "rgba(236, 8, 8, 0.47)";
    } else {
      carre.style.backgroundColor = "rgba(131, 188, 38, 0.47)";
    }

    // Rotation du carre
    if (!bool) {
      carre.style.transform = "rotate(360deg) scale(0.9)";
    } else {
      carre.style.transform = "rotate(0deg) scale(1)";
    }
  });
});
