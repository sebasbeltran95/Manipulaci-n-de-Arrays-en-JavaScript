const totals = [1,2,3,4];

let sum = 0;

for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum =  sum + element
}

console.log('usando el for',sum);


const rta = totals.reduce((sum, item) => sum + item, 0);

console.log('usando el reduce',rta);








