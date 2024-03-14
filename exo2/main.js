// Afficher le code couleur dans le carre cliqué

    // Cibler tout les éléments .carré
    let carres = document.querySelectorAll('.carre');
    let carreBas = document.querySelector('.carre_bas');

    // Ajouter un écouteur d'évènement sur chaque élèment portant la class carre
    carres.forEach(function(carre)
    {
        carre.addEventListener('click', function()
        {
    
            // Obtenir le style CSS d'une class carre
            let style = getComputedStyle(carre);
            let bgColor = style.backgroundColor;

            // Changer la couleur du carre bas
            carreBas.style.backgroundColor = bgColor;

            // Afficher le code couleur
            carreBas.innerText = bgColor;
        });
    });
