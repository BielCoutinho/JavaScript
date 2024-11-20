/**
<<<<<<< HEAD
 * calculo 
 */

//importar a biblioteca read-linesync
const input = require ('readline-sync')

//variaveis
let troco, valorPago, total

//entrada 
valorPago, total

total = Number (input.question("digite o valor total da compra: "))
valorPago = Number (input.question("digite o valor que o cliente pagou: "))

//processamento
troco = (valorPago - total)

//sáida
troco
console.log(`valor que receberá de troco é: R$ ${valorPago - total.toFixed(2)}`)