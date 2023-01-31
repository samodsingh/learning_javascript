
console.log("index file");

//   alert("Hello");


// result = prompt("Are you old ");

// console.log("result-----" + result);

// let question = confirm("Should you delete");

// console.log("question----- " + question);

//  console.log(typeof alert);

//Exponentiation **
// console.log( 2 ** 2 ); // 2² = 4

//Type Conversion -------------------------------------
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// -------------------------------------------------
//String concatenation
let s = "my" + "string";
// console.log(s); // mystring

// console.log( '1' + 2 ); // "12"
// console.log( 2 + '1' ); // "21"

// console.log( 6 - '2' ); // 4, converts '2' to a number
// console.log( '6' / '2' ); // 3, converts both operands to numbers

//Numeric conversion

let x = 1;
// console.log( +x ); // 1

let y = -2;
// console.log( +y ); // -2

let apples = "2";
let oranges = "3";

// console.log( apples + oranges ); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
// console.log( +apples + +oranges ); // 5

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//   console.log( 'You guessed it right!' );
// } else {
//   console.log( 'How can you be so wrong?' ); // any value except 2015
// }

// ternary operator singal condisoins.

// let age = prompt("Age ?",18);
// let accessAllowed = (age > 18) ? true : false;

// console.log(accessAllowed);

// Ternary operator multiple condisoins.


// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// console.log( message );