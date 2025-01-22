/**
 * Ano Automático 
 * @author Gabriel Coutinho
 */

let ano =document.getElementById('copyrightYear')
// inserindo o ano na tag<span>
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual