// we need to require the readline-sync package, which allows us to read user
// input from the terminal.

const readlineSync = require("readline-sync");

// the students, teachers, and capacity values entered by the user are
// read-only (but not formal constants). we don't want these values to be
// re-assigned since we need to later reference their original values.

const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

// we calculate the number of buses needed and the number of leftover people on
// the last bus based on the number of passengers and the bus capacity. 

const total = students + teachers;
const buses = Math.ceil(total / capacity);
const leftover = total % capacity;

// we're using a template string to print the sentence with our variables
// plugged in. there are other ways of doing this, such as using string
// concatenation (i.e., the + operator).

console.log(`\n${buses} bus(es) is (are) needed, with ${leftover} passenger(s) on the last bus.\n`);
