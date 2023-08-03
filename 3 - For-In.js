/**
    Estrutura de Repetição - LOOP
        - FOR IN
 */

const users = {name: 'Cleber', age: 21, street: 'Rua Pau Barsil'}

// user.name -> Cleber
// user['name'] -> Cleber

for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}