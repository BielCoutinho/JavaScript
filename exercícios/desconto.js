/**
<<<<<<< HEAD
 * Calculo do valor de desconto
 * @author Gabriel Coutinho
 */

const input = require ('readline-sync')
let totalDesconto,total,desconto

console.clear()
console.log("calculo do valor do desconto")


//entrada
total = Number(input.question("digite o valor da compra"))
desconto = Number(input.question("digite o valor do desconto %: "))

//processamento
totalDesconto = total - ((desconto * total / 100))

//saida
console.log (`total com desconto: R$ ${totalDesconto.toFixed(2)}`)
