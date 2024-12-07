// Array = You can store data of different types
arr = [1, 2, 3]
console.log( typeof arr )
arr1 = new Array()
console.log( typeof arr1 )
console.log( arr1 )
//
// Elements aaccess in array
arr = [1, 2, 3, 4, 9, 8, 7, 19, 21, 29, 20] // idx = 0 to size-1
console.log( arr[0] )
console.log( arr[7] )
console.log( arr[21] ) // undefined
console.log( arr[-1] ) // undefined
arr[1] = 200 // Arrays are mutable
console.log( arr )
//
arr = [5, 2, 1, 9, 8, 16]
arr.push( 11 ) // after last number : insert a n idx
console.log( arr )
arr.push( 99, 100, 101 ) // push allowys add multiple elements at end
console.log( arr )
//
// Unshift method : add at front
arr.unshift( 999 )
console.log( arr )
arr.unshift( 999, 45, 77 ) // Multiple elements at beginning
console.log( arr )
//
// Remove elements
arr = [5, 2, 1, 9, 8, 16]
// pop func
console.log( arr.pop() ) // Only print last element
console.log( arr )
// shift func
console.log( arr.shift() ) // Only print first element
console.log( arr )
//
// Array addition : concat
let a1 = [1, 2, 3]
let a2 = [5, 6]
let r = a1.concat( a2 )
console.log( r )
//
// Size of array
console.log( a1.length )
//
// Convert array into strings
chr_arr = ['r', 'i', 'c', 'k', ' ', 'd', 'e', 'y']
// Use join func
console.log( chr_arr.join() )
console.log( chr_arr.join( "" ) ) // ""-> seperator
console.log( chr_arr.join( "^" ) )
console.log( chr_arr.toString() )
console.log( typeof chr_arr.toString() )
//
// Slicing of arrays
// Same as strings
// 0 to n-1
// -1 to -n
// a to n
// a to b-1
// Slicing does not change existing array : no modify
//
// Splicing : modify array
let nos = [1, 2, 3, 4, 5]
let remove = nos.splice( 2, 2 )
// From 2nd idx splice two elements
console.log( remove )
console.log( nos ) // nos -> modified
remove = nos.splice( 1, 5 )
console.log( remove )
console.log( nos ) // nos -> modified
let nos1 = [1, 2, 3, 4, 5]
let remove1 = nos1.splice( 2, 2, 9, 11, 13 ) // Good
console.log( remove1 )
console.log( nos1 )
//
// Reverse a given array
let nums = [4, 1, 5, 9, 2]
nums.reverse()
console.log( nums )
//
// Accessing an element
nums = [4, 1, 5, 7, 19, 2]
console.log( nums.indexOf( 19 ) )
console.log( nums.indexOf( 190 ) ) // return -1
//
// Sorting the array
let my_arr = [15, 48, 1, 32, 2]
// Always use sorting logic
my_arr.sort( ( a, b ) => a-b ) // Samne sorting
console.log( my_arr )
my_arr.sort( ( a, b ) => b-a ) // Piche sorting
console.log( my_arr )