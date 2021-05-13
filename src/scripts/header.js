import {loadjson} from './menu.js';

//Links
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const stores = document.getElementById("stores");
const about = document.getElementById("about");

//Menu
const contenidoHome = document.querySelector('.content');
const contenidoMenu = document.querySelector('.menu');
const contenidoStores = document.querySelector('.mapa');
const contenidoAbout = document.querySelector('.about');
const footerEspeciales = document.querySelector('.cafes-especiales')

home.addEventListener("click", ()=>{
  contenidoHome.style.display = "grid";
  contenidoMenu.style.display = "none";
  contenidoAbout.style.display = "none"
  
  footerEspeciales.style.display = "flex";
});

menu.addEventListener("click", ()=>{
  contenidoHome.style.display = "none";
  contenidoMenu.style.display = "flex";
  contenidoAbout.style.display = "none"

  footerEspeciales.style.display = "none";  
  loadjson();
});

stores.addEventListener("click", ()=>{
  

  contenidoHome.style.display = "none";
  contenidoMenu.style.display = "none";
  contenidoAbout.style.display = "none";

});

about.addEventListener("click", ()=>{
  contenidoAbout.style.display = "grid";

  contenidoHome.style.display = "none";
  contenidoMenu.style.display = "none";
  footerEspeciales.style.display = "none";
});
