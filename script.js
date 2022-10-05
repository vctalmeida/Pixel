// gera cor aleatoria
function generateColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let index = 0; index < 6; index += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
}
// botão 
let rand1 = document.getElementById('rand1')
let rand2 = document.getElementById('rand2')
let rand3 = document.getElementById('rand3')

let botaoR = document.getElementById('button-random-color')
botaoR.addEventListener('click', randomizaCor)
function randomizaCor(){
    cor1 = generateColor()
    cor2 = generateColor()
    cor3 = generateColor()
    localStorage.setItem('colorPalette',cor1)
    localStorage.setItem('color2',cor2)
    localStorage.setItem('color3',cor3)
    rand1.style.background = cor1
    rand2.style.background = cor2
    rand3.style.background = cor3
}

// guarda cor
let corSalva1 = localStorage.getItem('colorPalette')
let corSalva2 = localStorage.getItem('color2')
let corSalva3 = localStorage.getItem('color3')
    rand1.style.background = corSalva1
    rand2.style.background = corSalva2
    rand3.style.background = corSalva3
// gera quadrado
for (let index = 1; index <= 25; index += 1){
    let borda = document.getElementById('pixel-board')
    let pixelCreate = document.createElement('p')
    pixelCreate.className = 'pixel'
    pixelCreate.style.backgroundColor = 'white'
    borda.appendChild(pixelCreate)
}

// seleciona preto

let preto = document.getElementById('preto')
preto.classList.add('selected')

// add e remove propriedade de select)
preto.addEventListener('click', ColorPixel)
rand1.addEventListener('click', ColorPixel1);
rand2.addEventListener('click', ColorPixel2);
rand3.addEventListener('click', ColorPixel3);

function ColorPixel(){
    preto.classList.add('selected')
    rand1.classList.remove('selected')
    rand2.classList.remove('selected')
    rand3.classList.remove('selected')
}
function ColorPixel1(){
    preto.classList.remove('selected')
    rand1.classList.add('selected')
    rand2.classList.remove('selected')
    rand3.classList.remove('selected')
}
function ColorPixel2(){
    preto.classList.remove('selected')
    rand1.classList.remove('selected')
    rand2.classList.add('selected')
    rand3.classList.remove('selected')
}
function ColorPixel3(){
    preto.classList.remove('selected')
    rand1.classList.remove('selected')
    rand2.classList.remove('selected')
    rand3.classList.add('selected')
}
// pinta quadrados
corSalva1 = ''
