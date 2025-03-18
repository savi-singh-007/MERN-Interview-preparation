
function Student(name, age, phone, email) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email
    this.courses = []

    this.enroll = function (course) {
        this.courses = [...(this.courses), course]
    }
    this.updateEmail = (email) => {
        this.email = email
    }
}

const amit = new Student("Amit", 26, 1236547890, "amit@gmail.com")
console.log(amit.courses)
amit.enroll("Javascript")
amit.updateEmail("amit@yahoo.com")
console.log(amit)

