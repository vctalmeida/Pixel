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
    rand1.style.background = generateColor()
    rand2.style.background = generateColor()
    rand3.style.background = generateColor()
}   

// seta cores
// let cor1 = document.querySelector('rand1.style.backgroundColor')
// let cor2 = rand2.style.backgroundColor
// let cor3 = rand3.style.backgroundColor


// localStorage.setItem('color1',cor1)
// localStorage.setItem('color2',cor2)
// localStorage.setItem('color3',cor3)

// localStorage.getItem('color1')
// localStorage.getItem('color2')
// localStorage.getItem('color3')

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