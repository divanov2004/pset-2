# Problem Set 2

It's time to put your skills to the test. This problem set focuses on programming in JavaScript. More specifically, it focuses on printing text to the console, prompting the user for input, and manipulating that input using operators to solve simple problems.

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-2`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.
```
$ cd ~/Desktop/APCSP
```
3. Clone my skeleton repository into a directory named `pset-2`.
```
$ git clone git@github.com:ap-principles-ucvts/pset-2-skeleton.git pset-2
````
4. Change into your newly created `pset-2` directory.
```
$ cd pset-2
```
5. Overwrite the remote, which originally points at my skeleton repository.
```
$ git remote rename origin upstream
```
6. Add a new remote that points at your `pset-2` repository. Replace `YOUR-USERNAME` with your actual username.
```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-2.git
```
7. Install the required packages for reading user input. This command should be executed in the `pset-2` folder, and will create a `node_modules` folder that contains everything you need.
```
$ npm install
```
8. Open up the `hello.js` file, which is in the `src` folder. All your `.js` files should go in the `src` folder.

The first exercise is mostly done for you. You just have to fix a few things. You'll be on your own for the rest. There are a lot of exercises in this problem set, but none of them are too challenging. Take your time and try not to get frustrated.

## Exercises

The specifications for each exercise are outlined below. Your job is to write lines of code to solve the problems. Your code must meet the requirements set forth in this section. Each solution must be written in its own file, and named accordingly.

Work through these exercises on your own. Experiment, make mistakes, ask questions, and fix your mistakes. It's the only way to get good at programming.

### Exercise 1

I've written some code in `hello.js`, but it's broken. It's supposed to print a nice message to the console.

![Exercise 1 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/hello.png)

* Your code must be written in a file named `hello.js`.
* Your message must match mine exactly (including spacing and punctuation).

### Exercise 2

Prompt the user to enter his or her first name, and print a personalized message to the console.

![Exercise 2 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/hello-user.png)

* Your code must be written in a file named `hello-user.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).
* Use an appropriately-named `const` variable to store the user's first name.

### Exercise 3

What is the area (in square millimeters) of an *l*-by-*w*-inch sheet of paper, where *l* and *w* are provided by the user?

![Exercise 3 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/area.png)

* Your code must be written in a file named `area.js`.
* Your prompts and printed text must match mine exactly (including spacing and punctuation).
* Use a `const` variable to represent the conversion factor between inches and millimeters.
* Round the result to two decimals, and format it with separating commas (if needed).
* Conditional statements and loops are not permitted.

### Exercise 4

What is the perimeter (in centimeters) of an *l*-by-*w*-inch sheet of paper, where *l* and *w* are provided by the user?

![Exercise 4 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/perimeter.png)

* Your code must be written in a file named `perimeter.js`.
* Your prompts and printed text must match mine exactly (including spacing and punctuation).
* Use a `const` variable to represent the conversion factor between inches and centimeters.
* Round the result to two decimals, and format it with separating commas (if needed).
* Conditional statements and loops are not permitted.

### Exercise 5

What is the length of the diagonal (in inches) between two corners on an *l*-by-*w*-inch sheet of paper, where *l* and *w* are provided by the user?

![Exercise 5 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/diagonal.png)

* Your code must be written in a file named `diagonal.js`.
* Your prompts and printed text must match mine exactly (including spacing and punctuation).
* Round the result to two decimals, and format it with separating commas (if needed).
* Conditional statements and loops are not permitted.

### Exercise 6

Given the grading policy and the homework, quiz, and test grades I provide, what marking period grade will I get?

The grading policy defines the following weights.
* Homework, 15%
* Quizzes, 35%
* Tests, 50%

![Exercise 6 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/grades.png)

* Your code must be written in a file named `grades.js`.
* Your prompts and printed text must match mine exactly (including spacing and punctuation).
* Use `const` variables to represent the weights of each category.
* Round the result to two decimals.
* Conditional statements and loops are not permitted.

### Exercise 7

I get paid by the hour as a cashier at a local supermarket. How much money will I make this week?

![Exercise 7 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/hourly.png)

* Your code must be written in a file named `hourly.js`.
* Your prompts and printed text must match mine exactly (including spacing and punctuation).
* Use a `const` variable to represent the hourly wage.
* Round the result to two decimals, and format it with separating commas (if needed).
* Conditional statements and loops are not permitted.

### Exercise  8

What is my take-home pay each check? I get paid twice per month, and deductions my pay period deductions are as follows.

* 401k contribution (pre-tax), 7%
* Federal income tax, 15.7%
* State income tax, 4.47%
* Social Security tax, 6.2%
* Medicare tax, 1.45%

![Exercise 8 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/salary.png)

* Your code must be written in a file named `salary.js`.
* Your prompts and printed text must match mine exactly (including spacing and punctuation).
* Use `const` variables to represent the 401k contribution and tax rates.
* Round the result to two decimals, and format it with separating commas (if needed).
* Conditional statements and loops are not permitted.

### Exercise 9

I am planning a class trip next month. How many buses do I need, and how many people will be on the last bus? You can assume that all buses are filled to capacity before moving on to the next bus.

![Exercise 9 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/trip.png)

* Your code must be written in a file named `trip.js`.
* Your prompts and printed text must match mine exactly (including spacing and punctuation).
* Use `const` variables to represent the number of students and teachers, as well as the bus capacity.
* Round the result to two decimals, and format it with separating commas (if needed).
* Conditional statements and loops are not permitted.

### Exercise 10

What is the surface area of a standard Cornhole board? The board is 48-by-24 inches, with a hole 6-inches in diameter. Write code to do the math - don't just print the answer!

![Exercise 10 Output](https://github.com/ap-principles-ucvts/pset-2-skeleton/blob/master/images/cornhole.png)

* Your code must be written in a file named `cornhole.js`.
* Your printed text must match mine exactly (including spacing and punctuation).
* Use `const` variables to represent the board dimentions (length, width, and diameter).
* Round the result to two decimals, and format it with separating commas (if needed).
* Conditional statements and loops are not permitted.

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

* October 27, 2019, at 11:59pm.

If you submit your problem set at midnight (i.e., October 28, 2019, at 12:00am), it is considered **late**!

### Submission Requirements

* Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
* There must be **at least** 10 unique commits to your repository.
* Your code must meet each requirement outlined in the Exercises and Deliverables sections.
* Your code must adhere to the course style guidelines.

Happy coding!
