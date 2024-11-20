/**
 * Estrutura de dados - Objetos
 * @author Gabriel Coutinho
 */
console.clear()

const funcionario1 = {}
console.log(typeof(funcionario1))
// adicionar dados a estruturas
funcionario1.nome = "Biel"
funcionario1.cargo = "Aluno"
funcionario1.email = "gabriel@senac.com.br"
funcionario1.salario = 1500
funcionario1.insta ="@gabrielsantoc"
// Listar os dados da estruturas
console.log(funcionario1)
console.log(funcionario1.cargo)
// modificar os dados da estrutura
funcionario1.nome ="Biel Couitnho"
console.log(funcionario1)
// excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Lady Gaga",
    cargo: "Artista",
    email: "LadyGaga@email.com",
    salario: 20000000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Casa da Lady Gaga",
    cidade: "New York",
    estado: "New York"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Beyonce",
    cargo: "Artista",
    email: "Beyonce@email.com",
    salrio: 30000000,
    ...endereco1
}
 console.log(funcionario3)

 const funcionario4 = {
    nome: "Rhianna",
    cargo: "Artista",
    email: "Rhianna@email.com",
    salrio: 30050000,
    ...endereco1
}
 console.log(funcionario4)

 const funcionario5 = {
    nome: "Ariana Grande",
    cargo: "Artista",
    email: "ArianaGrande@email.com",
    salrio: 323000000,
    armadura: {
        versão: "Mark II",
        ano: 2022,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("👩‍🎤")
    }
}

 console.log(funcionario5)
 console.log(funcionario5.cargo)
 console.log(funcionario5.armadura.versão)
 funcionario5.suitUp() //Executar a função interna da estrutura