# undefined V/s not defined

`undefined` is a special keyword in JavaScript. It is one of the 7 permitive data types.
When we declare any variable with `var` keyword or any function expression with `var` keyword
it is initialised with the value `undefined` during Variable Environment Phase and keep holding this value until the variable is initialised in the program during `Thread of Execution`. It does take memory aalocation and treated like a value.

On the other hand not defined is a Referrence Error. When we try to access a variable and it is not prersent then JS interpreter will throw this error that variable is not defiended.

Note:- JavaScript is a Dynamicaly Typed Programming language. It is also known as loosely typed or weakly typed programming language because we do not have to provide the data type explicity, it is determined on the runtime and one variable can first hold a string then a number then object, no such restrictions.
