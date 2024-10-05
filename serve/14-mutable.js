const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex =products.findIndex(item => item.id === '🍔');
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    // eliminar la hamburguesa den products
    // necesitamos tener la ubicacion del elemento, el segundo parametro es cuantos
    // elementos quiero eliminar a partir de esa ubicacion
    // products.splice(2, 1)
    products.splice(productIndex, 1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// --------------------------------------------------------------------------------------------------------

// update 

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update ={
     id:"🥞",
     changes: {
        price: 200,
        description: 'delicioso'
     }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes, 
};

console.log('cambio ', productsV2);












