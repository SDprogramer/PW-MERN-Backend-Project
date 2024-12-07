let name = 'Soumyadeep'
// Index = 0 1 2 3 4 5 6...
let city = "Durgapur"
console.log( name, city) 
console.log( typeof name )
console.log( name[3] ) // 4th element
console.log( city[20] ) // Undefined Not Error
name[3] = 'k' // Once define can't change it
console.log( name, city) 
//
console.log( name.length )
//
let first_name = "Soumyadeep"
let last_name = "Dey"
let full_name = first_name.concat( last_name )
console.log( full_name )
//
console.log( full_name.toUpperCase() )
//
console.log( name.charAt( 3 ) )
//
// Slicing
console.log( full_name ) // first idx = 0
console.log( full_name.slice( 2 ) ) // a to last
console.log( full_name.slice( 2, 5 ) ) // a to b-1
console.log( full_name.slice( -5 ) ) // right to left
console.log( full_name.slice( -5, -1 ) ) // last idx = -1
//
// indexOf
console.log( name.indexOf( 'm' ) )
console.log( name.indexOf( 'z' ) ) // If given char not found = -1
//
// Trim
let word = " Dey "
console.log( word )
console.log( word.trim() )
//
// Split = String to array of character
name = "Soumya deep Dey"
console.log( name.split( " " ) )
console.log( name.split( "" ) )