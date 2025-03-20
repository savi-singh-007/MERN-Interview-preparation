
console.log(num1) // undefined
printMsg1() // Hello from Msg1!

console.log(num2) // Cannot access 'num2' before initialization
console.log(num3) // Cannot access 'num2' before initialization

printMsg2() // printMsg2 is not a function
printMsg3() //  Cannot access 'printMsg3' before initialization
new User().printMsg() // Cannot access 'User' before initialization


var num1 = 1
let num2 = 2
const num3 = 3

function printMsg1() {
    console.log("Hello from Msg1!")
}

var printMsg2 = () => {
    console.log("Hello from Msg2!")

}

let printMsg3 = function () {
    console.log("Hello from Msg3!")
}

class User {
    printMsg() {
        console.log("Hello from User Class")
    }
}