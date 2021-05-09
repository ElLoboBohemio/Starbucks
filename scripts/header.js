

//Links
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const stores = document.getElementById("stores");
const about = document.getElementById("about");

//Menu
const contenidoHome = document.querySelector('.content');
const contenidoMenu = document.querySelector('.menu');
const footerEspeciales = document.querySelector('.cafes-especiales')

home.addEventListener("click", ()=>{

});




menu.addEventListener("click", ()=>{
  contenidoHome.style.display = "none";
  contenidoMenu.style.display = "flex";

  footerEspeciales.style.display = "none";
});

stores.addEventListener("click", ()=>{

});

about.addEventListener("click", ()=>{

});



//Cargar JSON

window.addEventListener('DOMContentLoaded', () => {
  loadjson();
});

const elementoCarousel = document.querySelector('.carousel__lista');

function loadjson() {
  fetch('/scripts/cafes.json')
  .then(Response => Response.json())
  .then(data => {
    let html = '';
    data.forEach(cafe => {
      html += 
      `
      <div class="carousel__elemento">

        <div class="carousel__div--img">
          <img class="carousel__img" src="${cafe.img}" alt="${cafe.nombre}">
        </div>

        <div class="carousel__div--desc">
          <p class="carousel__p">${cafe.nombre}</p>
          <p class="carousel__p">${cafe.precio}</p>
        </div>
        
      </div>
      `;
    })
    elementoCarousel.innerHTML = html;
  })
.catch(() => {
  alert('dice que no funciona');
})
}









//Seleccion de cada menu
