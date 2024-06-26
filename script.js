let img = document.querySelector('img');
let red = document.querySelector('#red');
let orange = document.querySelector('#orange');
let black = document.querySelector('#black');
let button = document.querySelector('button');

red.addEventListener('click', () => {
   img.setAttribute('src', './img/image2.png');
   button.style.backgroundColor = 'red';
});

orange.addEventListener('click', () => {
   img.setAttribute('src', './img/image3.png');
   button.style.backgroundColor = 'orange';
});

black.addEventListener('click', () => {
   img.setAttribute('src', './img/pngwing.png');
   button.style.backgroundColor = 'black';
});