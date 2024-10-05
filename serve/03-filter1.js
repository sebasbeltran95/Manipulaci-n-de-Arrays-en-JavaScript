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


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 240,
        delivered: true,
      },
  ];

const rta3 = orders.filter(item => item.delivered == true && item.total > 100);

console.log('rta3', rta3)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}

console.log('filtro search',search('Nico'));



