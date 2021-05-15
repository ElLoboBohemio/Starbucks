const batido1 = document.getElementById('batido-1');
const batido2 = document.getElementById('batido-2');
const batido3 = document.getElementById('batido-3');

const batidos = document.querySelectorAll('.botones__img');

const header = document.querySelector('.header');
const titulos = document.querySelectorAll('.cuerpo__h2--span');
const body = document.querySelector('.container-general');
const logo = document.querySelector('.header__path');
const footer = document.querySelector('.botones');
const granosCafe = document.querySelector('.fotos');

const img = document.querySelector('.fotos__img');


//Cambiar los colores de los elementos
function cambiarColor (color1, color2) {
    header.style.backgroundColor = color1;
    footer.style.backgroundColor = color1;
    logo.style.fill = color1;
    granosCafe.style.backgroundColor = color1;
    body.style.backgroundColor = color2;

    titulos.forEach(titulo => {
      titulo.style.color = color1;
    }) 
}

//Efecto de transiciones suaves
function transiciones () {
    header.style.transition = 'background-color 0.5s';
    footer.style.backgroundColor = 'background-color 0.5';
    granosCafe.style.transition = 'all 0.5s';
    body.style.transition = 'background-color 0.5s';

    titulos.forEach(titulo => {
      titulo.style.color = 'color 0.5s';
    })

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