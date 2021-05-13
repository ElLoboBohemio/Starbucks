const batido1 = document.getElementById('batido-1');
const batido2 = document.getElementById('batido-2');
const batido3 = document.getElementById('batido-3');

const batidos = document.querySelectorAll('.botones__img');

const header = document.querySelector('.header');
const titulo = document.querySelector('.cuerpo__h2--span');
const boton = document.querySelector('.cuerpo__button');
const body = document.querySelector('.container-general');
const logo = document.querySelector('.header__path');
const footer = document.querySelector('.botones');
const granosCafe = document.querySelector('.fotos');

const img = document.querySelector('.fotos__img');


//Cambiar los colores de los elemntos
function cambiarColor (color1, color2) {
    header.style.backgroundColor = color1;
    footer.style.backgroundColor = color1;
    titulo.style.color = color1;
    boton.style.backgroundColor = color1;
    logo.style.fill = color1;
    granosCafe.style.backgroundColor = color1;
    body.style.backgroundColor = color2;
}

//Efecto de transiciones suaves
function transiciones () {
    header.style.transition = 'background-color 0.5s';
    footer.style.backgroundColor = 'background-color 0.5';
    titulo.style.transition = 'color 0.5s';
    boton.style.transition = 'background-color 0.5s';
    logo.style.transition = 'fill 0.5s';
    granosCafe.style.transition = 'background-color 0.5s'
    body.style.transition = 'background-color 0.5s';
}

//Cambios de imagenes
function cambiarImg (url) {
  img.setAttribute('src', url);
} 

//Eventlisteners
batido1.addEventListener('click', ()=> {
  cambiarColor('#017143', '#e6e6e6');
  transiciones();
  cambiarImg('https://i.postimg.cc/SQDFmJwB/img1-min.png');
});

batido2.addEventListener('click', ()=> {
  cambiarColor('#996824','#ecb0ba');
  transiciones();
  cambiarImg('https://i.postimg.cc/Fsztzhv7/img2-min.png');
});

batido3.addEventListener('click', ()=> {
  cambiarColor('#027391','#fa96db');
  transiciones();
  cambiarImg('https://i.postimg.cc/TY4zWB2Q/img3-min.png');
});