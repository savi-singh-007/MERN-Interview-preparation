# Closures
A Closure is a function bundled together with its lexical environment which means a closure is a function which remembers the reference of the variables from it's lexical environment even if it is executed outside it's original scope.

```javascript
function x () {
    let a = 10;

    function y () {
        console.log(a)
    }

    y()
    
}
```

Function y forms a closure because it accesses its lexical environment (a from x), but in this case, the closure effect is not utilized since y() is executed immediately inside x()." But closure is formed here also.

```javascript
function x () {
    let a = 10;

    return function () {
        console.log(a)
    }

}

const y = x()
y()
```
logs 10,
Here y is a closure function. Which means it remembers it's lexical environement even if it is executed outside it's scope. So function y is executed when there is no execution context of x is available in call stack. Execution context of x has been popped off from the call stack. And still we are available to access variavle a because a closure remembers it's lexical environment.

```javascript
function x () {
    let a = 10;

    return function () {
        console.log(a)
    }

    a = 20

}

const y = x()
y()
```

It will log 20 because closure does not remmeber value of variable a which is in it's parent's local scope but it remember reference of that variables that's why it log 20


```javascript
function x() {
    let a = 10; // `a` is part of x()'s lexical environment

    return function () { // First returned function
        const b = 45; // `b` is part of this function's lexical environment

        return function () { // Second returned function
            console.log(a, b); // Accessing `a` and `b`
        };
    };
}

const y = x(); // Executes `x()`, returning the first function
const z = y(); // Executes `y()`, returning the second function
z(); // Executes the final function, logging: 10 45

```
Here it logs 10 45 
**z is a closure function because it remembers the entire lexical environment in which it was created.
 This means:**
 - It remembers a from x(), even though x() has already finished executing.
 - It remembers b from y(), even though y() has also finished executing.

 ### Use Cases of Closures
 - Module Design Patterns
 - Currying
 - Function like once
 - memoize
 - Maintaining states in async world
 - setTimeouts
 - Iterators