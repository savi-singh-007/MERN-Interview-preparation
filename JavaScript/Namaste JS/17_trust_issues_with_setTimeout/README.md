# SetTimeout

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer Callback");
}, 5000);

console.log("End");
```

A delay of 5000 ms doesn't mean that this callback inside the setTimeout will get executed immediately after completion of 5 seconds. It is the minimum time after which it get executed beacause once timer is expired and still there is something executing inside the call stack than event loop has to wait till call stack is empty and then only push this callback which is in callback queue to callstack.

#### Blocking the main thread for 10 seconds

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer Callback");
}, 5000);

let startTime = new Date().getTime();
const endTime = startTime + 10000;

while (endTime > startTime) {
  startTime = new Date().getTime();
}

console.log("while loop ended");

console.log("End");

// Output
/* 
Start
While loop ended
End
undefined
Timer Callback 
*/
```

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer Callback");
}, 0);

console.log("End");

// Output
// Start
// End
// Timer Callback
```
