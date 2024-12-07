// Promise from Simran
const simranPronmise = new Promise( ( resolve, reject ) => {
    let parentDecision = false
    if( parentDecision ) {
        resolve( "Shadi ho rhi hai", parentDecision )
    }
    else {
        reject( "Papa got ias, sorry...", parentDecision )
    }
} ); // Simran promise puri ho chuki hai
simranPronmise.then( ( msg, pd ) => { // Resolve
    console.log( "Simran msg : ", msg )
    console.log( "Parent decision was", pd )
    console.log( "Lets book wedding hall" )
} ).catch( ( msg, pd ) => { // Reject
    console.log( "Simran msg : ", msg )
    console.log( "Parent decision was", pd )
    console.log( "Tinder kha ho yaar" )
} ).finally( () => console.log( "Clarity mili" ) )
//
// If all promises true = then next line
// Math.random() = Value between 0 and 1
const f1Promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        if( Math.random() > 0.5 ) {
            resolve( "F1 i will go" )
        }
        else {
            reject( "F1 Sorry i will not go" )
        }
    }, 3000 )
} )
const f2Promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        if( Math.random() > 0.5 ) {
            resolve( "F2 i will go" )
        }
        else {
            reject( "F2 Sorry i will not go" )
        }
    }, 5000 )
} )
const f3Promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        if( Math.random() > 0.5 ) {
            resolve( "F3 i will go" )
        }
        else {
            reject( "F3 Sorry i will not go" )
        }
    }, 2000 )
} )
Promise.all( [f1Promise, f2Promise, f3Promise] ).then( ( msg ) => {
    console.log( msg )
    console.log( "Yes wee r going goa" )
} ).catch( ( msg ) => {
    console.log( msg )
    console.log( "Plan cancel karte hai" )
} )
//
// promise.any function
const gf1Promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        if( Math.random() > 0.5 ) {
            resolve( "GF1 i will come fro dinner" )
        }
        else {
            reject( "GF1 Phone is switched off" )
        }
    }, 3000 )
} )
const gf2Promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        if( Math.random() > 0.5 ) {
            resolve( "GF2 i will come for dinner" )
        }
        else {
            reject( "GF2 i have other commitments" )
        }
    }, 5000 )
} )
const gf3Promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        if( Math.random() > 0.5 ) {
            resolve( "GF3 i will come for dinner" )
        }
        else {
            reject( "GF3 Sorry my friends are coming" )
        }
    }, 2000 )
} )
Promise.any( [gf1Promise, gf2Promise, gf3Promise] ).then( result => {
    console.log( result )
    console.log( "My valentine day is sorted" )
} ).catch( result => {
    console.log( result )
    console.log( "How to join bajrang dal" )
} )