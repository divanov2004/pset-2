# Problem Set 2

It's time to put your skills to the test. This problem set focuses on programming in JavaScript. More specifically, it focuses on printing text to the console, prompting the user for input,

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

The specifications for each exercise are outlined below. Your job is to write lines of code to solve the problems. Your code must meet the requirements set forth in this section (as well as the Deliverables section). Each solution must be written in its own file, and named accordingly.

Work through these exercises on your own. Experiment, make mistakes, ask questions, and fix your mistakes. It's the only way to get good at programming.

### Exercise 1

I've written some code in `hello.js`, but it's broken. It's supposed to print a nice message to the console.

```
$ node hello.js
Hello, world!
$
```

* Your code must be written in a file named `hello.js`.
* Your message must match mine exactly (including spacing and punctuation).

### Exercise 2

Prompt the user to enter his or her first name, and print a personalized message to the console.

```
$ node hello-user.js
Hi! What's your name? Ryan
Nice to meet you, Ryan!
$
```

* Your code must be written in a file named `hello-user.js`.
* Your prompt and personalized message must match mine exactly (including spacing and punctuation).
* Use an appropriately-named `const` variable to store the user's first name.

### Exercise 3

What is the area (in square millimeters) of an 8.5-by-11-inch sheet of paper? What is the area of a sheet of paper whose dimensions are provided by the user?

```
$ node area.js
An 8.5-by-11-inch sheet of paper has an area of 60,322.46 square millimeters.

$ Length: 10
$ Width: 10
$ A(n) 10-by-10-inch sheet of paper has an area of 64,516.00 square millimeter(s).
$
```

* Your code must be written in a file named `area.js`.
* Your prompts printed text must match mine exactly (including spacing and punctuation).
* Use a `const` variable to represent the conversion factor between inches and millimeters.
* Round the results to two decimals, and format them with separating commas.
* Conditional statements and loops are not permitted.
