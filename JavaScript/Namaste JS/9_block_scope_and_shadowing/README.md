# Block, Block Scope and Shadowing
### Block 
A block starts in JS with curly braces `{}`. A block is used to combine multiple statements into group. So there are places where JavaScript needs only single statment and using block we can combine  multiple statements into one group. It is also known as compound statement.

Example :- The if statement in JavaScript only accept one statement. That's why we use blocks to group multiple statements so we can use it with if statement.

```javascript
if(true) console.log("if statement without block")
// Single Statement


if (true) {
    const x = 1
    const y = 8
    const z = x + y
}
// Multiple Statements grouped using block
```
Same concepts of block applies on loops in JS.

### Block Scope 
Block Scope means what all variables and functions we can access inside that block. 

```javaScript
{
    var a = 10;
    let b = 20;
    let c = 30;
}

```

Here variable `b` & `c` will going to be in a block scope and variable `a` will be in global scope. The reason for this is that `var` is function scoped and on the other hand `let` & `const` are blocked scoped. And once we are outside of block we have moved to global scope in our code so we can't access variable `b` and `c`. Trying to do this will result in Refference Error : Variable is not defined.

### Shadowing in JS
Shadowing in JS means that when two variables one in outer scope and one in inner scope with same name are declared, then variable is local scope takes precedence and inside the local scope we can't access the outer variable which we say that local variable has shadowed the outer variable.  

```javaScript
var a = 100
{
    var a = 10;
    let b = 20;
    let c = 30;
    console.log(a) // 10 the outer a got shadowed by the inner a
}

console.log(a) // 10 The reason it got modified because var is function scoped so the inner a has modifed the value of a in global scope also

```

```javaScript
let b = 200;  // `b` is declared in the script scope

{
    var a = 10;  // `a` is declared using `var` (function-scoped)
    let b = 20;  // `b` is declared inside the block (block-scoped)
    let c = 30;  // `c` is also block-scoped

    console.log(b); // 20 (local `b` shadows outer `b`)
}

console.log(b); // 200 (outer `b` is unaffected)

```
**Block Scope ({ ... })**

- Inside the block, we declare a new b using let. This b only exists inside the block and does not affect the outer b.

- When we log b inside the block, JavaScript finds b = 20 first (since it’s the closest declaration) and prints 20.

**Script Scope (let b = 200;)**

- The b outside the block is in the script scope, which is part of the global scope but not attached to the window object (in a browser).

- When we log b outside the block, the inner b (inside {}) is not visible, so JavaScript refers to the   outer b = 200.

### Illegal Shadowing in JS
When you try to shaddow a variable but javascript throws syntax because it is not allowed

```javascript
let a = 10

{
    var a = 10
}

// This result in a syntax error saying identifier a is already declare. Because we are trying to redeclare the same variable in the global scope.

var a = 10

{
    let a = 10
}
// But this is okay ecaue we are redeclaring a in block scope not in global scope.

```

```javascript
let a = 10
console.log(a) // 10
{
    let a = 20
    console.log(a) // 20
    {
        let a = 30
        console.log(a) // 30
    }
}
```
Block scoper also follows Lexical Scope. Block scope rules applies same for functions, arrow functions, loops and if statements.