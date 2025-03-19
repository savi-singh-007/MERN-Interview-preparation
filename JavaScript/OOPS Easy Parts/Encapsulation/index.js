class Student {
    name;
    age;
    phone;
    #email;
    #courses

    constructor(name, age, phone, email, courses = []) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.#email = email
        this.#courses = courses
    }

    #enroll(course) {
        this.#courses = [...(this.#courses), course]
    }

    #updateEmail(email) {
        this.#email = email
    }

    // Setter and Getters, inside class they are methods but to access them outside the class we treate them as properties

    set email(email) {
        this.#updateEmail(email)
    }

    get email() {
        return this.#email
    }

}

const student = new Student("Jatin", 31, Date.now(), "jatin@gmail.com")
// Now we can not use student.#email or student.#updateEmail etc. Because they are private

class Teacher extends Student {
    salary;
    constructor(name, age, phone, email, courses = [], salary) {
        super(name, age, phone, email, courses)
        this.salary = salary
        //console.log(12, this.#email) Neither sub classes can use this private property
    }
}

const teacher = new Teacher("Savi", 25, Date.now(), "savi@gmail.com", [], 5000000)

student.email = "Savi@gmail.com"
teacher.email = "Savi@gmail.com"
console.log(student.email)
console.log(teacher.email)