/*

We need to create a game for users where user will have different properties like name & score and methods like increment score, decrement score, login and logout.

Now you have need a paradigm which makes it 
1. Easy to add properties and methods
2. Easy to understand
3. Do not hamper performance

We will start with different methods and how we can create objects in JS

*/

// 1. Using object literal
const user1 = {
    name : "Savi",
    score : 4,
    increment : function () {
        user1.score += 1
    }
}

// 2 using dot notations on an empty object
const user2 = {}
user2.name = "Riya"
user2.score = 5
user2.increment = function () {
    user2.score += 1
}

// 3. using Object.create

/* 

Object.create() will always return an empty object no matter what parameters we have passed to it.
But it does it something different that we understand later.

*/
const user3 = Object.create(null)
user3.name = "Preeti"
user3.score = 6
user3.increment = function () {
    user3.score += 1
}

// console.log(user1, user2, user3)

/* 

Note:-  As of now things are good we got our users create with appropriate properties and methods. But we need to write this for every user agagin and again and also it is voilating the DRY principle. So let's create a function who does this for us.

*/

// function userCreator (name, score) {
//     const user = Object.create(null);
//     user.name = name
//     user.score = score
//     user.increment = function () {
//         user.score += 1
//     }

//     return   user

// }

// const user4 = userCreator("Savi", 4)
// const user5 = userCreator("Pallav", 5)
// const user6 = userCreator("Neha", 8)

// console.log(user4, user5, user6)

// Here point 1 & 2 is passing but every object of user has to carry the increment function which increases memory consumption and performance. So we need to store this increment function at a central place and whenever any user object need will take from there.

// Everything in JavaScript is an Object and every object has a hidden property __proto__
// and the parameter that we pass in Object.create it attaches the new empty object's __proto__ to that parameter.


function userCreator (name, score) {
    const user = Object.create(sampleObject);
    user.name = name
    user.score = score
    return   user
}

const sampleObject = {
    increment : function () {
        this.score += 1
    }
}


const user4 = userCreator("Savi", 4)
const user5 = userCreator("Pallav", 5)
const user6 = userCreator("Neha", 8)

console.log(user4, user5, user6)

// Note here we have solved the memory performance issue by adding the increment function on the __proto__ of user object



function UserCreator (name, score) {
    this.name = name
    this.score = score
}


// Note :- How new keyword works under the hood
// 1. It creates an empty object
// 2. this = {} (newly created empty object)
// 3. returns the this object

// 4. UserCreator = Fn + {prototype : {}}, this.__proto__ = UserCreator.prototype

UserCreator.prototype.increment = function () {
    this.score += 1
}

const user7 = new UserCreator("Preeti", 10)

console.log(user7)

// Classes are just syntactical sugar over Constructor Function and new Keyword

class User {
    constructor (name, score) {
        this.name = name
        this.score = score
    }

    increment () {
        this.score += 1
    }
}

const user8 = new User ("Nishant", 77)
console.log(user8)