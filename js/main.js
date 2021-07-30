//Descrizione:
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome : "Roberto",
    cognome : "Martino",
    eta : 27
}
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var contenuto in studente) {
    document.writeln(studente[contenuto]);
}
//Creare un array di oggetti di studenti.
var studenti = [
    {
        nome : "Alfredo",
        cognome : "Lamborghini",
        eta : 29
    },
    {
        nome : "Luana",
        cognome : "Ferrari",
        eta : 39
    },
    {
        nome : "Steven",
        cognome : "Fiat",
        eta : 89
    }
];
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.