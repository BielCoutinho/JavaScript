
const input = require('readline-sync')


let idade

console.clear()
console.log ("Verificação de voto")

idade = 70

console.log(`Idade: ${idade}`)


if (idade < 16) {
    console.log("Proibido Votar")
} else if (idade === 16 || idade === 17 || idade > 70) {
    console.log("Voto Facultativo")
} else {
    console.log("Voto Obrigatório")
}