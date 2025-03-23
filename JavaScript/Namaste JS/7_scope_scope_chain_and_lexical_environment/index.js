var x = 10
a()
function a() {
    b()
    function b() {
        console.log(x)
    }
}