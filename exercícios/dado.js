/**
 * Exemplo do uso do método para gerar número aleatórios e uso da estrutura while
 * jogo do dado
 * @author Gabriel Coutinho
 */

const input = require('readline-sync')

let face, opcao

do {
    console.clear()
    console.log("Jogo do dado")
    input.question("Pressione a tecla [ENTER] para jogar o dado")

    //Sorteio da face de um dado
    // Math classe mattemética
    // Floor() conversão para números interios 
    // Random * (gerador de números aleatórios)

    face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
    console.log(`Face do Dado: ${face}`)

    opcao = input.question("Deseja Jogar Novamente? (s/n) ")
} while (opcao === 's');

