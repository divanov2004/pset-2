// we need to require the readline-sync package, which allows us to read user
// input from the terminal.

const readlineSync = require("readline-sync");

// the wage value entered by the user are read-only (but not a formal
// constants). we don't want these values to be re-assigned since we need to
// later reference its original values.

const wage = Number(readlineSync.question("\nHourly wage: "));

// the hours worked per day entered by the user. we don't care about tracking
// individual daily hours, only the weekly sum.

let hours = Number(readlineSync.question("\nMonday: "));
hours = hours + Number(readlineSync.question("Tuesday: "));
hours = hours + Number(readlineSync.question("Wednesday: "));
hours = hours + Number(readlineSync.question("Thursday: "));
hours = hours + Number(readlineSync.question("Friday: "));
hours = hours + Number(readlineSync.question("Saturday: "));
hours = hours + Number(readlineSync.question("Sunday: "));

// we calculate the money earned and store it in pay. this is declared using
// let because we then re-assign its value after formatting it.
//
// we use the Number.toLocaleString method to do the formatting for us. by
// default, this adds the commas we need. we use an optional object with the
// style and currency properties set to currency and USD, respectively. this
// rounds the number to exactly two digits, and adds the dollar sign.

let pay = (hours * wage);
pay = pay.toLocaleString("en-US", { style: "currency", currency: "USD" });

// we're using a template string to print the sentence with our variables
// plugged in. there are other ways of doing this, such as using string
// concatenation (i.e., the + operator).

console.log(`\nYou'll make ${pay} this week.\n`);
