const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log('meses del año ',months);
// --------------------------------------------------------

const numbers = [1, 30, 4, 21, 100000];
const numbers1 = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b);
numbers1.sort((a,b) => b -a );
console.log('a - b ', numbers);
console.log('b - a ', numbers1);
// --------------------------------------------------------

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const words1 = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort();
console.log('words ', words);
// esto es para navegadores no modernos 
words1.sort((a,b) => a.localeCompare(b));
console.log('navegadores viejos ', words1);

// --------------------------------------------------------
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a, b) => b.total - a.total);
console.log('ordenes ', orders);

















