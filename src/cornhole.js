// these are constants representing the length, width, and circle factor
// between diameter of the cornhole board.

const LENGTH = 48;
const WIDTH = 24;
const DIAMETER = 6;

// the surface area (before accounting for the hole) and the area of the hole
// itself are computing using the constant dimensions.

const boardArea = LENGTH * WIDTH;
const holeArea = Math.PI * Math.pow((DIAMETER / 2), 2);

// subtract the area of the circle from the raw surface area before formatting.
//
// we use the Number.toLocaleString method to do the formatting for us. by
// default, this adds the commas we need. we use an optional object with the
// minimumFractionDigits and maximumFractionDigits properties set to 2. this
// rounds the number to exactly two digits.

let surfaceArea = boardArea - holeArea;
surfaceArea = surfaceArea.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// we're using a template string to print the sentence with our variables
// plugged in. there are other ways of doing this, such as using string
// concatenation (i.e., the + operator).

console.log(`\nThe surface area of a standard Cornhole board is ${surfaceArea} square inch(es).\n`);
