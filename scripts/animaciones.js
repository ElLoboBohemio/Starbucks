//GSAP

//Animacion de entrada
document.onload =

//Valor Inicial
  gsap.set("body", {
  backgroundColor: '#017143',
  backgroundPosition: "50% 200%",
  backgroundSize: "25%",
  
  opacity: 0,
  });

//De izq a centro
  gsap.timeline()
  .to("body", {
  duration: 1.75,

  backgroundPosition: "50% 50%",
  ease: Power2.easeOut,
  })

//La imagen crece
.to("body", {
  duration: 0.75,

  backgroundSize: "30%"
})

//La imagen decrece
.to("body", {
  duration: 0.75,

  backgroundSize: "25%"
})

//Se va para la derecha
  .to("body", {
  duration: 1.75,

  backgroundPosition: "50% -125%",
  ease: Power2.easeIn,
  })

//Efecto de fundido
  .to("body", {
  opacity: 1
  });

//Animacion General

gsap.timeline()
.set(".container-general", {
  y:-100,
  opacity: 0
})

.to(".container-general", {
  y:0,
  opacity: 1,
  delay:5.5,
  duration: 0.75,
  ease: Power2.easeOut
})





//Animaciones de Transicion

const menus = document.querySelectorAll(".header__li");

for(const menu of menus){
  menu.addEventListener('click', ()=> {

    gsap.timeline()
    .set("body", {
      backgroundPosition: "50% 200%",
    })

    .to("body", {
    duration: 0.75,
  
    backgroundPosition: "50% 50%",
    ease: Power2.easeOut,
    })
  
  //Se va para la arriva
    .to("body", {
    duration: 0.75,
  
    backgroundPosition: "50% -125%",
    ease: Power2.easeIn,
    })
  
  //Efecto de fundido
    .to("body", {
    opacity: 1
    });
  
  //Animacion General
  
  gsap.timeline()
  .set(".container-general", {
    y:-100,
    opacity: 0
  })
  
  .to(".container-general", {
    y:0,
    opacity: 1,
    delay:1.50,
    duration: 0.75,
    ease: Power2.easeOut
  })

})};