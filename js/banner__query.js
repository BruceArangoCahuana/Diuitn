document.addEventListener('DOMContentLoaded',listen)


function listen(){
  if( document.querySelector("#banner-1")||document.querySelector("#banner-2")||document.querySelector("#banner-3")||document.querySelector("#banner-4")){
    if (!window.matchMedia("(min-width: 800px)").matches) {
    
      /* La pantalla tiene menos de 400 píxeles de ancho */
     document.querySelector("#banner-1").src="img/banner-pequeño-1.jpg"
     document.querySelector("#banner-2").src="img/banner-pequeño-2.jpg"
     document.querySelector("#banner-3").src="img/banner-pequeño-3.jpg"
     document.querySelector("#banner-4").src="img/banner-pequeño-2.jpg"
    
   }
  }
  return
   
}