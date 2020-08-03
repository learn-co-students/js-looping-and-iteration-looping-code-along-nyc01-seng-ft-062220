// Code your solutions in this file
function writeCards(names,event) 
    { let cardsarray = []
    for (let g = 0; g < names.length; g++)
    { cardsarray.push(`Thank you, ${names[g]}, for the wonderful ${event} gift!`)
    } return cardsarray }; 

function countDown(integer){
    while (integer > -1) 
    {console.log(integer--);
    };
}

