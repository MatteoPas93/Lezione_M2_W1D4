/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// I principali datatype in JavaScript sono: Stringhe, Numeri, Booleane, Undefined e Null.

// - Stringhe: le stringhe sono delle successioni di informazioni di tipo testuale delimitate (quindi prima e dopo del testo) da simboli come ",` e '.
// - Numeri: possono essere compresi numeri tra -(253 - 1) e +(253 - 1), a differenza di altri linguaggi javaScript non ha dati diversi per numeri interi o decimali.
// - Booleane: questo tipo di datatype stabilisce se una variabile è vera o falsa. 
// - Undefined: è un errore che indica una variabile vuota o inesistente.
// - Null: uitilizzato per annullare una variabile.


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// - Un oggetto è una variabile contenente al suo interno diverse proprietà con i rispettivi valori.

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoNumero = 12
let secondoNumero = 20
console.log(primoNumero)
console.log(secondoNumero)
let somma = primoNumero + secondoNumero
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Matteo"
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4
console.log(y)

let risultato = y - x
console.log(risultato)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
console.log(name1)

let name2 = "John"
console.log(name2)

console.log(name1 === name2)

console.log(name1 === name2.toLowerCase("John"))