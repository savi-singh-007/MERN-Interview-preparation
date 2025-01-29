### Single Responsibility Principle (SRP)

It says that a class should have only one reason to change. Do not confuse it with that a class should have only one
method. A class can have multiple methods but if they are all related to the same reason to change then it is a good design and follows the SRP.

### For example :-

In our problem-statement a class called Order has methods for addProduct, getProduct and removeProduct which  follows the SRP because they all are related to same reason product. But adding the generateInvoice, PaymentProcessing and calculatePricing methods in the same class will violate the SRP because they are related to different reasons. A payment method can be changed due to any reason which is not related to products and same goes for generateInvoice. Similiarly the Pricing calculation can also depend on other factors for example on exchange rate, Thus voilating the SRP.

### Solution 
Create seperate classes for different reasons