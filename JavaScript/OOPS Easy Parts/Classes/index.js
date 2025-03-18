
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


const student_1 = new Student("Ram", 23, Date.now(), "1@gmail.com")
console.log(student_1)