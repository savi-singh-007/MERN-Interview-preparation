var x = 10;

a() // 20
b() // 30
console.log(x) // 10

function a() {
    var x = 20;
    console.log(x)
}

function b() {
    var x = 30
    console.log(x)
}