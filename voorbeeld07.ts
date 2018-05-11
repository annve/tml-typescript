/* super, polymorfisme */

class Animal {
    // v1
    // constructor(public name: string) {  }

    // v2
    constructor(public name: string, public domestic:boolean = false) {  }
}

class Rhino extends Animal {
    constructor() { 
        super("Rhino"); // ctor van basisklasse oproepen
    }
}

class Employee {
    constructor(public name: string) {  }
}

let animal: Animal = new Animal("Goat");
let rhino: Rhino = new Rhino();
let employee: Employee = new Employee("Bob");

animal = rhino;  // een object van een subklasse kan gebruikt worden
// waar een object van de basisklasse verwacht wordt
// animal = employee; // ok als Employee alle velden en methods heeft die Animal heeft (v1);
// anders compileerfout (v2)