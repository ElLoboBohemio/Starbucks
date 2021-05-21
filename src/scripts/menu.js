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

        <button class="menu__btn" type="button">+</button>

      </div>
      `;
    })
    elementoCarousel.innerHTML = html;
  }).then(() => {
  //Llamar Botones
  const btns = document.querySelectorAll('.menu__btn');
  btns.forEach(btn => {
    btn.addEventListener('click', seleccionarElemento)
  })

  const carrito = document.querySelector('.menu__caja');
  
  //Seleccionar "Nombre" y "Precio" de JSON
  function seleccionarElemento(event) {
    const boton = event.target;
    const elemento = boton.closest('.menu__cafe');
    const nombreCafe = elemento.querySelector('.menu__nombre').textContent;
    const precioCafe = elemento.querySelector('.menu__precio').textContent;
    anadirCarrito(nombreCafe, precioCafe);
  }
  
  //Añadir elementos al carro
  function anadirCarrito(nombreCafe, precioCafe){
    const tituloElementos = carrito.getElementsByClassName('titulo-cafe');

    for(let i = 0; i < tituloElementos.length; i++) {
      if(tituloElementos[i].innerText === nombreCafe) {
        let cantidadElemento = tituloElementos[i].parentElement.parentElement.parentElement.querySelector('opcion__input');
        cantidadElemento.value++;
        $('.toast').toast('show');
        actualizarTotal();
        return;
      }
    }



    const filaCarrito = document.createElement('div');
    const contenidoCarrito = `
    <div class="caja__cafe">
      <div class="caja__desc">
        <h4 class="titulo-cafe">${nombreCafe}</h4>
        <p class="desc__precio">${precioCafe}</p>
      </div>
      <div class="caja__opcion">
        <input class="opcion__input" onkeypress="actualizarTotal" type="number" min="1" value="1">
        <button class="opcion__btn" type="button">X</button>
    </div>
  </div>
    `
    filaCarrito.innerHTML = contenidoCarrito;
    carrito.append(filaCarrito);
    filaCarrito.querySelector('.opcion__btn').addEventListener('click', quitarDeLista);
    filaCarrito.querySelector('.opcion__input').addEventListener('.change', cambioCantidad);
    actualizarTotal();
  }
  
  //Actutaliza el total del carro
  function actualizarTotal() {
    let total = 0;
    const contadorTotal = document.querySelector('.total__p');
    const cafesSeleccionados = document.querySelectorAll('.caja__cafe');
    cafesSeleccionados.forEach((cafeseleccionado) => {
      const precioCafeIndividual = cafeseleccionado.querySelector('.desc__precio');
      const precio = Number(precioCafeIndividual.textContent.replace('$', ''));
      const cantidad = cafeseleccionado.querySelector('.opcion__input');
      const cantidadInput = Number(cantidad.value);
      total = total + precio * cantidadInput;
    });
    contadorTotal.innerHTML = `$${total.toFixed(2)}`;
  }
  
  //Quita elemento
  function quitarDeLista(event) {
    const clickBtn = event.target;
    clickBtn.closest('.caja__cafe').remove();
    actualizarTotal();
  }
  
  //Evitar valores <= 0
  function cambioCantidad(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    actualizarTotal();
  }
  
  })


.catch(() => {
  alert('No funciona');
})};


