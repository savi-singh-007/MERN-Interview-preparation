### Open-Close Principle
It says that our classes, functions and methods should be closed for modification and but open for extensions.It should be easy to add new features without changing the existing code.

Like in our problem statement, in paymentProcessor function whenever we have to add a new payment method we need to modify the method itself which means open-closes principle violates. this can be solved using dependency injection as shown in the solution.