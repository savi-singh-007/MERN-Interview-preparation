# How JS Code Works?

### **1. Creation Phase (Global Execution Context - GEC)**

- JavaScript starts by creating a **Global Execution Context (GEC)**.
- It sets up two components:

  - **Variable Environment (Memory Allocation)**: Variables and functions are stored in memory with initial values (`undefined` for variables).
  - **Thread of Execution**: Runs the code line by line.

  ![alt text](<How JS Works.png>)

#### **Memory Allocation in GEC**

- `num` is declared and initialized as `undefined`.
- `squareNum` function is stored in memory.
- `square2` and `square4` are declared but initialized as `undefined`.

---

### **2. Code Execution Phase (Global Execution Context)**

- `num = 2` → Assigns value `2` to `num`.
- **First function call** → `square2 = squareNum(num)`, calls `squareNum(2)`.

---

### **3. Function Execution Context (First Call: `squareNum(2)`)**

- **New Execution Context is created** for `squareNum(2)`.
- **Memory Allocation**:
  - `n` is declared and assigned `undefined`.
  - `ans` is declared and assigned `undefined`.
- **Execution**:
  - `n = 2`
  - `ans = 2 * 2 = 4`
- Function returns `4`, and the execution context is popped off the call stack.
- `square2` is assigned `4` in the global scope.

---

### **4. Function Execution Context (Second Call: `squareNum(4)`)**

- **New Execution Context is created** for `squareNum(4)`.
- **Memory Allocation**:
  - `n` is declared and assigned `undefined`.
  - `ans` is declared and assigned `undefined`.
- **Execution**:
  - `n = 4`
  - `ans = 4 * 4 = 16`
- Function returns `16`, and the execution context is popped off the call stack.
- `square4` is assigned `16` in the global scope.

---

### **5. End of Execution**

- Once all the code executes, the **Global Execution Context (GEC)** is also removed from the call stack.
- The final values in memory:
  - `num = 2`
  - `square2 = 4`
  - `square4 = 16`
- The program ends.

This process follows the **JavaScript Call Stack**, where execution contexts are pushed and popped in a Last-In-First-Out (LIFO) manner.

# Call Stack

Call Stack is a data structure which is used to keep track of execution contexts in the program. It works on the LIFO (Last In First Out) principle. Whenever a function call happens, it's execution context is pushed into the stack and when function has finishes execution the excution context popped out of the call stack.

Call Stack has Global Execution Context as it's first execution context at the bottom of the stack and call stack empty out once entire program has finished executing.
