//Links
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const stores = document.getElementById("stores");
const about = document.getElementById("about");

//Contenido
const contenidoHome = document.querySelector('.content');
const contenidoMenu = document.querySelector('.menu');
const contenidoStores = document.querySelector('.stores');
const contenidoAbout = document.querySelector('.about');
const footerEspeciales = document.querySelector('.cafes-especiales')

home.addEventListener("click", ()=>{
  contenidoHome.style.display = "grid";

  contenidoMenu.style.display = "none";
  contenidoAbout.style.display = "none"
  contenidoStores.style.display = "none";
  
  footerEspeciales.style.display = "flex";
});

menu.addEventListener("click", ()=>{
  contenidoMenu.style.display = "flex";

  contenidoHome.style.display = "none";
  contenidoStores.style.display = "none";
  contenidoAbout.style.display = "none";

  footerEspeciales.style.display = "none";  
});

stores.addEventListener("click", ()=>{
  contenidoStores.style.display = "grid";

  contenidoHome.style.display = "none";
  contenidoMenu.style.display = "none";
  contenidoAbout.style.display = "none";

  footerEspeciales.style.display = "none";
});

about.addEventListener("click", ()=>{
  contenidoAbout.style.display = "grid";

  contenidoHome.style.display = "none";
  contenidoMenu.style.display = "none";
  contenidoStores.style.display = "none";

  footerEspeciales.style.display = "none";
});
