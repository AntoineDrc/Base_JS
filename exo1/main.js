// Cibler l'élèment carre
const carre = document.querySelector('.carre');

// Ajouter un écouteur d'évènement pour réagir au clic
carre.addEventListener('click', function()
{
    alert(`
    class : carre
    background-color: rgba(72, 193, 152, 0.47)
    display: flex
    height: 200px
    width: 200px
    `)
});