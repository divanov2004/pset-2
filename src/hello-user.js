// we need to require the readline-sync package, which allows us to read user
// input from the terminal.

const readlineSync = require("readline-sync");

// prompt the user to enter his or her name, and print a greeting using a
// template string. it isn't required that you use a template string here.
// string concatenation works just as well.

const name = readlineSync.question("\nHi! What's your name?\n");
console.log(`\nHello, ${name}!\n`);
