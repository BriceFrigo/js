// let link = document.getElementById("google");
// let link = document.getElementsByClassName("google");
// let link = document.getElementsByTagName(".a");
let link = document.querySelector("#google");
let kana = document.querySelector("body")
let link2 = document.querySelectorAll('a')
// let link = document.querySelectorAll('a')

console.log(link);

// -- accéder au lien vers lequel pointe la balise
console.log(link.href);
// -- accéder à l'ID
console.log(link.id);
// -- accéder à la classe
console.log(link.className);
// -- accéder au au texte/contenue de la balise
console.log(link.textContent);
// -- modifier le contenu
link.textContent = "Aller chez EDEN Schooooooooool";

// -------------------------------
// -- créer un nouvel élément
let span = document.createElement('span');
// -- lui donner  un ID
span.id ="unSpan";
// -- lui ajouter du contenu
span.textContent = " Friday Yay !";
span.style.backgroundColor = " Yellow";
// -- l'insérer dans le HTML
link.appendChild(span);


/* -------------------------------
           EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h2> ayant un contenu de votre choix :
"A la niche !".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.

-------------------------------- */

let a = document.createElement("a");
let h2 = document.createElement('h2');
a.textContent = "A la niche !";
a.href = "kana.fr";
a.style.color = "red";
a.style.textDecoration = 'none';
document.body.appendChild(h2).appendChild(a);