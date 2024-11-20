/**
 * Tabuada usando a estrutura While
 * @author Gabriel Coutinho
 */

const input = require('readline-sync')
let valor 
let i = 1 // apoio a lógica e laço while

console.clear()

console.log("Tabuada While")

valor = Number(input.question("Digite p valor da Tabuada: "))

while (i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}