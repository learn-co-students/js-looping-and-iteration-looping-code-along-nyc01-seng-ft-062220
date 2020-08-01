// Code your solutions in this file

function writeCards(array, event){
    return array.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

function countDown(num){
    while (num >= 0) {
       console.log(num);
       num--;
    }
}

console.log(countDown(3))