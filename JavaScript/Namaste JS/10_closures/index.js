function x () {
    let a = 10;

    function y () {
        console.log(a)
    }

    y()
    
}

// Function y forms a closure because it accesses its lexical environment (a from x), but in this case, the closure effect is not utilized since y() is executed immediately inside x()." But closure is formed here also.

function x () {
    let a = 10;

    return function () {
        console.log(a)
    }

}

const y = x()
y()
//logs 10,
//Here y is a closure function. Which means it remembers it's lexical environement even if it is executed outside it's scope. So function y is executed when there is no execution context of x is available in call stack. Execution context of x has been popped off from the call stack. And still we are available to access variavle a because a closure remembers it's lexical environment.



