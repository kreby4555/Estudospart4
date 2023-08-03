/*

    ForEach(item, index, array)

*/

const users = [
    {name: 'Cleber', age: 21,  number: '(12) 98134-7678'},
    {name: 'Paula', age: 41, number: '(21) 98765-0987'},
    {name: 'Yuri', age: 17,  number: '(12) 90087-9123'},
    {name: 'Cleber', age: 27, number: '(12) 98134-7678'},
  
]
users.forEach(function(item, index) {
    console.log(`${index + 1}) Nome: ${item.name}, Iadade:${item.age}, TEL:${item.number}`)
});