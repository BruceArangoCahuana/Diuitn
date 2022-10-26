(function () {
    const proteina = document.querySelector("#proteina")
    const fibra = document.querySelector("#fibra")
    const carbohidrato = document.querySelector("#carbohidrato")

    const URL = "../json/productos.json"
    function mostrarProducto() {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                imprimirProteina(data),
                imprimirFibra(data),
                imprimirCarbohidratos(data)
            })
    }

    mostrarProducto()
    function imprimirProteina(data) {
        const mostrar = data.filter(item => item.categoria == "proteina")
        mostrar.map(items => (
            proteina.innerHTML += `
            <div class="card__products  cursor__pointer full__media" data-aos="flip-left" data-aos-duration="2000">
                <a href="#" data-bs-toggle="modal" data-bs-target="#product-${items.id}">
                <img src="img/${items.img}" alt="" class="img-fluid full__media sombra__baner border__radius img__hover">
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
                <div><h5 class="modal-title color__blue font__nunito text-capitalize" id="Modal-1" style="font-size: 30px;">${items.producto}</h5></div>
                </div>
                    <div class="modal-body d-flex justify-content-evenly flex-wrap align-items-center">
                            <img src="../img/${items.logo}" alt="">
                            <img src="../img/${items.pop}" alt="">
                            
                       
                        <div class="col-6 full__media  mb-5 border border-light bg-light">
                            <ul style="list-style: none;" class="p-3">
                                <li style="line-height:1">
                                   <p class="font__nunito text__justify"> <span class="color__blue font__nunito fw-bold text-uppercase">${items.producto}</span>: ${items.descripcion}</p>  
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">RECOMENDACION</span>: ${items.recomendaciones}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">INTRUCCIONES</span>: ${items.instrucciones}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">PRESENTACION</span>: ${items.presentacion}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">SABOR</span>: ${items.sabor}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">CONSERVACION</span>: ${items.conservacion}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">PRECAUCIONES</span>: ${items.precauciones}</p>
                                </li>
                            </ul>
                            
                        </div>
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
            <img src="img/${items.img}" alt="" class="img-fluid full__media sombra__baner border__radius img__hover">
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
                <div><h5 class="modal-title color__blue font__nunito text-capitalize" id="Modal-1" style="font-size: 30px;">${items.producto}</h5></div>
                </div>
                    <div class="modal-body d-flex justify-content-evenly flex-wrap align-items-center">
                            <img src="../img/${items.logo}" alt="">
                            <img src="../img/${items.pop}" alt="">
                            
                       
                        <div class="col-6 full__media  mb-5 border border-light bg-light">
                            <ul style="list-style: none;" class="p-3">
                                <li style="line-height:1">
                                   <p class="font__nunito text__justify"> <span class="color__blue font__nunito fw-bold text-uppercase">${items.producto}</span>: ${items.descripcion}</p>  
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">RECOMENDACION</span>: ${items.recomendaciones}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">INTRUCCIONES</span>: ${items.instrucciones}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">PRESENTACION</span>: ${items.presentacion}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">SABOR</span>: ${items.sabor}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">CONSERVACION</span>: ${items.conservacion}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">PRECAUCIONES</span>: ${items.precauciones}</p>
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
        <img src="img/${items.img}" alt="" class="img-fluid full__media sombra__baner border__radius img__hover">
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
                <div><h5 class="modal-title color__blue font__nunito text-capitalize" id="Modal-1" style="font-size: 30px;">${items.producto}</h5></div>
                </div>
                    <div class="modal-body d-flex justify-content-evenly flex-wrap align-items-center">
                            <img src="../img/${items.logo}" alt="">
                            <img src="../img/${items.pop}" alt="">
                            
                       
                        <div class="col-6 full__media  mb-5 border border-light bg-light">
                            <ul style="list-style: none;" class="p-3">
                                <li style="line-height:1">
                                   <p class="font__nunito text__justify"> <span class="color__blue font__nunito fw-bold text-uppercase">${items.producto}</span>: ${items.descripcion}</p>  
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">RECOMENDACION</span>: ${items.recomendaciones}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">INTRUCCIONES</span>: ${items.instrucciones}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">PRESENTACION</span>: ${items.presentacion}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">SABOR</span>: ${items.sabor}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">CONSERVACION</span>: ${items.conservacion}</p>
                                   <p class="font__nunito text__justify"><span class="color__blue font__nunito fw-bold">PRECAUCIONES</span>: ${items.precauciones}</p>
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

