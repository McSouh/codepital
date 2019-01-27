import { Doctor } from "./partials/_doctor.js";
import { Patient } from "./partials/_patient.js";
import { Lieux } from "./partials/_lieux.js";
import { chat } from "./partials/_chat.js";

// PERSONNAGE
let doctor = new Doctor('Debugger', 0, [chat]);
let patient1 = new Patient('Marcus', 'mal indenté', 100, [], 'malade');
let patient2 = new Patient('Optimus', 'unsave', 200, [], 'malade');
let patient3 = new Patient('Sangoku', '404', 80, [], 'malade');
let patient4 = new Patient('DarthVader', 'azmatique', 110, [], 'malade');
let patient5 = new Patient('Semicolon', 'syntaxError', 60, [], 'malade');



// Initialisation de la salle d'attente
Lieux.salleDAttente = [patient1, patient2, patient3, patient4, patient5];

// Processus pour se soigner
let consultation = patient => {
    doctor.patientIn(patient);
    doctor.diagnostique(patient);
    doctor.patientOut(patient);
    patient.goTo(Lieux.salleDAttente, Lieux.pharmacie);
    patient.takeCare();
};

while(Lieux.salleDAttente.length > 0){
        console.log('Salle d\'attente: ', Lieux.salleDAttente);
        console.log("______________________");
        chat.miauler();
        consultation(Lieux.salleDAttente[0]);
        console.log("______________________");
};

console.log('Le docteur s\'est fait : ', doctor.argent, ' euros, aujourd\'hui.');


