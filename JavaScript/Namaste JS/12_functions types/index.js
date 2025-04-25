// Function Statement (Function Declaration)
function func1() {
    console.log("This is a function statement");
}

/*
A function statement (or function declaration) is declared using the `function` keyword.
Function statements are hoisted, meaning the entire function definition is available 
before the code execution, even if it's called before its declaration in the code.
*/

// Function Expression
const func2 = function () {
    console.log("This is a function expression");
};

/*
A function expression occurs when a function is assigned to a variable.
Function expressions are hoisted in a way similar to variables.
However, only the variable declaration is hoisted, not the function assignment.
*/



// Anonymous Functions

/*
An anonymous function is a function that does not have a name.
It is commonly used as a value in function expressions or as arguments passed to other functions.

For example:
const anonymousFunc = function () {
    console.log("This is an anonymous function");
};

If an anonymous function is declared without being assigned to a variable or passed as an argument,
it will result in a syntax error, like this:

function () {
    console.log("This will throw an error");
}
// This will throw an error because the function is not assigned to a variable or used as an argument.
*/



// Named Function Expression

/* Only difference is that the function express will have a name*/

const b = function xyz() {

}

b() // works
xyz() // throws error

// Difference between Parameters and Arguments

// Arguments vs Parameters

/*
In a function, the actual values passed to the function are called arguments.
Arguments are the real data you pass when calling the function.

The names used in the function definition to receive those values are called parameters.
Parameters act as placeholders for the arguments.

Example:

// Function definition with parameters (a and b)
function add(a, b) {
    return a + b; // Parameters 'a' and 'b' will hold the values passed as arguments
}

// Function call with arguments (3 and 5)
const result = add(3, 5); // Here, 3 and 5 are the arguments

In the above example, 'a' and 'b' are parameters, while 3 and 5 are the arguments.
*/



// First-Class Functions

/*
In JavaScript, functions are considered "First-Class Citizens" or "First-Class Functions".
This means that functions can be treated like any other value. Specifically, they can:

1. Be assigned to variables.
2. Be passed as arguments to other functions.
3. Be returned as values from other functions.

Example 1: Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Alice")); // Outputs: Hello, Alice!

Example 2: Passing a function as an argument
function executeFunction(fn) {
    fn("Bob");
}

executeFunction(function(name) {
    console.log(`Hi, ${name}!`);
}); // Outputs: Hi, Bob!

Example 3: Returning a function from another function
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); // Outputs: 10
*/


// Arrow Functions

/*
Arrow functions provide a shorter syntax for writing functions in JavaScript. 
They are defined using the "=>" syntax and are particularly useful for short, simple functions. 
Additionally, arrow functions have some key differences compared to regular functions.

1. **Shorter syntax**: They eliminate the need for the `function` keyword.
2. **Lexical `this`**: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding code (lexical scoping).

Example 1: Basic Arrow Function
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Alice")); // Outputs: Hello, Alice!

// Arrow functions can also omit the return statement and curly braces for single expressions
const add = (a, b) => a + b;
console.log(add(2, 3)); // Outputs: 5

// Example 2: Arrow Function with no parameters
const sayHello = () => "Hello, World!";
console.log(sayHello()); // Outputs: Hello, World!

// Example 3: Arrow Function with Lexical `this`
const person = {
    name: "John",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // Arrow function inherits `this` from person object
        }, 1000);
    }
};
person.greet(); // Outputs: Hello, John (after 1 second)
*/


