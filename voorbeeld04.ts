/* method overloading */

class Didact{
    a: number=0;
    b: number=0;
    // signatuur van alle toegelaten versies van fie
    fie(number: number): void;
    fie(number1: number, number2: number): void;
    // eenmaal uitwerking van fie
    fie(number1: number, number2?: number): void{
        if(!number2){
            number2 = number1;
        }
        this.a += number1;
        this.b += number2;
    }
}

let d: Didact = new Didact();
d.fie(10);
console.log(d);
d.fie(1,2);
console.log(d);