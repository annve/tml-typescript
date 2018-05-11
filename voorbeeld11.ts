/* generics */

class Dier{
    dierenprop:any;
}
class Muis extends Dier{ 
    muizenprop: any;
}
class Beer extends Dier{
    berenprop: any;
}
class Leerling{
    klas: string;
}

class Val<T>{
    private gevangene: T = null;
    vang(slachtoffer: T): void{
        if(this.gevangene == null){
            this.gevangene = slachtoffer;
        }
    }
    bevrijd(): T{
        let result = this.gevangene;
        this.gevangene = null;
        return result;
    }
}

let muizenVal: Val<Muis> = new Val<Muis>();
// opm: onderstaande lijnen veroorzaken geen fout als 
// muizen, beren, en leerlingen dezelfde props hebben
// val.vang(new Beer()); // compileerfout
// val.vang( new Leerling()); // compileerfout
muizenVal.vang(new Muis());
let dier:Dier = muizenVal.bevrijd();
console.log(dier, " is bevrijd!");

let dierenVal: Val<Dier> = new Val<Dier>();
dierenVal.vang(new Muis());
console.log(dierenVal.bevrijd(), " is ook bevrijd!");