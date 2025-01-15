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

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
