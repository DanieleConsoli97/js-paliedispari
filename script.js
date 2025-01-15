// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let parolaInserita = prompt("Insersci una parola")

function parolaPalidroma ( parola ){
    let parolaReverse="";
    for ( i = parola.length-1 ; i >= 0 ; i--) {
        parolaReverse +=  parola.charAt(i)

    }
   if ( parola.toLowerCase() === parolaReverse.toLowerCase() ){
    return true
   }else{
    return false
   }
}
if (parolaPalidroma ( parolaInserita)==true ){
    console.log(`La parola ${parolaInserita} è palidroma`)
   }else{
    console.log(`La parola ${parolaInserita} non è palidroma`)
   }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let scelta = prompt("Inserisci la tua scelta Pari o dispari").toLowerCase();
let numeroUtente =parseInt (prompt(`Scegli un numero da 1 a 5`));
let numeroComputer = randomNumber();
let risultato;
function randomNumber() {
  generaNumeroRandom = Math.round(Math.random() * (5 - 1) + 1);
  return generaNumeroRandom;
}
function pariODispari(num1, num2) {
  let somma = num1 + num2;
  if (somma % 2 === 0) {
   risultato = `pari`;
  } else {
    risultato = `dispari`;
  }
}
pariODispari( numeroUtente , numeroComputer )
if (risultato===scelta){
    console.log(`Il vincitore è il giocatore`)
} else{
    console.log(`Il vincitore è il computer`)
}


