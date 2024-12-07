const user = {
    name : "Sd",
    age : 20,
    city : "Durgapur"
}
// Accessing the data
console.log( user.name )
console.log( user['name'] ) // name = key
// Adding data to the object
user.country = "India"
user['continent'] = "Asia"
console.log( user )
// Deleteing key of an object
delete user.country
delete user['continent']
console.log( user )
//
// Iterate an object
let person = {
    name : "Sd",
    age : 20,
    address : {
        city : "Durgapur",
        state : "West Bengal",
        country : "India"
    }
}
for(let key in person ) {
    console.log( key )
}
for(let key in person ) {
    console.log( key, "=>", person[key] )
}
// 
// Array of the elements of an object
console.log( Object.keys( person ) )
// Array of values
console.log( Object.values( person ) )
// Get both keys and values
console.log( Object.entries( person ) )
//
// Clonning an object using assign func
const new_person = Object.assign( {}, person )
console.log( new_person )
//
const new_person_1 = Object.assign( {}, person, {role : "Manipulator"} )
console.log( new_person_1 )