
document.addEventListener('DOMContentLoaded',()=>{
  if( document.querySelector("#banner-1")||document.querySelector("#banner-2")||document.querySelector("#banner-3")||document.querySelector("#banner-4")
  || document.querySelector("#pregunta-1")
  ){
    if (!window.matchMedia("(min-width: 800px)").matches) {
    
      /* La pantalla tiene menos de 400 píxeles de ancho */
     document.querySelector("#banner-1").src="img/banner-pequeño-1.jpg"
     document.querySelector("#banner-2").src="img/banner-pequeño-2.jpg"
     document.querySelector("#banner-3").src="img/banner-pequeño-3.jpg"
     document.querySelector("#banner-4").src="img/banner-pequeño-2.jpg"
    }
  }

  loader()
})

function loader(){
  const div = document.createElement("div")
  div.classList.add("loader__","position-absolute","d-flex","justify-content-center","align-items-center","position-fixed","flex-column")
  const spinner = document.createElement("div")
  spinner.classList.add("spinner")
  const img = document.createElement("img")
  img.src="/img/logodiutin.png"

  img.style.width='200px'
  const spinnerUno = document.createElement("div")
  spinnerUno.classList.add("double-bounce1")
  const spinnerDos = document.createElement("div")
  spinnerDos.classList.add("double-bounce2")
  div.appendChild(img)
  spinner.appendChild(spinnerUno)
  spinner.appendChild(spinnerDos)
  div.appendChild(spinner)
  document.querySelector("#inicio").appendChild(div)
    setTimeout(() => {
      document.querySelector("#inicio").remove(document.querySelector(".loader__"))
    }, 2000);


}




