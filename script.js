function rainbowFunc(){
    Array.from(squares).forEach(function(square){square.addEventListener('click', function(){square.style.background = this.color = '#' + Math.floor(Math.random()*16777215).toString(16);})})
}
function eraseFunc(){
    Array.from(squares).forEach(function(square){square.addEventListener('click', function(){square.style.background = 'rgb(245, 245, 245)'})})
}
function clearFunc(){
    Array.from(squares).forEach(function(square){square.style.background = 'rgb(245, 245, 245)'
})
}
function pencilFunc(){
    Array.from(squares).forEach(function(square){
        square.addEventListener('click',function(){square.style.background = 'rgb(150, 150, 150)'} )
    })
}
const containerDiv = document.getElementsByClassName('container')[0];
const squares = document.getElementsByClassName("squares");
for(x=0; x<256; x++){
    const block = document.createElement('div');
    block.className =  'squares';
    containerDiv.appendChild(block);
}
Array.from(squares).forEach(function(square){
    square.addEventListener('click',function(){square.style.background = 'rgb(150, 150, 150)'} )
});

const clear = document.getElementById("clearButton");
clear.addEventListener('click', clearFunc);

const rainbow = document.getElementById("rainbowButton");
rainbow.addEventListener('click', rainbowFunc);

const erase = document.getElementById("eraserButton");
erase.addEventListener('click', eraseFunc);

const pencil = document.getElementById("pencilButton");
pencil.addEventListener('click', pencilFunc);
