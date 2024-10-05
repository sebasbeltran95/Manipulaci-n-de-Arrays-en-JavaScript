const word = ['spray', 'limit', 'elite','exubuerante'];

const newArray = [];

for (let index = 0; index < word.length; index++) {
    const item = word[index];
    if(item.length >= 6){
        newArray.push(item);
    }
}

console.log('array original',word);
console.log('newArray',newArray);

const rta = word.filter(item => item.length >=6 );

console.log('array original',word);
console.log('rta',rta);









