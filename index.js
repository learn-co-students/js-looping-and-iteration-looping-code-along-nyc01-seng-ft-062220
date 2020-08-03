// Code your solutions in this file
function writeCards(names,event){
    const swag = []
    for (let i = 0; i < names.length; i++){
        swag.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return swag
}

function countDown(number){

    let  i = 0;
    while (i < number+1){
   console.log(number - i);
   i ++
};

}

