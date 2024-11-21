/**
 * Carro
 * @author Gabriel Coutinho
 */

console.clear()

class Carro {
    constructor(ano, cor,) {
        this.ano = ano
        this.cor = cor
        
    }

    criarCarro() {
        console.log("---------------------------------------")
        console.log("🚗")
        console.log(`Ano: ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
    }
    ligar() {
        console.log("O carro está ligado")

    }
    desligar() {
        console.log("O carro está desligado")

    }
    acelerar() {
        console.log("O carro está acelerando")

    }
}

class Aviao extends Carro {
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }
    criarAviao() {
        console.log("---------------------------------")
        console.log("✈️")
        console.log(`Ano: ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Envergadura: ${this.envergadura} metros`)


    }
    aterrizar() {
        
        console.log("Avião aterrissando")

    }
    acelerar() {
        console.log("Avião decolando")
    }
}

const carro1 = new Carro(2024, "Azul")
carro1.criarCarro()
carro1.ligar()

const carro2 = new Carro (2022, "Verde")
carro2.criarCarro()
carro2.acelerar()

const aviao1 = new Aviao (2023, "Amarelo", 30)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelerar()


