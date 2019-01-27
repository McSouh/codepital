import { Humain } from "./_humain.js";
import { Lieux } from "./_lieux.js";

let diagnostique = {
    "mal indenté" : "ctrl+maj+f",
    "unsave" : "saveOnFocusChange",
    "404" : "CheckLinkRelation",
    "azmatique" : "Ventoline",
    "syntaxError" : "f12+doc",
};

export class Doctor extends Humain {
    constructor(nom, argent, cabinet){
        super(nom, argent)
        this.cabinet = cabinet;
        // Analyse maladie, ajout traitement, transaction
        this.diagnostique = function(patient){
            console.log('Vous êtes ', patient.maladie, '.');
            patient.traitement = diagnostique[patient.maladie];
            console.log('Votre traitement sera: ', patient.traitement, '.');
            console.log('Cela fera 50 euros.');
            patient.argent -= 50;
            this.argent += 50;
        };
        // Faire rentrer le patient
        this.patientIn = function(patient){
            this.cabinet.push(patient);
            Lieux.salleDAttente.splice(Lieux.salleDAttente.indexOf(patient), 1)
            console.log(patient.nom, ' rentre dans le cabinet.');
        };
        // Faire sortir le patient
        this.patientOut = function(patient){
            this.cabinet.pop();
            Lieux.salleDAttente.push(patient)
            console.log(patient.nom, ' sort du cabinet.');
        };
    }
}