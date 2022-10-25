(function(){
     const proteina = document.querySelector("#proteina");

     const URL = "../json/productos.json"
    document.addEventListener('DOMContentLoaded',() =>{
        mostrarProducto()
    })

    
    function mostrarProducto() {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                if(window.location.pathname == "/categorias/proteina.html"){
                    imprimirProteina(data)
                }if (window.location.pathname == "/categorias/fibra.html") {
                    imprimirFibra(data)
                } else {
                    imprimirCarbohidratos(data)
                }
            })
    }

    function imprimirProteina(data) {
        const mostrar = data.filter(item => item.categoria == "proteina")
        mostrar.map(items => (
            proteina.innerHTML += `
            <div class="card__products  cursor__pointer full__media" data-aos="flip-left" data-aos-duration="2000">
                <a href="#" data-bs-toggle="modal" data-bs-target="#product-${items.id}">
                <img src="../img/${items.img}" alt="" class="img-fluid full__media sombra__baner border__radius img__hover">
                </a>
                <div class="content__ mt__35">
                    <ul class="none__line text-center">
                        <li class="title__product font__nunito" style="font-size:25px;font-weight:500;">${items.producto}</li>
                        <li class="font__nunito color__blue" style="font-size:25px;font-weight: 300;">${items.sabor}</li>
                        <li class="font__nunito color__blue" style="font-size:25px;font-weight: 300;">${items.presentacion}</li>
                    </ul>
                    
                </div>
            </div>

            <div class="modal fade" id="product-${items.id}" id="modalpreguntaUno" tabindex="-1" aria-labelledby="Modal-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content modal__content__producto">
                    <div class="modal-header flex-column">
                    
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div><h5 class="modal-title color__blue font__nunito text-capitalize" id="Modal-1" style="font-size: 30px;">Categoria: ${items.categoria}</h5></div>
                    </div>
                        <div class="modal-body d-flex justify-content-center flex-wrap items-center">
                            <div class="col-4 full__media">
                                <img src="../img/${items.img}" alt="" class="img-fluid border__radius__20 h__full">
                                <div>
                                    <h2 class="text-center color__blue font__nunito">${items.producto}</h2>
                                    <p class="text-center color__blue font__nunito">${items.sabor}</p>
                                    <p class="text-center color__blue font__nunito">${items.presentacion}</p>
                                    <h5 class="color__blue font__nunito">Descripcion</h5>
                                    <p class="font__nunito text__justify">${items.descripcion}</p>
                                </div>
                            </div>
                            <div class="col-6 full__media">
                            <ul style="list-style: none;">
                                    
                                    <li>
                                        <h5 class="color__blue font__nunito">Recomendaciones:</h5> 
                                        <p class="font__nunito text__justify">
                                            ${items.recomendaciones}
                                        </p>
                                    </li>
                                    <li>
                                        <h5 class="color__blue font__nunito">Instrucciones:</h5> 
                                        <p class="font__nunito text__justify">${items.instrucciones}</p>
                                    </li>
                                    <li>
                                        <h5 class="color__blue font__nunito">Precauciones:</h5> 
                                        <p class="font__nunito text__justify">${items.precauciones}</p>
                                    </li>

                                    <li>
                                        <h5 class="color__blue font__nunito">Conservacion:</h5> 
                                        <p class="font__nunito text__justify">${items.conservacion}</p>
                                    </li>
                                    
                                    
                            </ul>
                                
                            </div>
                        </div>
                </div>
            </div>
            `
        ))
    }

    function imprimirFibra(data) {
        const mostrar = data.filter(item => item.categoria == "fibra")
        mostrar.map(items => (
            fibra.innerHTML +=`
            <div class="card__products  cursor__pointer full__media" data-aos="flip-left" data-aos-duration="2000">
            <a href="#" data-bs-toggle="modal" data-bs-target="#product-${items.id}">
            <img src="../img/${items.img}" alt="" class="img-fluid full__media sombra__baner border__radius img__hover">
            </a>
            <div class="content__ mt__35">
                <ul class="none__line text-center">
                    <li class="title__product font__nunito" style="font-size:25px;font-weight:500;">${items.producto}</li>
                    <li class="font__nunito color__blue" style="font-size:25px;font-weight: 300;">${items.sabor}</li>
                    <li class="font__nunito color__blue" style="font-size:25px;font-weight: 300;">${items.presentacion}</li>
                </ul>
                
            </div>
        </div>

        <div class="modal fade" id="product-${items.id}" id="modalpreguntaUno" tabindex="-1" aria-labelledby="Modal-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content modal__content__producto">
                    <div class="modal-header flex-column">
                    
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div><h5 class="modal-title color__blue font__nunito text-capitalize" id="Modal-1" style="font-size: 30px;">Categoria: ${items.categoria}</h5></div>
                    </div>
                        <div class="modal-body d-flex justify-content-center flex-wrap items-center">
                            <div class="col-4 full__media">
                                <img src="img/product-1.jpg" alt="" class="img-fluid border__radius__20 h__full">
                                <div>
                                    <h2 class="text-center color__blue font__nunito">${items.producto}</h2>
                                    <p class="text-center color__blue font__nunito">${items.sabor}</p>
                                    <p class="text-center color__blue font__nunito">${items.presentacion}</p>
                                    <h5 class="color__blue font__nunito">Descripcion</h5>
                                    <p class="font__nunito text__justify">${items.descripcion}</p>
                                </div>
                            </div>
                            <div class="col-6 full__media">
                            <ul style="list-style: none;">
                                    
                                    <li>
                                        <h5 class="color__blue font__nunito">Recomendaciones:</h5> 
                                        <p class="font__nunito text__justify">
                                            ${items.recomendaciones}
                                        </p>
                                    </li>
                                    <li>
                                        <h5 class="color__blue font__nunito">Instrucciones:</h5> 
                                        <p class="font__nunito text__justify">${items.instrucciones}</p>
                                    </li>
                                    <li>
                                        <h5 class="color__blue font__nunito">Precauciones:</h5> 
                                        <p class="font__nunito text__justify">${items.precauciones}</p>
                                    </li>

                                    <li>
                                        <h5 class="color__blue font__nunito">Conservacion:</h5> 
                                        <p class="font__nunito text__justify">${items.conservacion}</p>
                                    </li>
                                    
                                    
                            </ul>
                                
                            </div>
                        </div>
                </div>
            </div>
            `
        ))
    }

    function imprimirCarbohidratos(data) {
        const mostrar = data.filter(item => item.categoria == "carbohidratos")
        mostrar.map(items => (
            carbohidrato.innerHTML += `
        <div class="card__products  cursor__pointer full__media" data-aos="flip-left" data-aos-duration="2000">
        <a href="#" data-bs-toggle="modal" data-bs-target="#product-${items.id}">
        <img src="../img/${items.img}" alt="" class="img-fluid full__media sombra__baner border__radius img__hover">
        </a>
        <div class="content__ mt__35">
            <ul class="none__line text-center">
                <li class="title__product font__nunito" style="font-size:25px;font-weight:500;">${items.producto}</li>
                <li class="font__nunito color__blue" style="font-size:25px;font-weight: 300;">${items.sabor}</li>
                <li class="font__nunito color__blue" style="font-size:25px;font-weight: 300;">${items.presentacion}</li>
            </ul>
            </div>
        </div>

        <div class="modal fade" id="product-${items.id}" id="modalpreguntaUno" tabindex="-1" aria-labelledby="Modal-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content modal__content__producto">
                    <div class="modal-header flex-column">
                    
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div><h5 class="modal-title color__blue font__nunito text-capitalize" id="Modal-1" style="font-size: 30px;">Categoria: ${items.categoria}</h5></div>
                    </div>
                        <div class="modal-body d-flex justify-content-center flex-wrap items-center">
                            <div class="col-4 full__media">
                                <img src="../img/${items.img}" alt="" class="img-fluid border__radius__20 h__full">
                                <div>
                                    <h2 class="text-center color__blue font__nunito">${items.producto}</h2>
                                    <p class="text-center color__blue font__nunito">${items.sabor}</p>
                                    <p class="text-center color__blue font__nunito">${items.presentacion}</p>
                                    <h5 class="color__blue font__nunito">Descripcion</h5>
                                    <p class="font__nunito text__justify">${items.descripcion}</p>
                                </div>
                            </div>
                            <div class="col-6 full__media">
                            <ul style="list-style: none;">
                                    
                                    <li>
                                        <h5 class="color__blue font__nunito">Recomendaciones:</h5> 
                                        <p class="font__nunito text__justify">
                                            ${items.recomendaciones}
                                        </p>
                                    </li>
                                    <li>
                                        <h5 class="color__blue font__nunito">Instrucciones:</h5> 
                                        <p class="font__nunito text__justify">${items.instrucciones}</p>
                                    </li>
                                    <li>
                                        <h5 class="color__blue font__nunito">Precauciones:</h5> 
                                        <p class="font__nunito text__justify">${items.precauciones}</p>
                                    </li>

                                    <li>
                                        <h5 class="color__blue font__nunito">Conservacion:</h5> 
                                        <p class="font__nunito text__justify">${items.conservacion}</p>
                                    </li>
                                    
                                    
                            </ul>
                                
                            </div>
                        </div>
                </div>
            </div>
        `
        ))
    }
})()