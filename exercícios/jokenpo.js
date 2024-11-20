/**
 * Jokenpo
 * @author Gabriel Coutinho
 */

const input = require('readline-sync')

let jogador, computador, opcao

do {
    console.clear()
console.log("_________jokenpo________")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")



// Lógica do jogador

jogador = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu PEDRA")
        break
    case 2:
        console.log("Jogador escolheu PAPEL")
        break
    case 3:
        console.log("Jogador escolheu TESOURA")
        break
    default:
        console.log("Opção inválida")
        break
}

// Lógica do computador

computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("computador escolheu PEDRA")
        break
    case 2:
        console.log("computador escolheu PAPEL")
        break
    case 3:
        console.log("computador escolheu TESOURA")
        break
    default:
        console.log("Opção inválida")
        break
}

// Lógica para determinar o vencedor ou declara empate
if (jogador === computador) {
    console.log("Empate")
} else if (jogador === 1 && computador === 3 || jogador === 2  && computador === 1 || jogador === 3 && computador === 2) {
    console.log("Jogador VENCEU")
} else{
    console.log("Computador VENCEU")
}

opcao = input.question("Deseja Jogar Novamente? (s/n) ")

} while (opcao === 's');


