/* gebruik van modules */
/* wat een module exporteert, kan een andere module importeren om het te gebruiken */

import { StringValidator } from "./Validation";
import { ZipCodeValidator } from "./ZipCodeValidator";

let myStringValidator: StringValidator;   // import nodig
myStringValidator = new ZipCodeValidator();  // import nodig
let zipCode: string = "2660";
console.log("%s is%s a valid Belgian zipcode", zipCode, 
    myStringValidator.isAcceptable(zipCode) ? "": " not");
zipCode = "abcd";
console.log("%s is%s a valid Belgian zipcode", zipCode, 
    myStringValidator.isAcceptable(zipCode) ? "": " not");