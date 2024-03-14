// Cibler tout les élèments avec lesquelles travailler
let fond = document.getElementById('follow_us');
let cards = document.querySelectorAll('.card');

// Déclarer une variable qui va changer le statut du booléen
let bool = false;

// Boucle for each pour parcrourir tout les élèments de la class "cards"
cards.forEach(function(card)
{
       // Ajouter un écouteur d'évènement sur chaque élèment portant la class carre
            card.addEventListener('click', function()
            {   
                // Obtenir le style de l'arrière-plan de la carte cliquée
                let styleCard = getComputedStyle(card);

                // Passer de true à false à chaque clic
                bool = !bool;

                // Change la couleur du fond
                if(!bool)
                {
                    fond.style.backgroundImage = styleCard.backgroundImage;
                } else 
                {
                    fond.style.backgroundImage = '';
                }
            })
})