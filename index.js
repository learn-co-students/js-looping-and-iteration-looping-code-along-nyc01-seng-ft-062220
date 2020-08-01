// Code your solutions in this file

function writeCards(names,eventName) {
let array = [];
    for (let counter = 0; counter < names.length; counter++) {
        array.push(`Thank you, ${names[counter]}, for the wonderful ${eventName} gift!`);
    }
return array;
}

function countDown(positiveInteger) {

    while (positiveInteger >= 0){
        console.log(positiveInteger);
        positiveInteger--;
    }
}