/* interface */
/* een interface is een opsomming van velden en methodes
 die per definitie abstract en public zijn */
interface Registreerbaar {
    id: string;
    registratieDatum: Date;
    contractnr?: string; // door een vraagteken achter de naam van een prop te schrijven,
    // geef je aan dat die prop optioneel is
    registreer(): void;
}

// een niet-abstracte klasse die een interface implementeert moet 
// alle velden en methode uit de interface bezitten
class LaatsteWilsbeschikking implements Registreerbaar {
    registratieDatum: Date = new Date();
    constructor(public id: string, public voornaam: string, public naam: string,
        public crematie: boolean, public plechtigheid: string, public rustplaats: string) { }
    registreer(): void {
        // output om didactische reden ;-)
        console.log("registratie van de laatstewilsbeschikking van %s %s", this.voornaam, this.naam);
        console.log("(id: %s, na de %s volgt een %s.  Laatste rustplaats: %s)",
            this.id, this.plechtigheid, this.verwerking, this.rustplaats);
    }
    get verwerking(): string {
        return this.crematie ? "crematie" : "begrafenis";
    }

}

class ZonnepanelenInstallatie implements Registreerbaar {
    private static teller: number = 0;
    id: string;
    registratieDatum: Date = new Date();
    constructor(public aantalPanelen: number, public adres: string) {
        ZonnepanelenInstallatie.teller++;
        this.id = "ZP" + ZonnepanelenInstallatie.teller;
    }
    registreer(): void {
        // output om didactische reden ;-)
        console.log("Wij hebben de aanvraag tot registratie van %s zonnepanelen op het adres %s goed ontvangen.",
            this.aantalPanelen, this.adres);
        console.log("Vermeld bij elke communicatie referentienr %s aub", this.id);
    }
}

class AdresWijziging implements Registreerbaar {
    id: string;
    registratieDatum: Date;
    constructor(public rijksregisternr: string, public oudAdres: string,
        public nieuwAdres: string, dag: number, maand: number, jaar: number) {
        this.registratieDatum = new Date(jaar, maand-1, dag);
        console.log(this.registratieDatum)
        this.id = Math.floor(Math.random() * 10000000).toString();
    }
    registreer(): void {
        // output om didactische reden ;-)
        console.log("Op %s is de persoon met rijksregisternr %s verhuisd van %s naar %s",
            this.registratieDatum.toLocaleDateString("nl-BE"), this.rijksregisternr,
            this.oudAdres, this.nieuwAdres);
    }
}

let registraties: Registreerbaar[] = new Array<Registreerbaar>();
registraties.push(new LaatsteWilsbeschikking("1234567", "Pierre", "Dooie", false, "RK woord- en communiedienst", "familiegraf op het Schoonselhof"));
registraties.push(new ZonnepanelenInstallatie(9, "Zonneplein 123, Zonnewende"));
registraties.push(new AdresWijziging("89122839857", "Gemeenteplein 13", "Nieuwstraat 56A", 31, 1, 2018));

for (let registratie of registraties) {
    console.log("\n*** Bezig met verwerking van " + registratie.id + " ***");
    registratie.registreer();
}