# Shortest Program in JS

Shortest in JS is an empty JS File. When we create and execute an empty JS File in browser, the JavaScript Engines still create the Global Execution Context and Global Object.

In case of browers the GlobalObject refers to Window Object which has many built in methods and property attach to it.

In the Global scope the `this` keyword also refers to this window object

Any variable and function that we create in global space gets attach to `window` object and can be accessed as `window.addedFunctionOrVariable`