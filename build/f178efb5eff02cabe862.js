document.onload=gsap.set("body",{backgroundColor:"#017143",backgroundPosition:"50% 200%",backgroundSize:"25%",opacity:0}),gsap.timeline().to("body",{duration:1.75,backgroundPosition:"50% 50%",ease:Power2.easeOut}).to("body",{duration:.75,backgroundSize:"30%"}).to("body",{duration:.75,backgroundSize:"25%"}).to("body",{duration:1.75,backgroundPosition:"50% -125%",ease:Power2.easeIn}).to("body",{opacity:1}),gsap.timeline().set(".container-general",{y:-100,opacity:0}).to(".container-general",{y:0,opacity:1,delay:5.5,duration:.75,ease:Power2.easeOut});const menus=document.querySelectorAll(".header__li");for(const o of menus)o.addEventListener("click",(()=>{gsap.timeline().set("body",{backgroundPosition:"50% 200%"}).to("body",{duration:.75,backgroundPosition:"50% 50%",ease:Power2.easeOut}).to("body",{duration:.75,backgroundPosition:"50% -125%",ease:Power2.easeIn}).to("body",{opacity:1}),gsap.timeline().set(".container-general",{y:-100,opacity:0}).to(".container-general",{y:0,opacity:1,delay:1.5,duration:.75,ease:Power2.easeOut})}));