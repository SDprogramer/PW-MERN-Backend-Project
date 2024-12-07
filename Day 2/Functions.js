// Define a function
function hello() { // keyword
    console.log( "Hello Students!" )
}
hello()
/**
 * Func name = lower case
 *             no space
 *             paranthesis = parameter
 **/
// Sum of two numbers
function sum( a, b = 5 ) { // Default value
    return a + b;
}
console.log( sum( 4, 7 ) )
console.log( sum( 3 ) ) // NaN
// 4, 7  = arguments
function func() { // Pass values to func
    console.log( arguments ) // Argument objects
}
func( 1, 2, 3, 4, 5, 6, 7 )