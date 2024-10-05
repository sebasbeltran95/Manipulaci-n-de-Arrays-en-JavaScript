const items = [1,3,2,3,3,1,10]; 

const rta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log('reduce reloaded', rta);

//output o lo que yo espero

// {
//     '1': 1,
//     '3': 2,
//     '2': 1
// }



const data = [
    {
        name:"Nicolas",
        level: "low"
    },
    {
        name:"Andrea",
        level: "medium"
    },
    {
        name:"zulema",
        level: "hight"
    },
    {
        name:"santiago",
        level: "low"
    },
    {
        name:"valentina",
        level: "medium"
    },
    {
        name:"lucia",
        level: "hight"
    }
];

const datos = data.map(item => item.level);

const rta1 = datos.reduce((obj1, item) => {
    if(!obj1[item]){
        obj1[item] = 1;
    } else {
        obj1[item] = obj1[item] + 1;
    }
    return obj1;
}, {});

console.log('array primitivo', datos);
console.log('reduce No 2', rta1);



const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log('reto',result);









