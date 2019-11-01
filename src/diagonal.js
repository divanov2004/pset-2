// we need to require the readline-sync package, which allows us to read user
// input from the terminal.

const readlineSync = require("readline-sync");

// the width and length values entered by the user are read-only (but not
// formal constants). we don't want these values to be re-assigned since we
// need to later reference their original values.

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");

// we compute the diagonal using the Pythagorean Theorem (which is implemented
// in the built-in Math.hypot method).
//
// we use the Number.toLocaleString method to do the formatting for us. by
// default, this adds the commas we need. we use an optional object with the
// minimumFractionDigits and maximumFractionDigits properties set to 2. this
// rounds the number to exactly two digits.

let diagonal = Math.hypot(width, length);
diagonal = diagonal.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

// we're using a template string to print the sentence with our variables
// plugged in. there are other ways of doing this, such as using string
// concatenation (i.e., the + operator).

console.log(`\nA(n) ${width}-by-${length}-inch sheet of paper has a diagonal of ${diagonal} inch(es).\n`);
