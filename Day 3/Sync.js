// Synchronous execution = One after another
// Call stack execution [ LIFO ]
console.log( "Hello 1st line" )
function hello() {
    console.log( "Hello from func" )
}
hello()
console.log( "Hello last line" )