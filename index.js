// Code your solutions in this file

const names = ["Lisa", "Kaitlin", "Jan"];
const events = ["surprise"]

function writeCards(names, events) {
    let card_array = [];
    for (let i = 0; i < names.length; i++) {
        card_array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return card_array;
}

writeCards(names,events)


function countDown(i) {
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log(i);
}
