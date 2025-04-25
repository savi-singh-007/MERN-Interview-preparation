// Callback Function
/* 
We know that functions are First Class Citizens in JavaScript, we can pass functions as argument to other functions.
And such function which passed an argument is called Callback Functions. Callback helps us to provide the Asynchronous
nature to a Synchronous Single-Threaded language. Callback means Call Me Back. A function which will be called after some certain
activity.   

We can see a timer comes after 5 seconds by attaching the debugger on it.


*/

setTimeout(() => {
    console.log("set time out callback runs")
}, 5000)

function y(x) {
    console.log("y")
    x()
}

function x() {
    console.log("x")
}
y(x)

// Event Listners
function clickFunction() {
    console.log("Click Me") // Can add a debugger here to view it in call stack
}

document.getElementById("clickMe").addEventListener("click", clickFunction)

// Event Listner with closures example

function counter() {
    let count = 0;
    document.getElementById("counter").addEventListener("click", function () {
        console.log(`Count = ${++count}`) // Add a debugger here to check the closure formed with addEventListner click's callback
    })

}

counter()

// Event listners takes a lot of memory space  and still attched in browser even the call stack is empty because browser doesn't know when will you click the button. Also in case of closures it store those lexical environment's variable till page is opeN CAUSING UNNECESSARY MEMORY.

document.getElementById("removeEventListners").addEventListener("click", () => {
    document.getElementById("clickMe").removeEventListener("click", clickFunction)
})

// We can't remove a event listner if it is not using a named function as callabck and using just an anonymous function. Because it's reference is lost