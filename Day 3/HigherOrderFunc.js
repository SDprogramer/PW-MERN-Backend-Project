function operation( operatorFn, a, b ) { 
    // operation func = Higher order function -> Any func which takes func as an argument
    return operatorFn( a, b )
}
function add( a, b ) {
    return a + b
}
let result = operation( add, 5, 6 ) 
console.log( result )
//
// Another method
function getGreetMethod() {
    return function() {
        console.log( "Hello" )
    }
}
let greetFn = getGreetMethod()
console.log( typeof greetFn )
greetFn()