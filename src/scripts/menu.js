const elementoCarousel = document.querySelector('.menu__cafes');

//Cargar JSON
window.addEventListener('DOMContentLoaded', () => {
  loadjson();
})

//Funcion de JSON
function loadjson() {
  fetch('/src/scripts/cafes.json')
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
          <p class="menu__nombre">${cafe.nombre}</p>
          <p class="menu__precio">${cafe.precio}</p>
        </div>

      </div>
      `;
    })
    elementoCarousel.innerHTML = html;
  })
.catch(() => {
  alert('No funciona');
})};


