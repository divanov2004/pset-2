// we need to require the readline-sync package, which allows us to read user
// input from the terminal

const readlineSync = require("readline-sync");

// this is a constant representing the conversion factor between centimeters
// and inches.

const CENTIMETERS_PER_INCH = 2.54;

// the width and length values entered by the user are read-only (but not
// formal constants). we don't want these values to be re-assigned since we
// need to later reference their original values

const width = Number(readlineSync.question("\nWidth: "));
const length = Number(readlineSync.question("Length: "));

// we do the conversion and calculation, and store it in perimeter. this is
// declared using let because we then re-assign its value after formatting it.
//
// we use the Number.toLocaleString method to do the formatting for us. by
// default, this adds the commas we need. we use an optional object with the
// minimumFractionDigits and maximumFractionDigits properties set to 2. this
// rounds the number to exactly two digits.

let perimeter = (width * CENTIMETERS_PER_INCH * 2) + (length * CENTIMETERS_PER_INCH * 2);
perimeter = perimeter.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// we're using a template string to print the sentence with our variables
// plugged in. there are other ways of doing this, such as using string
// concatenation (i.e., the + operator).

console.log(`\nA(n) ${width}-by-${length}-inch sheet of paper has a perimeter of ${perimeter} centimeter(s).\n`);
