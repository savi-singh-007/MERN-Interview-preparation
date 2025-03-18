
function Student(name, age, phone, email) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email
    this.courses = []

    // this.enroll = function (course) {
    //     this.courses = [...(this.courses), course]
    // }
    // this.updateEmail = (email) => {
    //     this.email = email
    // }
}

/* 

The problem with the current implementation is that both student_1 and student_2 have their own copies of the enroll and updateEmail methods. While each object should have its own data (like name, age, etc.), methods can be shared by all instances. Storing these methods in each object wastes memory.

To fix this, we can use prototypes. By moving the methods to the prototype, all instances can share the same method, saving memory and improving performance.

*/

Student.prototype.enroll = function (course) {
    this.courses = [...(this.courses), course]
}

Student.prototype.updateEmail = function (email) {
    this.email = email
}

/* Every function that we create, it comes with a function-object combo. Where object contains {

prototype : {}

}

and any instance of object created from this constructor have this property added in it's prototype

Student.prototype === student_1.__proto__

*/

const student_1 = new Student("Amit", 26, 1236547890, "amit@gmail.com")
const student_2 = new Student("Aman", 28, 1236547590, "aman@gmail.com")
