// Asynchronous processing
console.log( "Hello 1st line" )
setTimeout( () => { // call back function -> func pass as an argument to another func
    console.log( "Hello func line" )
}, 3000 ) // 3 milliseconds
console.log( "Hello last line" )