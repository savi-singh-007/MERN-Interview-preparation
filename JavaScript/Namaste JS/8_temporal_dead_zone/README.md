# var vs let vs const

### `var`

- **Scope**: Function-scoped, meaning it is available within the function where it is declared, or globally if declared outside a function.
- **Re-declaration**: Can be redeclared in the same scope without errors.
- **Re-initialization**: Can be reinitialized (assigned a new value) in the same scope.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope, but initialized with `undefined`. This means they can be accessed before their declaration, though the value will be `undefined`.

#### Example:

```javascript
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```

In the above example, the declaration (`var x`) is hoisted to the top, but the initialization (`x = 10`) happens where it is in the code.

### `let`

- **Scope**: Block-scoped, meaning it is only accessible within the block (like inside loops or conditionals) where it is declared.
- **Re-declaration**: Cannot be redeclared within the same scope. Trying to do so will throw an error.
- **Re-initialization**: Can be reassigned (re-initialized) within the same scope.
- **Hoisting**: Variables declared with `let` are hoisted, but they are not initialized until the actual declaration is encountered in the code. This means accessing them before their declaration will result in a **ReferenceError**.

#### Example:

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20
```

In this example, accessing `y` before its declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ) between the hoisting and the actual initialization.

### `const`

- **Scope**: Block-scoped, like `let`.
- **Re-declaration**: Cannot be redeclared within the same scope.
- **Re-initialization**: Cannot be reassigned (i.e., its value is constant once initialized).
- **Hoisting**: Variables declared with `const` are also hoisted but, like `let`, they are not initialized until the declaration is encountered, resulting in a **ReferenceError** if accessed before initialization.

- **Note**: `const` is typically used for declaring constants, but it works with references. For example, when declaring an object or array, the reference to the object/array is constant, but the contents of the object or array can be modified.

#### Example:

```javascript
const z = 30;
console.log(z); // 30
// z = 40; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // Allowed: modifying the contents of the array i.e mutability
console.log(arr); // [1, 2, 3, 4]

// arr = [5, 6]; // TypeError: Assignment to constant variable.
```

Here, you can modify the contents of an array declared with `const`, but you cannot reassign the variable itself.

---

### Key Differences:

| **Keyword** | **Scope**       | **Redeclaration**    | **Re-initialization**   | **Hoisting Behavior**                    |
| ----------- | --------------- | -------------------- | ----------------------- | ---------------------------------------- |
| `var`       | Function-scoped | Can be redeclared    | Can be reinitialized    | Hoisted and initialized with `undefined` |
| `let`       | Block-scoped    | Cannot be redeclared | Can be reinitialized    | Hoisted but not initialized (TDZ)        |
| `const`     | Block-scoped    | Cannot be redeclared | Cannot be reinitialized | Hoisted but not initialized (TDZ)        |

---

# Temporal Dead Zone

TDZ (Temporal Dead Zone) is the period between the hoisting of a variable (declared with let or const) and its actual declaration in the code. During this time, accessing the variable will result in a ReferenceError. This happens because even though the variable is hoisted to the top of its scope, it is not yet initialized, and JavaScript will not allow you to access it.

This concept only applies to let and const because they have block-level scoping, unlike var, which gets initialized with undefined immediately upon hoisting

# Reference Error

When we try to access a variable or function in JavaScript and that variable/function is not present in the scope chain or we are not allowed to access it then JS will throw a Reference Error.

Here are **ReferenceError** examples in JavaScript:

---

### **1. Accessing an Undeclared Variable**

```javascript
console.log(x); // ReferenceError: x is not defined
```

**Explanation**: The variable `x` is not declared before it's accessed, resulting in a **ReferenceError**.

---

### **2. Accessing Variable in Temporal Dead Zone (TDZ)**

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

**Explanation**: The variable `a` is declared with `let`, and it is accessed before its initialization, causing a **ReferenceError** due to the Temporal Dead Zone.

---

### **3. Accessing a Method on an Undefined Object**

```javascript
let obj;
console.log(obj.someMethod()); // ReferenceError: Cannot read property 'someMethod' of undefined
```

**Explanation**: The variable `obj` is `undefined`, and attempting to call `someMethod()` on it throws a **ReferenceError**.

---

### **4. Using `break` Outside of Loops or `switch` Statements**

```javascript
break;  // ReferenceError: Illegal break statement
```

**Explanation**: The `break` statement must be used inside a loop or `switch` statement. Using it outside such structures results in a **ReferenceError**.

---

### **5. Accessing Private Class Field Outside of Class**

```javascript
class Person {
  #name = "Alice";
}

