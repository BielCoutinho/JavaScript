/**
 * EXERCÍCIO - Calculo da distancia
 * @author Gabriel COutinho
 */


// importar a biblioteca read-linesync
const input = require('readline-sync')

// variáveis

let distancia, combustivel, media

console.clear()
console.log("Cálculo da distancia")

// entrada 
// No console, entradas(input) númericas precisam ser convertidas com uso do método Number() 
num1 = Number (input.question("Digite a distancia percorrida(KM): "))
num2 = Number (input.question("Digite a quantidade de combustivel consumido(L): "))


// processamento
media = (num1 / num2) 

// saída 
console.log(`Média: ${media.toFixed(1)}`)