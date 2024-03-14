// Afficher le code couleur dans le carre cliqué

    // Ajouter un écouteur d'évènement pour réagir au clic
    carre.addEventListener('click', function()
    {

        // Cibler tout les éléments .carré
        const styleCarre=[];

        // Obtenir le style CSS d'une class carre
        let style = getComputedStyle(carre);
            let bcColor = style.backgroundColor;
    });

    