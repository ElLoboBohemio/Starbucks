const elementoCarousel = document.querySelector('.menu__cafes');

export function loadjson() {
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