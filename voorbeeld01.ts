/* ter kennismaking: 
    typechecking tijdens compilatie;
    parameterchecking tijdens compilatie;
    genereren js-file bij compilatie */

/* vooraf: npm -g install typescript */

/* bij compilatie van een ts-file (commando: tsc) wordt altijd een js-file gegenereerd, 
   die uitgevoerd kan worden */

/* bron: https://www.typescriptlang.org/docs/tutorial.html */

/* pure JavaScript */
function greeter01(name){
    return "Hello, " + name;
}

console.log(greeter01("Joske"));   // Hello, Joske
console.log(greeter01());    // compileerfout; maar js-file wordt wel gegenereerd (en kan uitgevoerd worden): Hello, undefined
console.log(greeter01("Joske", "Vermeulen")) ;   // compileerfout; maar js-file wordt wel gegenereerd (en kan uitgevoerd worden): Hello, Joske
console.log(greeter01(100)); 


/* TypeScript met type annotatie */
function greeter02(name: string): string{
     return "Hello, " + name;
}

console.log(greeter02("Joske"));   // Hello, Joske
console.log(greeter02());    // compileerfout; maar js-file wordt wel gegenereerd (en kan uitgevoerd worden): Hello, undefined
console.log(greeter02("Joske", "Vermeulen")) ;   // compileerfout; maar js-file wordt wel gegenereerd (en kan uitgevoerd worden): Hello, Joske
console.log(greeter02(100)); // compileerfout; maar js-file wordt wel gegenereerd (en kan uitgevoerd worden): Hello, 100
