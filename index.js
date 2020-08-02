// Code your solutions in this file
const writeCards = (nameArrayString, eventString) => {
    const cardArray = []
    for (let i = 0; i < nameArrayString.length; i++) {
        cardArray.push(`Thank you, ${nameArrayString[i]}, for the wonderful ${eventString} gift!`)
    }
    return cardArray
}

const countDown = integer => {
    while (integer >= 0) {
        console.log(integer)
        integer --
    }
}