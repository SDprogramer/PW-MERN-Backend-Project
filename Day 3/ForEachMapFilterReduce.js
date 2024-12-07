// forEach function method
players = [ "SD", "Rick", "Soumyadeep", "Dey" ]
players.forEach( ( player ) => console.log ( player ) )
//
// map function method -> Creation of a new transformed array
arr = [ 1, 2, 3, 4, 5, 6 ]
cube_arr = arr.map( num => num * 3 )
console.log( arr )
console.log( cube_arr )
//
// filter function method
arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let even_arr = arr1.filter( ( num ) => num % 2 == 0 )
console.log( arr1 )
console.log( even_arr )
//
// reduce function method
const sum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].reduce( ( curr, next ) => curr + next )
console.log( sum )