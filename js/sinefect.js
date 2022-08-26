document.addEventListener('DOMContentLoaded',listen)


function listen(){

    if (!window.matchMedia("(min-width: 800px)").matches) {
    
      /* La pantalla tiene menos de 400 píxeles de ancho */
      document.querySelector("#pregunta-1").removeAttribute("data-aos")
      document.querySelector("#pregunta-2").removeAttribute("data-aos")
      document.querySelector("#pregunta-3").removeAttribute("data-aos")
      document.querySelector("#pregunta-4").removeAttribute("data-aos")
      document.querySelector("#pregunta-5").removeAttribute("data-aos")
    }
  }

