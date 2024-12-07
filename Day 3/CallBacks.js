// call backs = func passed to another func as an argument
function greet( name, callback ) {
    const greeting = "Hello " + name
    callback( greeting )
}
function displayGreeting( message ) {
    console.log( message )
}
greet( "SD", displayGreeting )
//
// Call Back Hell = Pyramid of doom ( Avoid )
/*
getUser( function( user ) {
    getPopsts( user.id, function( post ) {
        displayInfoAndPost( user, post, function() {
            console.log( "User info and post dispalyed" )
        })
    })
}) */