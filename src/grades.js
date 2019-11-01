// we need to require the readline-sync package, which allows us to read user
// input from the terminal.

const readlineSync = require("readline-sync");

// these are constants representing the category weighting for homework
// assignments, quizzes, and tests.

const HW_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;

// the homework, quiz, and test values entered by the user. we don't need to
// store each individual grade, only their respective sums (which we'll use
// later to compute the averages).

console.log("\nEnter three homework grades.");
let homework = Number(readlineSync.question(""));
homework = homework + Number(readlineSync.question(""));
homework = homework + Number(readlineSync.question(""));

console.log("\nEnter three quiz grades.");
let quiz = Number(readlineSync.question(""));
quiz = quiz + Number(readlineSync.question(""));
quiz = quiz + Number(readlineSync.question(""));

console.log("\nEnter three test grades.");
let test = Number(readlineSync.question(""));
test = test + Number(readlineSync.question(""));
test = test + Number(readlineSync.question(""));

// we calculate category averages and multiply them by their weights. we sum
// these weighted averages to get our marking period grade.
//
// we use the Number.toLocaleString method to do the formatting for us. by
// default, this adds the commas we need. we use an optional object with the
// minimumFractionDigits and maximumFractionDigits properties set to 2. this
// rounds the number to exactly two digits.

let grade = (homework / 3 * HW_WEIGHT) + (quiz / 3 * QUIZ_WEIGHT) + (test / 3 * TEST_WEIGHT);
grade = grade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

// we're using a template string to print the sentence with our variables
// plugged in. there are other ways of doing this, such as using string
// concatenation (i.e., the + operator).

console.log(`\nYour marking period grade is ${grade}%.\n`);
