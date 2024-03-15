// Cibler tout les élèments avec lesquelles travailler
let fond = document.getElementById('follow_us');
let cards = document.querySelectorAll('.card');

// Boucle for each pour parcrourir tout les élèments de la class "cards"
cards.forEach(function(card)
{
       // Ajouter un écouteur d'évènement sur chaque élèment portant la class carre
            card.addEventListener('click', function()
            {   
                // Cible la balise span
                let span = card.querySelector('span')
                
                // Récupère le background gadient
                let styleCard = getComputedStyle(card);

                // Vérifie si la classe "active" est présente ou non
                if (card.classList.contains('active'))
                {
                    card.classList.remove('active');
                } else 
                // Si c'est le cas, appliquer le style css pour "active"
                {
                    card.classList.add('active');
                }

                // Appliquer la couleur de fond de la card et le nom du réseau social lorsque "active"
                if (card.classList.contains('active'))
                {   
                    

                    fond.style.backgroundImage = styleCard.backgroundImage;
                    span.style.opacity = 1;
                } else 
                {
                    fond.style.backgroundImage = '';
                    span.style.opacity = 0;
                }
            });
});