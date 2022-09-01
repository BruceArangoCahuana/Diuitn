const btnUno = document.querySelector("#buton-1")
const btnDos = document.querySelector("#buton-2")
const btnTres = document.querySelector("#buton-3")
const btnCuatro = document.querySelector("#buton-4")


const cardUno = document.querySelector("#card-1")
const cardDos = document.querySelector("#card-2")
const cardTres = document.querySelector("#card-3")
const cardCuatro = document.querySelector("#card-4")

const cardimagenUno = document.querySelector("#imagen-card-1")
const cardimagenDos = document.querySelector("#imagen-card-2")
const cardimagenTres = document.querySelector("#imagen-card-3")
const cardimagenCuatro = document.querySelector("#imagen-card-4")
//const allcard = document.querySelectorAll("#padre .card__gerente")

const activeCard = document.querySelector("#active-card")



document.addEventListener('DOMContentLoaded',()=>{
    const allcard = document.querySelectorAll("#padre .card__gerente")
        for (let i = 0; i < allcard.length; i++) {
            const elementuno = allcard[0];
            const elementdos = allcard[1];
            const elementtres = allcard[2];
            if(elementuno || elementdos || elementtres){
                cambiarCard()
            }
             
        }
})

function cambiarCard(){
    const btnUno = document.querySelector(`#buton-1`)
    const btnDos = document.querySelector(`#buton-2`)
    const btnTres = document.querySelector(`#buton-3`)
    const btnCuatro = document.querySelector(`#buton-4`)
    btnUno.addEventListener('click',borrarUno)
    btnDos.addEventListener('click',borrarDos)
    btnTres.addEventListener('click',borrarTres)
    btnCuatro.addEventListener('click',borrarCuatro)
}
function borrarUno(){
    cardUno.removeChild(btnUno)
    cardimagenUno.src="img/card-cambio.png"
    cardDos.setAttribute("id","active-card")
    const divContent = document.createElement("div")
    const h2content = document.createElement("h2")
    const pcontent = document.createElement("p")
    const btnsalir = document.createElement("img")

    btnsalir.setAttribute("id","cerrar")
    divContent.setAttribute("id","eliminar-content")
    divContent.classList.add("position-absolute","p-3","d-flex","justify-content-center","flex-column","align-items-center","full")
    divContent.classList.add("position__card")
    btnsalir.classList.add("pointer__js")
    h2content.classList.add("text-center","text-white","font__nunito","titulo__")
    pcontent.classList.add("p__white","font__nunito" ,"p__")
   
    btnsalir.src="img/cerrar.png"
    const contentTitle = document.createTextNode("Judd Sanders")
    const contentText = document.createTextNode("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.")
    
    h2content.appendChild(contentTitle)
    divContent.appendChild(h2content)
    divContent.appendChild(pcontent)
    divContent.appendChild(btnsalir)
    pcontent.appendChild(contentText)
    cardUno.appendChild(divContent)
    if(document.querySelector("#cerrar")){
        document.querySelector("#cerrar").addEventListener("click",cerrarsUno)
       }
}

function borrarDos(){
    cardDos.removeChild(btnDos)
    cardimagenDos.src="img/card-cambio.png"
    cardDos.setAttribute("id","active-card")
    const divContent = document.createElement("div")
    const h2content = document.createElement("h2")
    const pcontent = document.createElement("p")
    const btnsalir = document.createElement("img")

    btnsalir.setAttribute("id","cerrar-1")
    divContent.setAttribute("id","eliminar-content-1")
    divContent.classList.add("position-absolute","p-3","d-flex","justify-content-center","flex-column","align-items-center","full")
    divContent.classList.add("position__card")
    btnsalir.classList.add("pointer__js")
    h2content.classList.add("text-center","text-white","font__nunito","titulo__")
    pcontent.classList.add("p__white","font__nunito" ,"p__")
   
    btnsalir.src="img/cerrar.png"
    const contentTitle = document.createTextNode("Judd Sanders")
    const contentText = document.createTextNode("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.")
    
    h2content.appendChild(contentTitle)
    divContent.appendChild(h2content)
    divContent.appendChild(pcontent)
    divContent.appendChild(btnsalir)
    pcontent.appendChild(contentText)
    cardDos.appendChild(divContent)
    if(document.querySelector("#cerrar-1")){
        document.querySelector("#cerrar-1").addEventListener("click",cerrarsDos)
       }
}

