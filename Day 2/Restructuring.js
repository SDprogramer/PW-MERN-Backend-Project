// Destructuring in arrays
const nums = [1, 2, 3]
const [a, b, c, d] = nums
console.log( a )
console.log( b )
console.log( c )
console.log( d ) // Undefined
// Nested array
const [p, q, r] = [1, 2, [4, 5, 6] ]
console.log( p )
console.log( q )
console.log( r )
//
// Dstructure an object
const per = {
    age : 20,
    name : "Sd",
    city : "Durgapur",
    address : {
        state : "WB",
        country : "India"
    }
}
const { name, age, hobby, address } = per
console.log( name )
console.log( age )
console.log( hobby ) // Variables name should match with keys of the object
console.log( address )
// Nested entries
const { address : { state, country } } = per
console.log( state )
console.log( country )