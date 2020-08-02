// Code your solutions in this file
function writeCards (names, event) {
    let thankyous = []
    
    for (let i =0; i < names.length; i++) {
       thankyous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankyous
}

function countDown (integer) {
    let i = 0
    while (integer >= i) {
        console.log(integer--)
    }
}