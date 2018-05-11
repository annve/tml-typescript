/* abstract method */

abstract class Animal {
    constructor(public name: string) { }
    abstract makeSound(): void; 
    // abstracte methode moet in elke niet-abstracte subklasse overriden worden
    move(distanceInMeters: number = 0) {
        console.log('%s moved %dm.', this.name, distanceInMeters);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
    makeSound(){
        console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
    makeSound(){
        console.log("HIIIIIIIIIIIIIIIII");
    }
}

let sam: Animal = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
sam.makeSound();
tom.move(34);
tom.makeSound();
