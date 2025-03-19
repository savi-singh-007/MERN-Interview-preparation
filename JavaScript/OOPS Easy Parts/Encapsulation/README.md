### Encapsulation

Encapsulation is a way in OOP by which we make some properties & methods of a class private so that we can hide these properties & methods outside that class. Which means any object instance can't access these properties & methods nor they got inherited to child classes using sub-classing.

We use Encapsulation so that we can hide internal details of the class and avoid other program changing them directly

Although we stil need to access this property or need to update them. We use getter and setter for it instead of trying to update them directly.

**Note :- The `private` keyword that we use in Typescript only makes property & methods private during development time, that is it only identifies at compile time not after compilation done and js files created. To really make the properties and methods private for JS code also use `#`**
