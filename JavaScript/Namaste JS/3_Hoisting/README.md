# Hoisting

Hoisting is a phenomenon in JavaScript by which variables and function declarations are moved at the top of their scope. Whenever we run any JS program it creates an execution context and in the execution context before execution of very first line, the memory allocation happens in Variable Environment phase and at this time all variable, functions and classes declarationare moved at the top of their scope and initialized by some predetermined values.

1. Variables declare with `var` keyword are hoisted and initialized with special keyword `undefined`

```javascript
console.log(num1); // undefined
var num1 = 1;
```

2. Variables declared with `let` and `const` keyword are hoisted but they are not initialized by any value such as `undefined`. Which means we can't access them before their initialization. Doing this will leads to an reference error such as **Cannot access 'variable-name' before initialization**. If it variable declared with `let` & `const` were not hoisted then error should be **variable is not defined **

```javascript
console.log(num2); // Uncaught ReferenceError: Cannot access 'num2' before initialization
let num2 = 2;
```

```javascript
console.log(num3); // Uncaught ReferenceError: Cannot access 'num3' before initialization
const num3 = 3;
```

3. Function Declarations are hoisted and initialized by it entire code i.e full function body.

```javascript
printMsg1(); // Hello from Msg1!
function printMsg1() {
  console.log("Hello from Msg1!");
}
```

4. Function Expressions are also hoisted but unlike function declaration they are not initialized by full function body but initialized as the rule we have for variables that is if declared with `var` keyword then undefined and in case of let and const not initialized with any value.

```javascript
printMsg2(); // printMsg2 is not a function
var printMsg2 = () => {
  console.log("Hello from Msg2!");
};
```

```javascript
printMsg3(); // Uncaught ReferenceError: Cannot access 'printMsg3' before initialization
let printMsg3 = function () {
  console.log("Hello from Msg3!");
};
```

5. Like let and const keywords classes are also hoisted but not initialized by any value so accessing them before initialization will lead to Reference error.

```javascript
new User().printMsg(); // Uncaught ReferenceError: Cannot access 'User' before initialization
class User {
  printMsg() {
    console.log("Hello from User Class");
  }
}
```
