/**
 * PDV
<<<<<<< HEAD
 * @author Gabriel Coutinho
 */

const input = require(`readline-sync`)
  

console.log("___   ___   _     ")
console.log("| |_) | | \\ \\ \\  / ")
console.log("|_|   |_|_/  \\_\\/  ")

//entrada 1
total = Number(input.question("digite o valor total da compra"))
desconto = Number(input.question("digite o valor total do desconto %: "))

//processamento 1
valorDesconto = total - (desconto * total) / 100

//processamento 2
totalDesconto = total - valorDesconto

//saida
console.log("")
console.log("---------------")
console,log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: R$ ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")

//entrada 2
valorPago = Number(input.question("valor em dinheiro pago pelo cliente: "))