var num = 20
if( num%2==0 ) {
    console.log( "even" )
}
else {
    console.log( "odd" )
}
// Ternary op if - else
num%2==0 ? console.log( "even" ) : console.log( "odd" )
// Nested conditions
var no = 10
if( no>=0 ) {
    if( no>5 ) {
        console.log( "number is greater than 0 and 5" )
    }
}
else {
    console.log( "number is less than 0" )
}