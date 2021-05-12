

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
  loadjson();
});

stores.addEventListener("click", ()=>{

});

about.addEventListener("click", ()=>{

});


const elementoCarousel = document.querySelector('.menu__cafes');

function loadjson() {
  fetch('/scripts/cafes.json')
  .then(Response => Response.json())
  .then(data => {
    let html = '';
    data.forEach(cafe => {
      html += 
      `
      <div class="menu__cafe">

        <div class="menu__foto">
          <img class="menu__img" src="${cafe.img}" alt="${cafe.nombre}">
        </div>

        <div class="menu__desc">
          <p class="menu__p">${cafe.nombre}</p>
          <p class="menu__p">${cafe.precio}</p>
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
