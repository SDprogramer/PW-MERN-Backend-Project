// VAR
function f1() {
    var i = 5
    console.log( i ) // Local scope
}
f1()
// console.log( i ) => ERROR
//
{
    var j = 6
}
console.log( j )
//
console.log( k )
var k = 23 // Hoisted but value undefined
//
// LET
console.log( l )
let l = 3 // ERROR
//
{
    let name = "Soumyadeep"
}
console.log( name ) // ERROR
//
// CONST
const country = "India"
country = "USA" // ERROR