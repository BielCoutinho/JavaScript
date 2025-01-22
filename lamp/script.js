/**
 * Eventos de intervalo
 * @author Gabriel Coutinho
 */

function piscar() {
    let ligada = false
    // função nativa do JS para gerar interavlos
    // 1000 (1000ms = 1s)
    setInterval(() => {
        if (ligada === false) {
            document.getElementById(`lamp`).src = "img/on.jpg"
            
        } else {
            document.getElementById(`lamp`).src = "img/off.jpg"
            
        }
        ligada = !ligada //!NOT

    }, 200)
}