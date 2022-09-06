/* Fonction getsPosts qui :
    Récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
    Récupères les articles du premier utilisateur depuis https://jsonplaceholder.typicode.com/comments?userId={ID}
    Renvois les articles au format json
*/



// let get = function (url, success) {
//     let xhr = new window.XMLHttpRequest()

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             success(xhr.responseText)
//         }
//     }

//     xhr.open('GET', url, true)
//     xhr.send()
// }

// let getPosts = function () {
//     get('https://hp-api.herokuapp.com/api/characters', function (response) {
//         let users = JSON.parse(response)
//         users.forEach(e => {
//             let p = document.createElement("p")
//             let contenu_p = document.createTextNode(e.name)

//             p.appendChild(contenu_p)

//             p.classList.add("demo")

//             console.log(p);

//             let afficher = document.getElementsByTagName("body")[0]
//             afficher.appendChild(p)
//         });

//     })
// }

// console.log(getPosts());


// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });






/** Récupération du mot aléatoire */
let demo = document.querySelector(".demo")

let motSecret = demo.innerHTML

console.log(motSecret);
/** Fin de la récupération du mot aléatoire */


/** Séparation des lettres */
let tabMot = motSecret.split('')

tabMot.forEach(e => {
    let div = document.createElement("div")
    let contenu_div = document.createTextNode("_")

    div.appendChild(contenu_div)

    div.classList.add("motSecret")

    console.log(div);

    let afficher = document.querySelector(".box")
    afficher.appendChild(div)
});
/** Fin de la séparation des lettres */

/** Changement des underscores en mot */
// function change() {
//     let tabMot = motSecret.split('')
//     let divUnderscore = document.querySelectorAll(".motSecret")

//     for (let i = 0; i < divUnderscore.length; i++) {
//         const e = divUnderscore[i];

//         e.innerText = (tabMot[i])
//     }


// }

// setTimeout(change, 1000)
/** Fin du changement des underscores en lettres */


/** Récupération de la valeur de l'input + affichage d'une lettre si trouvée par l'user + Compte le nombre de réponses fausses + Création d'une progressBar*/
let inputUserValue
let long = 0
let vie = 0
let nbvie = 0
let longueur = 0
let divise = 100 / tabMot.length
let longProgress = divise
let once = []
let count = 0
let nbFewLetter = 0
let lettrePlusieursFoisTab = []
let lettre = 0
let lettreTrouvee = 0

function validerLetter() {
    let inputUser = document.querySelector(".inputLetter")
    let inputUserValue = inputUser.value

    let tabMot = motSecret.split('')


    console.log(longProgress);

    let divUnderscore = document.querySelectorAll(".motSecret")
    let vie = 0

    let count = tabMot.filter(x => x == inputUserValue).length

    let count2 = lettrePlusieursFoisTab.filter(x => x == inputUserValue).length

    once.push(inputUserValue)

    for (let i = 0; i < divUnderscore.length; i++) {
        const e = divUnderscore[i];

        if (inputUserValue === tabMot[i]) {
            e.innerText = (tabMot[i])

            if (count === 1 && count2 === 0) {
                document.querySelector(".progressBar").style.width = longProgress + "%";

                longProgress = longProgress + divise

                vie++

                lettreTrouvee++

                lettrePlusieursFoisTab.push(inputUserValue)
            } else if (count > 1 && count2 === 0) {
                document.querySelector(".progressBar").style.width = longProgress + "%";

                longProgress = longProgress + divise

                vie++

                lettreTrouvee++

                lettrePlusieursFoisTab.push(inputUserValue)
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
        nbvie++
        vie++
    }

    console.log("Nombre de lettres fausses : " + nbvie);

    inputUser.value = "";

    if (nbvie > 7) {
        document.querySelector(".contener").style.display = "none";
        document.querySelector(".contener-loosers").removeAttribute("style")
        document.querySelector(".p-loose").innerHTML = "Oh no! Unfortunately you didn't find the secret word in less than 7 wrong answers. You had to find the word \"" + motSecret + "\". Try again, I'm sure you'll succeed 🥵"
        document.querySelector(".btn-reload-loose").addEventListener("click", reload)
    } else if (lettreTrouvee === motSecret.length) {
        document.querySelector(".contener").style.display = "none";
        document.querySelector(".contener-win").removeAttribute("style")
        document.querySelector(".p-win").innerHTML = "Well done ! The word was \"" + motSecret + "\". You found it in " + nbvie + " tries, so you won. If you want to try again, you can click on the button below, unless you are a wimp 🥶"
        document.querySelector(".btn-reload").addEventListener("click", reload)
    }
}

let buttonOk = document.querySelector(".okLetter")

buttonOk.addEventListener("click", validerLetter)
/** Fin de la récupération + Affichage + Nombres de réponses fausses + ProgressBar*/

//** Création de la fonction pour reload la page */
function reload() {
    window.location.reload()
}
/** Fin de la fonction */