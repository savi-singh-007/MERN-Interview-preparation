// Q. Print Numbers 1 to 5 after an interval of 1 second each using var in for loop

function printNumbers() {
    for (var i = 1; i < 6; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}
// printNumbers()

/*
The issue in the code arises because var is function-scoped, meaning the variable i is shared across all iterations of the loop. As the setTimeout callbacks form closures, they capture the reference to i rather than its value at each iteration. By the time the callbacks execute after the loop completes, the value of i is 6, resulting in 6 being logged five times. 

*/

// Solution 1 using let keyword
// Instead of var we can use let which is a block scope. Meaning creating difference reference of i for each iterations. So with 5 iterations 5 block scope are created having 5 different values. Printing desired output

function printNumbers2() {
    for (let i = 1; i < 6; i++) {
        setTimeout(() => console.log(i), i * 1000)
    }
}
// printNumbers2()

// Solution-2 using var
// We need create a function so scoping of var can be changed and with each iteration a new value of var is created not modifying same reference which happened in first case

function printNumbers3() {
    for (var i = 1; i < 6; i++) {
        function print() {
            var x = i
            setTimeout(() => console.log(x), x * 1000)
        }
        print()
    }
}
// printNumbers3()

// Closures Examples for Data Hiding and Encapsulation

var count = 0

function counter() {
    count++
    console.log(count)
}

counter()
counter()
counter()

// Problem here is that anybody can can the value of count globally and make our counter function works wrong

count = 99

counter()

// We will closures to encapsulate this count variable

function counterNew() {
    var count = 0
    return function () {
        count++
        console.log(count)
    }
}

const counterFn = counterNew()
counterFn()
counterFn()
counterFn()
counterFn()
counterFn()
counterFn()
counterFn()

// Scale this counter function using constructor function

function Counter() {
    this.count = 0
}
Counter.prototype.increment = function () {
    this.count++
    console.log(this.count)
}

Counter.prototype.decrement = function () {
    this.count--
    console.log(this.count)
}

const counter3 = new Counter()
counter3.increment()
counter3.decrement()

// Relationship between GC and closures
// one disadvantage of using too much closures is that they will take more memory. Thos variable and functions which are not 
// not in use are removed and free up memory using garbage collection. But since the variables are used in a closure function from it's lexical environment is used outside of it's scope so can't be garbage collected and remains in the memory. But modern browsers are using smart garbage collection.

function counter4() {
    var count = 0
    const a = 10 // since a is not used in the closure fn it will be garbage collected using smart garbage collection
    return function () {
        count++
        console.log(count)
    }
}
