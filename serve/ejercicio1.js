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
  ];

 console.log('array original', orders);
  const rta1 =  orders.map(item => item.total)
 console.log('rta1', rta1);

//  const rta2 =  orders.map(item => {
//     item.tax = .19;
//     return item
//  })

//  console.log('rta2', rta2);

 const rta3 =  orders.map((item) => {
    return {
        // vamos a clonar o copiar los atributos del objeto sin al referencia en memoria
        ...item,
        tax: .20
    };
 });
 console.log('rta3', rta3);
 console.log('array original para ver si no quedo mutado', orders);


