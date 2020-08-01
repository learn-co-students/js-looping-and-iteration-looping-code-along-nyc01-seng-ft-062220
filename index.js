

function writeCards(array, event) {

    let thank_you_array = []

    for (let i = 0; i < array.length; i++) {
        thank_you_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thank_you_array
}


function countDown(number) {
    for (let i = number + 1; i === 0, i--;) {
        console.log(i)
    }
}