/* function hello() {
    let name = "SD"
    console.log( name )
}
hello()
console.log( name ) // Out of scope
*/
// Closure concept
function outerFn() {
    let outerVar = "I am from outer func"
    function innerFn() {
        console.log( outerVar )
    }
    return innerFn
}
let fn = outerFn() // All local variables destroyed
fn() // Am still able to hold local variable of outer func
//
function CustomerCounter() {
    let count = 0
    // Anonymous inner func
    return function() { // Encapsulation
        count++
        console.log( "New customer count is", count ) // Closure
    }
}
let counter = CustomerCounter()
counter()
counter()
counter() // Mantain correct count