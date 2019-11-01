// we need to require the readline-sync package, which allows us to read user
// input from the terminal.

const readlineSync = require("readline-sync");

// these are constants representing the 401k contribution rate, and various tax
// rates (federal, state, social security, and medicare).

const RETIREMENT = 0.07;
const FED_TAX = 0.157;
const STATE_TAX = 0.0447;
const SS_TAX = 0.062;
const MEDICARE_TAX = 0.0145;

// the salary value entered by the user is read-only (but not a formal
// constant). we don't want this value to be reassigned since we need to later
// reference its original value.

const salary = Number(readlineSync.question("\nAnnual salary: "));

// the pay is the beginning of our calculations. it is the remaining money
// earned after subtracting the 401k contribution.

let pay = salary - (salary * RETIREMENT);

// we do the calculations to determine the tax deductions for each tax rate.
// this is done against the pay (after having already substracted the 401k
// contribution computed earlier).

const federal = pay * FED_TAX;
const state = pay * STATE_TAX;
const socialSecurity = pay * SS_TAX;
const medicare = pay * MEDICARE_TAX;

// we substract the tax deductions, and update the net pay in the process.
// after dividing by the number of annual checks, we format the value.
//
// we use the Number.toLocaleString method to do the formatting for us. by
// default, this adds the commas we need. we use an optional object with the
// style and currency properties set to currency and USD, respectively. this
// rounds the number to exactly two digits, and adds the dollar sign.

pay = pay - (federal + state + socialSecurity + medicare);
pay = (pay / 24);
pay = pay.toLocaleString("en-US", { style: "currency", currency: "USD" });

// we're using a template string to print the sentence with our variables
// plugged in. there are other ways of doing this, such as using string
// concatenation (i.e., the + operator).

console.log(`\nYour take-home pay each check will be ${pay}.\n`);
