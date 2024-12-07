for( var i=0; i<10; i++ ) {
    console.log( "Students!" )
}
var j = 0
while( j<10 ) {
    console.log( "Hello" )
    j++
}
for( var k=0; k<50; k++ ) {
    if( k%2==0 ) {
        continue
    }
    else {
        console.log( k )
    }
}
for( var x=0; x<10; x++ ) {
    for( var y=0; y<10; y++ ) {
        if( y%2!=0 ) {
            continue
        }
        console.log( y )
    }   
}
for( var z=0; z<10; z++ ) {
    if( z==5 ) {
        break
    }
    console.log( "Hey " + z + " lets date" )
}