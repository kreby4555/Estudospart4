/*
    Function / Funções

    - Função void(vazia), não retorna nada
    - Função return, retorna um valor para quem chamou a função

*/

function soma(value, value2) {
    const result = value + value2
    return result
}
console.log(`A soma é: ${soma(10, 20)}`)







/*
    Calcula Desconto:
    Todos os produtos acima de R$ 30,00 tem desconto de 10%
*/

const cart = [10, 244, 99, 33, 2, 20,]
let finalValueDescount = 0
let valorTotal = 0

function somaTotal(item) {
    valorTotal += item
    return valorTotal
}

cart.forEach(value => {
    somaTotal(value)

});

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueDescount = finalValueDescount + (value - discount)
    } else {
        finalValueDescount += value
    }

});

console.log(`O valor final da compra foi de: R$ ${valorTotal}
o valor com desconto foi de: R$ ${finalValueDescount}`)