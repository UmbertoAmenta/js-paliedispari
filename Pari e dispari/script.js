/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


// Far scegliere all'utente tra pari e dispari
// Chiedere un numero da 1 e 5
// Generare un numero randomico da 1 e 5 tramite funzione
// Sommare i 2 numeri
// Controllare se la somma è un numero pari o dispari (tramite funzione)
// Dichiarare il vincitore


const evenOrOdds = confirm("Scegli tra pari (OK) e dispari (Annulla)")
if (evenOrOdds === true) {
    alert("Hai scelto pari")
} else {
    alert("Hai scelto dispari")
}
const userNum = Number(prompt("Ora scegli un numero intero compreso tra 1 e 5 (inclusi)"))
console.log(evenOrOdds)
console.log(userNum)

function getRandomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

const cpuNum = getRandomNumber(1,5)
console.log(cpuNum)

function isSumEven (num1, num2) {
    let isEven = false
    const sum = num1 + num2
    if (sum % 2 === 0) {
        isEven = true
    } else {
        isEven = false
    }
    return isEven
}

const isEven = isSumEven(userNum, cpuNum)
console.log(isEven)

if (evenOrOdds === isEven) {
    alert("Complimenti, hai vinto")
} else {
    alert("Ritenta, avrai più fortuna la prossima volta, forse")
}