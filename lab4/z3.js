const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]
const newMyUsers = myUsers.map(v => ({[v.name]:[v.likes].toString(), age:([v.name].toString().length)*10}))
console.log(newMyUsers)