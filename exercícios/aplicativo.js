const input = require ('readline-sync')

let alcool, gasolina

console.clear
console.log("Calculadora Álcool x Gasolina")

alcool = Number (input.question("alcool (preco por litro): "))
gasolina = Number (input.question("gasolina (preco por litro): "))


if (media < 0.7 * gasolina) {
    console.log("Abastecer com alcool")
} else {
    console.log("Abastecer com gasolina")
}