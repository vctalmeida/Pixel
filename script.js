// gera cor aleatoria
function generateColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let index = 0; index < 6; index += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
}

// seta cores
let rand1 = document.getElementById('rand1')
let rand2 = document.getElementById('rand2')
let rand3 = document.getElementById('rand3')

rand1.style.background = generateColor()
rand2.style.background = generateColor()
rand3.style.background = generateColor()
