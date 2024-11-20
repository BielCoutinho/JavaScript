/**
 * Estudo das funções como parâmetros e retorno
 * @author Gabriel Coutinho
 */

function somar(a, b) {
    return (console.log(a + b))         
}
somar(5, 2)



const somarAF = (a, b) => {
    return (console.log(a + b))
}

somarAF(2, 2)

//Na função abaixo o retorno é implícito
const somarAFS = (a, b) => console.log(a + b)
somarAFS(3, 9)