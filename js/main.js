//Descrizione:
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome : "Roberto",
    cognome : "Martino",
    eta : 27
}
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    document.writeln(studente[key]);
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
for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i]["nome"] + studenti[i]["cognome"]);
}

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newStudent = {};


newStudent.nome = prompt("Inserisci nome");
newStudent.cognome = prompt("Inserisci cognome")
newStudent.eta = prompt("Inserisci eta")
console.log(newStudent);

studenti.push(newStudent);
console.log(studenti);



