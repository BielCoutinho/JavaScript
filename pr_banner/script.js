const main = document.querySelector('main')
const backgrounds = ['url(img/br1.jpg', 'url(img/br2.jpg', 'url(img/br3.jpg' ]
let indice = 0

function slider() {
    indice ++
    if  (indice >= backgrounds.length) {
        indice = 0
    }
    //troca de imagem de background no CSS
    main.style.backgroundImage = backgrounds[indice]
    main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)