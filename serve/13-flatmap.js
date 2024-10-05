const users = [
    {
        userId:1,
        username: "Tom",
        attributes: [
            "Nice",
            "Cute"
        ]
    },
    {
        userId:2,
        username: "Mike",
        attributes: [
            "Lovely",
        ]
    },
    {
        userId:3,
        username: "Nico",
        attributes: [
            "Nice",
            "Cool"
        ]
    }
];

const rta = users.map(user => user.attributes).flat();
console.log('map-flat: ', rta);

// ---------------------------------------------------------------------------

const rta2 =  users.flatMap(user => user.attributes);
console.log('flatMapt: ', rta2);

// ---------------------------------------------------------------------------

const calendars = {
    primaryCalendar: [
        {
            starDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 30),
            title: "Cita 1",
        },
        {
            starDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secundaryCalendar: [
        {
            starDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 30),
            title: "Cita 3",
        },
        {
            starDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ]
}

const rta3 =  Object.keys(calendars);
console.log('rta3', rta3);
// ---------------------------------------------------------------------------

const rta4 =  Object.values(calendars);
console.log('rta4', rta4);
// ---------------------------------------------------------------------------

const rta5 =  Object.values(calendars).flat();
console.log('rta5', rta5);
// ---------------------------------------------------------------------------

const rta6 =  Object.values(calendars).flatMap(item => {
    console.log('item', item);
    return item.map(date => date.starDate);
});
console.log('rta6', rta6);





























