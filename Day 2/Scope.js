/**
 * Global Scope
 */
var name = "Soumyadeep"
console.log( name )
function func() {
    console.log( name )
}
func()
// Local / Function Scope
function f() {
    var num = 55
    console.log( num )
}
f()
console.log( num ) // Out of scope
// Block Scope
{
    var x = 20 // var is not block scope
    console.log( x )
}
console.log( x )
//
{
    let x = 20 // let is not block scope
    console.log( x )
}
console.log( x )