function borrarTres(){
    cardTres.removeChild(btnTres)
    cardimagenTres.src="img/card-cambio.png"
    cardTres.setAttribute("id","active-card")
    const divContent = document.createElement("div")
    const h2content = document.createElement("h2")
    const pcontent = document.createElement("p")
    const btnsalir = document.createElement("img")

    btnsalir.setAttribute("id","cerrar-2")
    divContent.setAttribute("id","eliminar-content-2")
    divContent.classList.add("position-absolute","p-3","d-flex","justify-content-center","flex-column","align-items-center","full")
    divContent.classList.add("position__card")
    btnsalir.classList.add("pointer__js")
    h2content.classList.add("text-center","text-white","font__nunito","titulo__")
    pcontent.classList.add("p__white","font__nunito" ,"p__")
   
    btnsalir.src="img/cerrar.png"
    const contentTitle = document.createTextNode("Judd Sanders")
    const contentText = document.createTextNode("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.")
    
    h2content.appendChild(contentTitle)
    divContent.appendChild(h2content)
    divContent.appendChild(pcontent)
    divContent.appendChild(btnsalir)
    pcontent.appendChild(contentText)
    cardTres.appendChild(divContent)
    if(document.querySelector("#cerrar-2")){
        document.querySelector("#cerrar-2").addEventListener("click",cerrarsTres)
       }
}

function borrarCuatro(){
    cardCuatro.removeChild(btnCuatro)
    cardimagenCuatro.src="img/card-cambio.png"
    cardCuatro.setAttribute("id","active-card")
    const divContent = document.createElement("div")
    const h2content = document.createElement("h2")
    const pcontent = document.createElement("p")
    const btnsalir = document.createElement("img")

    btnsalir.setAttribute("id","cerrar-3")
    divContent.setAttribute("id","eliminar-content-3")
    divContent.classList.add("position-absolute","p-3","d-flex","justify-content-center","flex-column","align-items-center","full")
    divContent.classList.add("position__card")
    
    h2content.classList.add("text-center","text-white","font__nunito","titulo__")
    pcontent.classList.add("p__white","font__nunito" ,"p__")
    btnsalir.classList.add("pointer__js")
    btnsalir.src="img/cerrar.png"
    const contentTitle = document.createTextNode("Judd Sanders")
    const contentText = document.createTextNode("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.")
    
    h2content.appendChild(contentTitle)
    divContent.appendChild(h2content)
    divContent.appendChild(pcontent)
    divContent.appendChild(btnsalir)
    pcontent.appendChild(contentText)
    cardCuatro.appendChild(divContent)
    if(document.querySelector("#cerrar-3")){
        document.querySelector("#cerrar-3").addEventListener("click",cerrarsCuatro)
       }
}

function cerrarsUno(){
    cardimagenUno.src="img/img-gerente.png"
    cardUno.removeChild(document.querySelector("#eliminar-content"))
    if(!document.querySelector("#eliminar-content")){
        cardUno.appendChild(btnUno)
    }
} 

function cerrarsDos(){
    cardimagenDos.src="img/img-gerente.png"
    cardDos.removeChild(document.querySelector("#eliminar-content-1"))
    if(!document.querySelector("#eliminar-content-1")){
        cardDos.appendChild(btnDos)
    }
} 

function cerrarsTres(){
    cardimagenTres.src="img/img-gerente.png"
    cardTres.removeChild(document.querySelector("#eliminar-content-2"))
    if(!document.querySelector("#eliminar-content-2")){
        cardTres.appendChild(btnTres)
    }
} 

function cerrarsCuatro(){
    cardimagenCuatro.src="img/img-gerente.png"
    cardCuatro.removeChild(document.querySelector("#eliminar-content-3"))
    if(!document.querySelector("#eliminar-content-3")){
        cardCuatro.appendChild(btnCuatro)
    }
} 