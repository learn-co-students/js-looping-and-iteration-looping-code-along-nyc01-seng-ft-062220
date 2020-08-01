// Code your solutions in this file



function writeCards(namesArray, event) {
    const cardsArray = []
    for (let i = 0; i < namesArray.length; i++) {
        cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return cardsArray;

}

function countDown(int){
    while (int >= 0) {
        console.log(int)
        int--    
    }
}