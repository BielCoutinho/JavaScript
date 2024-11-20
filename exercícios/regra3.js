/**
<<<<<<< HEAD
 * Regra 3
 * @author Gabriel Coutinho
 */

const input = require('readline-sync')

//variaveis
let x, y, valor

console.clear
console.log("regra de 3")
console.log("x% de y = valor")

//entrada
x = Number(input.question("digite o valor de x:"))
y = Number(input.question("digite o valor de y:"))


//procesamento
valor = (x * y) / 100

//saida
console.log(`o valor obtido é: ${y}% de ${y} = ${valor.toFixed(2)}`)
