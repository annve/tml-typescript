/* protected, method overriding */

class Werknemer{
    constructor(public naam: string, protected _loon: number = 1234){
        // protected => accessible in containing class and in subclasses
    }
    verhoogLoon(bedrag){
        this._loon += bedrag;
    }
    get loon(){
        return this._loon;
    }
}

class Ontwikkelaar extends Werknemer{
    // method overriding:
    // in subklasse methode uit basisklasse (met zelfde signatuur) overschrijven
    get loon(){
        return this._loon + 100;
    }
}

let werknemer: Werknemer = new Werknemer("Joske", 2000);
console.log("Het startloon van ", werknemer.naam, " bedraagt ", werknemer.loon)
// werknemer._loon += 100;  // compileerfout; want _loon is protected
werknemer.verhoogLoon(100);
console.log("Het loon van ", werknemer.naam, " bedraagt ", werknemer.loon, " na loonsverhoging")

let ontwikkelaar: Ontwikkelaar = new Ontwikkelaar("Jeanne", 2500);
console.log("Het startloon van ", ontwikkelaar.naam, " bedraagt ", ontwikkelaar.loon)