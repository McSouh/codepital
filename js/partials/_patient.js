import { Humain } from "./_humain.js";
import { Lieux } from "./_lieux.js";

let traitement = {
    "ctrl+maj+f": 60,
    "saveOnFocusChange": 100,
    "CheckLinkRelation": 35,
    "Ventoline": 40,
    "f12+doc": 20,
};

export class Patient extends Humain{
    constructor(nom, maladie, argent, poche, etatSante){
        super(nom, argent);
        this.maladie = maladie;
        this.poche = poche;
        this.etatSante = etatSante;
        // Se déplacer
        this.goTo = function(pointA,pointB){
            pointA.splice(pointA.indexOf(this), 1);
            pointB.push(this);
            console.log(this.nom, ' se déplace vers ', pointB.name);
        };
        // Achat (si argent suffisant) du traitement sinon, mort et cimetiere
        this.takeCare = function(){
            if(Lieux.pharmacie.indexOf(this) != -1){
                if(this.argent >= traitement[this.traitement]){
                    console.log(this.nom, ' a assez d\'argent pour son traitement !');
                    this.etatSante = "Bonne santé";
                    this.argent -= traitement[this.traitement];
                    this.goTo(Lieux.pharmacie, Lieux.rue);
                } else {
                    console.log(this.nom, ' n\'a pas assez d\'argent pour son traitement...');
                    this.etatSante = "Mort";
                    this.goTo(Lieux.pharmacie, Lieux.cimetiere);
                }
                console.log('L\'état du patient est: "', this.etatSante,'"');
            } else {
                console.log("Le patient n'est pas à la Pharmacie.");
            }
        };
    }
}