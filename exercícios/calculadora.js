/**
 * Desenvolvimento de uma calculadora
 * @author Gabriel Coutinho
 */

const input = require ('readline-sync')

let a, b, opcao, restart

do{

console.clear()
console.log("Calculadora")

console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

a = Number(input.question("Digite o primeiro numero: "))
b = Number(input.question("Digite o segundo numero: "))

console.log("")
console.log("1. somar")
console.log("2. subtrair")
console.log("3. multiplicar")
console.log("4. dividir")
console.log("5. calcular a %")
console.log("")
opcao = Number(input.question("Digite a opcao desejada: "))

switch (opcao) {
    case 1:
        somar(a, b)
        break
    case 2: 
        subtrair(a, b)
        break
    case 3: 
        multiplicacao(a, b)
        break
    case 4: 
        divisao(a, b)
        break
    case 5: 
        porcentagem(a, b)        
    default:
        console.log("Nenhuma opção foi escolhida")
        break;
}


function somar(a, b) {
    return console.log (`A soma de ${a} + ${b} = ${a + b}`)        
}

function subtrair(a, b) {
    return console.log (`A subtração ${a} - ${b} = ${a - b}`)        
}

function multiplicacao(a, b) {
    return console.log (`A multiplicacao ${a} * ${b} = ${a * b}`)        
}
function divisao(a, b) {
    return console.log (`A divisao ${a} / ${b} = ${a / b}`)        
}
function porcentagem(a, b) {
    return console.log (`A porcentagem de ${a} % ${b} = ${(a * b) / 100} `)        
}
 restart = input.question("deseja fazer um novo calculo? (s/n) ")

} while (restart === `s`)