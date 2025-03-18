### Prototype

1. Every object instance that we create has a prototype property which conatins built in methods and property on that object.

2. But in case of Constructor functions, we need to access these property via prototype property.

This prototype contains these additional properties and method which we can access without explicitly creating them.

```javascript
const obj = {};
Object.prototype === obj.__proto__;

const arr = new Array();
Array.prototype === arr.__proto__;

const str = new String();
str.prototype === str.__proto__;
```
