// Code your solutions in this file

const names = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(names) {
    let thankYou = []
    let i = 0;
    while (i < names.length) {
      thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      i++;
    }
   return thankYou
  }
   
  writeCards(names);

function countDown(num) {
    for (let i = 0; i <= num; num--) {
        console.log(num);
    };
}

countDown(num);
