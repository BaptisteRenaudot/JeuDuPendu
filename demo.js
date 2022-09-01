var randomWords = require('random-words');

var word = randomWords()

let p = document.createElement("h1")
let contenu_p = document.createTextNode(word)

p.appendChild(contenu_p)

p.classList.add("demo")

console.log(p);

let afficher = document.getElementsByTagName("body")[0]
afficher.appendChild(p)
