/*

    - FOR
        1) INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial pra ela
        2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                        Ele irá verificar antes de cada iteração
        3) EXPRESSÃO FINAL - o que irá ocorrer a cada vez que o nosso laço der uma volta

        for ([inicialização]; [condição]; ]expressão final)

*/

const users = ['Cleber', 'Rodolfo', 'Larissa', 'Paula']

for(let i = 0; i < users.length; i++) {
    console.log(users[i])
}