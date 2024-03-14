// Cibler l'élèment carre
const carre = document.querySelector('.carre');

// Ajouter un écouteur d'évènement pour réagir au clic
carre.addEventListener('click', function()
{
    // Obtenir le style CSS de l'élèment
    let style = getComputedStyle(carre);

    let classe = carre.className;
    let bcColor = style.backgroundColor;
    let color = style.color;
    let width = style.width;
    let height = style.height;
    let flex = style.display;
    let fontFamily = style.fontFamily;

    alert
    (`
        Classe : ${classe}\n
        Background color : ${bcColor}\n
        Color : ${color}\n
        Height : ${height}\n
        Width : ${width}\n
        Display : ${flex}\n
        Font Family : ${fontFamily}

    `)
});