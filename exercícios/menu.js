/**
 * Exemplo de uso da estrutura switch case
 * @author Gabriel Coutinho
 */

const input = require('readline-sync')

let opcao 

console.clear()
console.log("BOOT")
console.log("1. Carregar o sistema Windows")
console.log("2. Carregar o sistema Linux")

opcao = Number(input.question("Digite a opcao desejada: "))

switch (opcao) {
    case 1:
        console.clear()
        console.log("Carregando o sistema Windows.......")
        break
    case 2:
            console.clear()
            console.log("  .88888888:.")
            console.log("   88888888.88888.")
            console.log("  .8888888888888888.")
            console.log("  888888888888888888")
            console.log("  88' _`88'_  `88888")
            console.log("  88 88 88 88  88888")
            console.log("  88_88_::_88_:88888")
            console.log("  88:::,::,:::::8888")
            console.log("  88`:::::::::'`8888")
            console.log(" .88  `::::'    8:88.")
            console.log("8888            `8:888.")
            console.log(".8888'             `888888.")
            console.log(".8888:..  .::.  ...:'8888888:.")
            console.log(".8888.'     :'     `'::`88:88888")
            console.log(".8888        '         `.888:8888.")
            console.log("888:8         .           888:88888")
            console.log(".888:88        .:           888:88888:")
            console.log("8888888.       ::           88:888888")
            console.log("`.::.888.      ::          .88888888")
            console.log(".::::::.888.    ::         :::`8888'.:.")
            console.log("::::::::::.888   '         .::::::::::::")
            console.log("::::::::::::.8    '      .:8::::::::::::.")
            console.log(".::::::::::::::.        .:888:::::::::::::")
            console.log(":::::::::::::::88:.__..:88888:::::::::::'")
            console.log("`'.:::::::::::88888888888.88:::::::::'")
            console.log("`':::_:' -- '' -'-' `':_::::'`")
            break
    default:
        console.log("Opção inválida")
}