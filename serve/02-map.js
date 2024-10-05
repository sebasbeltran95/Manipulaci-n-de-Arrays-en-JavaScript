const letter = ['a', 'b', 'c'];

const newArray = [];

for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    newArray.push(element + '++');
}

console.log('Array original', letter);
console.log('nuevo Array', newArray);








