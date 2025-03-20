# How Functions Works

1. **Execution Context and Scope:**
   When you invoke a function in JavaScript, a new execution context is created for that function. This execution context has its own local scope (also called the function scope), which is different from the global scope.

   If a variable `x` is declared in the global scope and you declare another `x` inside a function, these are two **different variables**. The `x` inside the function is local to the function's scope, and the one in the global scope is separate from it. They exist in different execution contexts, so modifying one won't affect the other.

2. **Variable Lookup (Scope Chain):**
   When you try to access a variable inside a function, JavaScript will first look for it in the function's local scope (inside that function's execution context). If it finds the variable there, it uses that value.

   If the variable isn't found in the local scope, JavaScript will move to the **outer scope**—which, in the case of a nested function, could be the function that called the current function. This continues, and JavaScript will keep moving outward through the **scope chain** until it reaches the global execution context (the global scope).

3. **Global Scope and Error Handling:**
   If the variable isn't found in the global scope either, then JavaScript will throw a `ReferenceError`, saying the variable is **not defined**. This is because JavaScript could not find a variable `x` in any of the scopes it searched through.

### Example:

```javascript
let x = 10; // Global scope

function myFunction() {
  console.log(x); // Will search for 'x' in function scope, then global scope
}

myFunction(); // Output: 10
```

In this case, when you call `myFunction()`, JavaScript first checks if `x` is defined inside the function’s local scope. It doesn't find it there, so it looks in the global scope where `x = 10` is defined, and logs `10`.

If you had a situation where `x` wasn't defined anywhere:

```javascript
function myFunction() {
  console.log(x); // This will cause an error because 'x' is not defined in any scope
}

myFunction(); // ReferenceError: x is not defined
```

Here, JavaScript looks for `x` in the function's scope, doesn't find it, then looks in the global scope and also doesn't find it. Finally, it throws a `ReferenceError`.

```javascript
var x = 10;
function myFunction() {
  var x = 20;
  console.log(x); // Will search for 'x' in function scope and found it there
}

myFunction(); // Output 20
```

Here, JavaScript looks for `x` in the function's scope, and fint it there and use that value and stop looking for another value.