let person = new Person();
console.log(person.#name); // ReferenceError: Cannot access private field #name
```

**Explanation**: Private fields (denoted by `#`) are not accessible outside the class, leading to a **ReferenceError**.

---

### **6. Using `delete` on a Non-deletable Property**

```javascript
const obj = {};
delete obj.someProperty; // ReferenceError: Cannot delete property 'someProperty' of #<Object>
```

**Explanation**: `delete` is used on a non-deletable property, resulting in a **ReferenceError**.

---

# Syntax Error

A SyntaxError occurs when the JavaScript engine encounters invalid code or an error in the structure of the code that breaks the rules of JavaScript syntax. These errors prevent the code from being parsed or executed and must be corrected for the program to run. Not even a single line will executed even the syntax error is at last line.

---

### **1. Mismatched Parentheses**

```javascript
if (x > 10 {  // SyntaxError: missing ) after argument list
  console.log("x is greater than 10");
}
```

**Explanation**: The opening parenthesis is not properly closed, which results in a **SyntaxError**.

---

### **2. Missing Comma in Object**

```javascript
let person = {
  name: "Alice"
  age: 25  // SyntaxError: missing comma after name property
};
```

**Explanation**: The missing comma between `name: "Alice"` and `age: 25` causes a **SyntaxError**.

---

### **3. Invalid Function Declaration (Starting with a Number)**

```javascript
function 123abc() {  // SyntaxError: Unexpected number
  console.log("Hello!");
}
```

**Explanation**: Function names cannot start with numbers, leading to a **SyntaxError**.

---

### **4. Unexpected `return` Outside Function**

```javascript
return; // SyntaxError: Illegal return statement
```

**Explanation**: The `return` statement is used outside of a function, causing a **SyntaxError**.

---

### **5. Extra or Trailing Comma in Arrays or Objects (Before ES5)**

```javascript
var numbers = [1, 2, 3]; // SyntaxError: Unexpected trailing comma
```

**Explanation**: In older versions of JavaScript (before ES5), trailing commas in arrays or objects would throw a **SyntaxError**. In modern JavaScript, trailing commas are allowed.

---

### **6. Missing Closing Bracket for Array**

```javascript
let arr = [1, 2, 3;  // SyntaxError: missing ] after element list
```

**Explanation**: The array is missing a closing bracket `]`, which results in a **SyntaxError**.

---

### **7. Improperly Closed String Literal**

```javascript
let message = "Hello World;  // SyntaxError: unterminated string literal
```

**Explanation**: The string is missing a closing quotation mark, which causes a **SyntaxError**.

---

### **8. Using `eval` as an Identifier**

```javascript
let eval = 10; // SyntaxError: Unexpected eval
```

**Explanation**: `eval` is a reserved keyword in JavaScript, so using it as a variable name results in a **SyntaxError**.

---

### **9. Invalid Use of `const` with Reassignment**

```javascript
const x = 5;
x = 10; // SyntaxError: Assignment to constant variable.
const b // Missing initializer in const declaration
```

**Explanation**: You cannot reassign a value to a variable declared with `const`, causing a **SyntaxError**.

---

# Type Error

A TypeError in JavaScript occurs when an operation or method is performed on a value of an inappropriate or incompatible type.

---

### **1. Calling a Non-Function as a Function**

```javascript
let x = 5;
x(); // TypeError: x is not a function
```

**Explanation**: `x` is a number, not a function. Trying to call a number as a function throws a **TypeError**.

---

### **2. Accessing Property of `null` or `undefined`**

```javascript
let obj = null;
console.log(obj.name); // TypeError: Cannot read property 'name' of null
```

**Explanation**: `obj` is `null`, and trying to access a property (`name`) of `null` results in a **TypeError**.

---

### **3. Modifying a Read-Only Property**

```javascript
const person = Object.freeze({ name: "Alice" });
person.name = "Bob"; // TypeError: Cannot assign to read only property 'name'
```

**Explanation**: The object `person` is frozen with `Object.freeze()`, making its properties immutable. Attempting to modify the property results in a **TypeError**.

---

### **4. Using `push()` on a Non-Array Type**

```javascript
let str = "Hello";
str.push(1); // TypeError: str.push is not a function
```

**Explanation**: `str` is a string, and strings do not have the `push()` method, which is meant for arrays. This results in a **TypeError**.

---

### **5. Attempting to Call a Method on an Undefined Variable**

```javascript
let a;
a.toLowerCase(); // TypeError: Cannot read property 'toLowerCase' of undefined
```

**Explanation**: The variable `a` is `undefined`, and trying to call `toLowerCase()` on `undefined` causes a **TypeError**.

---
