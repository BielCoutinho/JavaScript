/**
 * Slide Show
 * @author Gabriel Coutinho
 */


//array (vetor) de imagens
let slide = ["banner1.jpg", "banner2.jpg", "banner3.jpg"]
let intervalo = 3000 /// 3000ms = 3s (1s por imagem)
let indice = 0 // apoio a lógica (indice do array)


function show() {
    // capturar o id do banner
    const slide = document.getElementById('slide')
    

    //Efeito de etrada
    //A estrutura abaixo verificase foi atribuido a classe (.slideOut) ao identificador #slide 
    if(slide.classList.contains('slideOut')) {
        slide.classList.contains('slideOut')
    }
    slide.classList.add('slideIn')

    // Troca de imagem
    // Temporizador (nativo do JS)
    setTimeout(() => {
        //Soma 1 ao índice do vetor
        indice++
        //Se o último slide do vetor for atingido, voltar para o
        if (indice >= slide.length) {
            indice = 0
        }
        //Substituir a imagem no documento HTML pela imagem do vetor (img/slides[0] img/slides[1] img/slides[2])
        slide.scr = img/${slide[indice]}
    },1000)// ajuste que se deve sincronizar com css

    if(slide.classList.contains('slideIn')) {
        slide.classList.contains('slideIn')
    }
    slide.classList.add('slideOut')

    // Itervalo para p´roxima execução (lopp infinito)
    setTimeout(show, intervalo)
}

// executar a função ao iniciar o documento
show()