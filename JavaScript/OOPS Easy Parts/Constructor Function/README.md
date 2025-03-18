### Constructor Function

Constructor Function is a special type of function **which is used to create and initialize objects. The convention to differentiate between a normal function and constructor function** is that first letter of constructor function must be Capital. The constructor function only create and initialize objects when it is used with `new` keyword.

```javascript
function Student(name, age, phone, email) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.email = email;
  this.courses = [];

  this.enroll = function (course) {
    this.courses = [...this.courses, course];
  };
  this.updateEmail = (email) => {
    this.email = email;
  };
}

const amit = new Student("Amit", 26, 1236547890, "amit@gmail.com");
console.log(amit.courses);
amit.enroll("Javascript");
amit.updateEmail("amit@yahoo.com");
console.log(amit);

/* 
{
    "name": "Amit",
    "age": 26,
    "phone": 1236547890,
    "email": "amit@yahoo.com",
    "courses": [
        "Javascript"
    ]
}
*/
```

Here, Student is the constructor function which is used to create and initialize general student object.
Each object which is being created from Student Constructor Function has different memory address in the heap so change in one bject won't change other.

### How the `new` keyword works behind the scenes?

When you use the `new` keyword in JavaScript, it performs the following steps:

1. It creates a new empty object: `const obj = {}`.
2. It sets the `this` keyword inside the constructor function to point to that newly created object.
3. It adds properties and methods to the object using `this`.
4. Finally, it returns the newly created object (unless the constructor explicitly returns a different object).

That is the reason why we get a student object when we initialise the Student Constructor with `new keyword`

### The reason why this keyword working fine here with normal function and arrow function because new keyword has manually changed it to newly created object, So normal functions and Arrow functions both have same value of this keyword that is that newly created object.
