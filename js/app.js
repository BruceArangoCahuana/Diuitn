const btnUno = document.querySelector("#buton-1")
const cardUno = document.querySelector("#card-1")
const cardimagenUno = document.querySelector("#imagen-card-1")

document.addEventListener('DOMContentLoaded',()=>{
   btnUno.addEventListener('click',clicked)
})
  
function clicked(){
    cardUno.removeChild(btnUno)
    cardimagenUno.src("card-cambio.png")
}
