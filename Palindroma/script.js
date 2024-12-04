/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


// Chiedere all'utente una parola
// Creare il termine speculare
// Confrontare i due dati
// Se sono uguali, la parola inserita è palindroma


let word = prompt("inserisci una parola")
console.log(word)

/*
let reverseWord = ""
for (let i = word.length -1; i >= 0; i--) {
    reverseWord += word[i]
}
console.log(reverseWord)

let isSpecular = false
if (word === reverseWord) {
    isSpecular = true
}
console.log(isSpecular)
// */


// Creare la funzione

function isPalindrome (word) {
    let reverseWord = ""
    for (let i = word.length -1; i >= 0; i--) {
        reverseWord += word[i]
    }
    // console.log(reverseWord)
    
    let isSpecular = false
    if (word === reverseWord) {
        isSpecular = true
    }
    // console.log(isSpecular)
    return isSpecular
}

console.log(isPalindrome(word))
const isTrue = isPalindrome (word)
if (isTrue === true) {
    alert("La parola inserita è palindroma")
} else {
    alert("La parola inserita non è palindroma")
}
