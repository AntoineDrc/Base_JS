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

                // Arrondir les bords
                if(!bool)
                {
                    card.style.borderRadius = '20px';
                } else 
                {
                    card.style.borderRadius = '';
                }

                // Appliquer une ombre
                if(!bool)
                {
                    card.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px';
                } else 
                {
                    card.style.boxShadow = '';
                }

                // Le nom du réseau social apparait

                // On récupère le nom du réseau dans l'id
                let nomReseau = card.getAttribute('id');

                // Création d'un enfant "span" pour afficher le nom du réseau
                let nomElement = document.createElement('span');

                // On ajoute la span créé comment enfant le la class "card"
                card.appendChild(nomElement);


                if (!bool)
                {
                    nomElement.textContent = nomReseau;
                } else
                {
                    if (nomElement)
                    {
                        card.removeChild(nomElement);
                    }
                }
            });
});