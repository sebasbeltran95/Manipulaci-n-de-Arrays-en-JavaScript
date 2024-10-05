const numbers = [1,2,3,4];

let rta = false ;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    if (element % 2 === 0) {
        rta = true;
        break;
    }

}

console.log('respuesta 1 ', rta);

// ----------------------------------------------------------------------------------------------------------------------------------------------
// si el item que esta evaluando en ese momento su residuo de la division entre 2  es == a cero, aca vamos a optener la respuesta
let rta2 =  numbers.some(item => item % 2 === 0);

console.log('respuesta 2',rta2);

// ----------------------------------------------------------------------------------------------------------------------------------------------


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

  let rta3 =  orders.some(item => item.delivered);

console.log('respuesta 3 ', rta3);

// ----------------------------------------------------------------------------------------------------------------------------------------------

const dates = [
  {
    starDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 15, 11),
    title: "Cita de trabajo",
  },
  {
    starDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    starDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 15, 21),
    title: "Cena",
  },
];

const newAppointment = {
  starDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 15, 30),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
  return  dates.some(date => {
    return areIntervalsOverlapping(
      {star: date.starDate, end: date.endDate},
      {star: newDate.starDate, end: newDate.endDate},
    )
  })
}

console.log('utilizando la libreria date-fns:  ',isOverlap(newAppointment));


