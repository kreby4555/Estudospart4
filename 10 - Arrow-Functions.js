/*

Arrow Functions

function padrão -> function() {}
arrow function -> () {}

Não escrevemos "function"
Além disso, usamos o sinal "=>" para criá-la,
o que lembra uma flecha, fazendo jus ao nome "Arrow Functions"

*/

function sum(number1, number2) {
    return number1 + number2
}

const soma = (number1, number2) => number1 + number2 // código na mesma linha, não precisamos usar o return

console.log(sum(1, 2))

console.log(soma(2,3))