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


/** Récupération de la valeur de l'input + affichage d'une lettre si trouvée par l'user + Compte le nombre de réponses fausses*/
let inputUserValue
let long = 0
let vie = 0
let nbvie = 0

function validerLetter() {
    let inputUser = document.querySelector(".inputLetter")
    let inputUserValue = inputUser.value

    let tabMot = motSecret.split('')
    let divUnderscore = document.querySelectorAll(".motSecret")
    let vie = 0

    for (let i = 0; i < divUnderscore.length; i++) {
        const e = divUnderscore[i];

        if (inputUserValue === tabMot[i]) {
            e.innerText = (tabMot[i])
            vie++
        }
    }

    if (vie === 0) {
        nbvie++
        vie++
    }

    console.log("Nombre de lettres fausses : " + nbvie);

    inputUser.value = "";
}

let buttonOk = document.querySelector(".okLetter")

buttonOk.addEventListener("click", validerLetter)
/** Fin de la récupération + affichage + nombres de réponses fausses*/
