/* type safe declaratie van variabelen */

let naam: string;
let getal: number;
let voorwaarde: boolean;

naam = "Joske";
naam = 100;  // compileerfout
getal = 100;
getal = "Joske";  // compileerfout
getal = "123"; // compileerfout
voorwaarde = 1 < 10;
voorwaarde = "true";  // compileerfout

console.log(naam);   // 100
console.log(getal);  // 123
console.log(voorwaarde); // true

// generics
let stringArray : Array<string> = new Array<string>();
stringArray[0] = "Jan";
stringArray[1] = 10;  // compileerfout
console.log(stringArray);

// any
// => schakel typechecking uit ('opt-out' typechecking)
let onbekend: any;
onbekend = "Hallo";
onbekend = 10.2;
onbekend = Math.random() > 0.5;
console.log(onbekend);

// returntype van function aangeven
function willekeurigBericht(): string{
    let berichten: Array<string> = ["hallo", "nou moe", "en dan?", "boeit nie", "yeah"];
    let x: number = Math.floor(Math.random()*berichten.length);
    return berichten[x];
}

let bericht: string = willekeurigBericht();
console.log(bericht);
getal = willekeurigBericht();  // compileerfout

// function zonder return
// enkel undefined en null mogen toegekend worden aan een var van type void
function fieZonderReturn(): void{
    console.log("Dit is een functie zonder return statement");
}

let result = fieZonderReturn();  
console.log(result);  // undefined