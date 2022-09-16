/** Récupération du mot aléatoire */
let demo = document.querySelector(".demo");

let motSecret = demo.innerHTML;

console.log(motSecret);
/** Fin de la récupération du mot aléatoire */

/** Séparation des lettres */
let tabMot = motSecret.split("");

tabMot.forEach((e) => {
  let div = document.createElement("div");

  div.classList.add("dark:text-white");

  let contenu_div = document.createTextNode("_");

  div.appendChild(contenu_div);

  div.classList.add("motSecret");

  console.log(div);

  let afficher = document.querySelector(".box");
  afficher.appendChild(div);
});
/** Fin de la séparation des lettres */

/** Récupération de la valeur de l'input + affichage d'une lettre si trouvée par l'user + Compte le nombre de réponses fausses + Création d'une progressBar*/
let inputUserValue;
let long = 0;
let vie = 0;
let nbvie = 0;
let longueur = 0;
let divise = 100 / tabMot.length;
let longProgress = divise;
let once = [];
let count = 0;
let nbFewLetter = 0;
let lettrePlusieursFoisTab = [];
let lettre = 0;
let lettreTrouvee = 0;
let vierestante = 7;

function validerLetter() {
  let inputUser = document.querySelector(".inputLetter");
  let inputUserValue = inputUser.value.toLowerCase();

  let tabMot = motSecret.split("");

  console.log(longProgress);

  let divUnderscore = document.querySelectorAll(".motSecret");
  let vie = 0;

  let count = tabMot.filter((x) => x == inputUserValue).length;

  let count2 = lettrePlusieursFoisTab.filter((x) => x == inputUserValue).length;

  once.push(inputUserValue);

  for (let i = 0; i < divUnderscore.length; i++) {
    const e = divUnderscore[i];

    if (inputUserValue === tabMot[i]) {
      e.innerText = tabMot[i];

      if (count === 1 && count2 === 0) {
        document.querySelector(".progressBar").style.width = longProgress + "%";

        longProgress = longProgress + divise;

        vie++;

        lettreTrouvee++;

        lettrePlusieursFoisTab.push(inputUserValue);
      } else if (count > 1 && count2 === 0) {
        document.querySelector(".progressBar").style.width = longProgress + "%";

        longProgress = longProgress + divise;

        vie++;

        lettreTrouvee++;

        lettrePlusieursFoisTab.push(inputUserValue);
      }
    }
  }

  console.log("Lettre trouvée : " + lettreTrouvee);

  if (count > 1) {
    console.log("Plusieurs fois la lettre " + inputUserValue);
  }

  console.log(count);

  console.log("nbFewLetter " + nbFewLetter);

  if (vie === 0) {
    nbvie++;
    vierestante--;
    vie++;

    if (nbvie <= 7) {
      let img = document.getElementById("img" + vierestante);
      img.src = "coeur-gris.svg";
    }
  }

  console.log(vierestante);

  console.log("Nombre de lettres fausses : " + nbvie);

  inputUser.value = "";

  if (nbvie > 7) {
    document.querySelector(".contener").style.display = "none";
    document.querySelector(".contener-loosers").removeAttribute("style");
    document.querySelector(".p-loose").innerHTML =
      "Oh no! Unfortunately you didn't find the secret word in less than 7 answers. You had to find the word \"" +
      motSecret +
      "\". Try again, I'm sure you'll succeed 🥵";
    document
      .querySelector(".btn-reload-loose")
      .addEventListener("click", reload);
  } else if (lettreTrouvee === motSecret.length) {
    document.querySelector(".contener").style.display = "none";
    document.querySelector(".contener-win").removeAttribute("style");
    document.querySelector(".p-win").innerHTML =
      'Well done ! The word was "' +
      motSecret +
      '". You found it in ' +
      nbvie +
      " tries, so you won. If you want to try again, you can click on the button below, unless you are a wimp 🥶";
    document.querySelector(".btn-reload").addEventListener("click", reload);
  }
}

let buttonOk = document.querySelector(".okLetter");

buttonOk.addEventListener("click", validerLetter);
/** Fin de la récupération + Affichage + Nombres de réponses fausses + ProgressBar*/

//** Création de la fonction pour reload la page */
function reload() {
  window.location.reload();
}
/** Fin de la fonction */

/** Affichage des vies */
for (let i = 0; i < vierestante; i++) {
  var coeur = document.querySelector(".pimg");
  var svg = document.createElement("img");
  svg.src = "coeur-rempli.svg";
  svg.classList.add("ionicon");
  svg.setAttribute("id", "img" + i);
  coeur.appendChild(svg);
}

/** Fin de l'affichage des vies */
