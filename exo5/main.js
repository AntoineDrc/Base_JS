// Cible la classe dans laquelle incorporer les citations
let conteneurCitations = document.querySelector('.auteurs');
// Crée un Id pour chaque nouveau paragraphe
let id = 1;

for (let cle in quotes) {
    let valeur = quotes[cle];

    // Crée un paragraphe pour chaque citation
    let paragraphe = document.createElement('p');

    // Attribut un ID à chaque nouveau paragraphe et l'incrémente de 1 pour chaque itération 
    paragraphe.id = id;
    id++;

    // Ajoute la citation au paragraphe crée
    paragraphe.innerText = "« " + valeur + " »\n" + cle + "\n";

    // Ajoute un bouton favoris pour chaque paragraphe
    let boutonFavoris = document.createElement('button');
    boutonFavoris.innerText = "Favori";

    // Créé un écouteur d'évènement qui va ajouter la class favori à chaque click
    boutonFavoris.addEventListener("click", function () {
        paragraphe.classList.toggle('favori');

        // Ajoute au local storage
        if (paragraphe.classList.contains('favori')) {
            localStorage.setItem(paragraphe.id, 'true');
        } else {
            localStorage.removeItem(paragraphe.id,);
        }
    });

    // Chaque nouveau paragraphe devient un enfant de la class "auteurs"
    conteneurCitations.appendChild(paragraphe);
    paragraphe.appendChild(boutonFavoris);

}