// Inheritance for Constructor Function
// function Student (name, age, phone, email) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.email = email
//     this.courses = []
// }

// Student.prototype.enroll = function (course) {
//     this.courses = [...(this.courses), course]
// }

// Student.prototype.updateEmail = function (email) {
//     this.email = email
// }

// function Teacher (name, age, phone, email, salary) {
//     Student.call(this, name, age, phone, email )
//     this.salary = salary
// }



// Teacher.prototype = Object.create(Student.prototype)

// Teacher.prototype.createCourse = function () {
//     console.log("Create a course!")
// }

// const student_1 = new Student("Amit", 26, 1236547890, "amit@gmail.com")
// const physicsTeacher = new Teacher("Atul", 39, Date.now(), "atul@gmail.com", 45000)
// console.log(physicsTeacher)


// Inheritance for ES6 Classes


class Student {
    name;
    age;
    phone;
    email;
    courses

    constructor(name, age, phone, email, courses = []) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email
        this.courses = courses
    }

    enroll (course) {
        this.courses = [...(this.courses), course]
    }

    updateEmail (email) {
        this.email = email
    }

    
}

class Teacher extends Student {
    salary;

    constructor (name, age, phone, email, salary) {
        super(name, age, phone, email)
        this.salary = salary
    }

    createCourse () {
        console.log("Create a course!")
    }
}


const student = new Student("Ram", 23, Date.now(), "1@gmail.com")
const teacher = new Teacher("Aditya", 44, Date.now(), "aditya@gmail.com", 60000)
console.log(teacher)