let conteneurCitations = document.querySelector('.auteurs');

for (let cle in quotes)
{
    let valeur = quotes[cle];

    // Crée un paragraphe pour chaque citation
    let paragraphe = document.createElement('p');

    // Ajoute la citation au paragraphe crée
    paragraphe.innerText = "« " + valeur + " »\n" + cle;

    // Chaque nouveau paragraphe devient un enfant de la class "auteurs"
    conteneurCitations.appendChild(paragraphe);

}