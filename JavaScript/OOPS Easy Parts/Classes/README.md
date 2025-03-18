### Classes
Javascript does not have traditional classes such as Java & Python have. Javascript have sudo classes which means that classes are just syntactical sugar over the constructor function and prototype.

So Object Oriented proramming is possible in JS due Prototype. So in reality it is a prototypal language not object oriented.

Whatever code we have written for Constructor we will re-write it using Classes. 

### Note :- 
1. Unlike function declarations, classes are not Hoisted in JS so we can't initialize them before their declarartion.

2. We can also create class expressions like function expressions

```javascript

const Student = class {
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
```