/**
 * Consumo de aguá
 * @author Gabriel Coutinho
 */

const input = require ('readline-sync')
console.log(typeof(input))

let consumo, peso




peso = Number(input.question("digite o seu peso em kg: "))

consumo = peso * 0.35

console.log (`Consumo diario de aguá deve ser: ${consumo.toFixed(2)}`)