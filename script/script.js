const val = [
    {user: "Andrei"},
    {user: "Andrei", id: 2},
    {user: "Ion"},
    {user: "Gicu"},
];



const andrei = val.find(item => item.user === 'Andrei' && item.id === 2)
console.log(andrei)