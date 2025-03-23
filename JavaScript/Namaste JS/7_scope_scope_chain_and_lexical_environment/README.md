# Scope

**Scope** in JavaScript determines the area, context or environment in which a variable or function can be accessed.
It also determines the area or context in which the particular variable or function can be accessed.

**Global Scope:-** Variables which are declared outside the function or blocks {} are considered to be in global scope. Global scope variables can be accessed from anywhere in the program and can be modified from anywhere.

```javascript
var x = 10;
a();
function a() {
  b();
  function b() {
    console.log(x);
  }
}
// x is global scoped
```

**Function Scope:-** Variables that are declared inside the function are called in Function scope or Local Scope. Thery can't be accessed outside the function. Variables are declared inside function body which uses {}. Therefore block scope and function scope is same for function body.
`var` is function scoped.

```javascript
a();
function a() {
  var x = 10;

  b();
  function b() {
    console.log(x);
  }
}
// x is Function scoped
```

**Block Scope:-** Variables declared inside the {} are known as block-scoped and can't be accessed outside the block {}.
`let` and `const` are blocked scoped. Block Scope can be curly braces, if statements curly-braces or functions curly braces.

```javascript
{
  let x = 10;
}
// x is Block scoped
```

**Lexical Scope:-** Lexical scope determines the physical availability of the variable or function in the code.Which that the availbility of variable and functions is determined based on where they are declared not where they are executed.
We can say that variable x and function b is in lexical scope of function a that is physically present there.

```javascript
a();
function a() {
  var x = 10;

  b();
  function b() {
    console.log(x);
  }
}
```

# Lexical Environment

Lexical Environment of a variable or function is consists of it's local environment and lexical environtment of it's parent scope.

# Scope Chain

Scope Chain is a phenonmenon by which javascript try to find a varaible or function by looking into series of scopes.

```javascript
var x = 10;
a();
function a() {
  b();
  function b() {
    console.log(x);
  }
}
```

Here to find the variable `a`

1. First, JavaScript looks for the variable x inside the local scope of b() (function b), but doesn't find it there.

2. JavaScript then looks in the lexical environment of b()'s parent, which is function a(). It doesn't find x in the local scope of function a() either.

3. The lexical environment of function a() is the global scope. JavaScript finds the variable x here, as it is declared globally (var x = 10).

4. JavaScript uses the value 10 from the global scope and logs it to the console.

5. If x wasn't found in the global scope, JavaScript would continue looking in the lexical environment of the global scope, which is null (there’s no parent scope beyond the global scope). In that case, it would throw a ReferenceError stating that x is not defined.

This lookup process is called scope chain
![alt text](<scope chain.png>)
