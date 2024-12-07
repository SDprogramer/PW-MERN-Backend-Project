// Function with no argument or no return
var hello = () => console.log( "Hello Students!" )
hello()
// () = argument / parameter
// console.log = function name
var sum = ( a, b ) => a + b
console.log( sum( 5, 7 ) )
var process = ( a, b ) => {
    console.log( "Need to process!" )
    console.log( arguments ) // Dont have arguments
    return a * b
}
console.log( process( 2, 3 ) )
/**
 * 
 */
// IIFE = Immediately Invoked Function Expression
( function() {
    console.log( 'hello students' )
}) ()