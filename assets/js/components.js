// componentes

const IndexComponent = {
    render: ()=>{
        return `
        <div class="row">
        <div class="col-md">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/images/testCarrousel.png" class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/images/testCarrousel.png" class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/images/testCarrousel.png" class="d-block w-100">
                    </div>
                </div>
            </div>

            <h3 class="titulo">ÚLTIMOS TRABAJOS</h3>

            <div class="card-container">
                <div class="card-deck">
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>

            <h3 class="titulo">ÚLTIMOS PRODUCTOS</h3>

            <div class="card-container">
                <div class="card-deck">
                    <div class="card">
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">TIPO DE ARTÍCULO</p>
                            <h5 class="card-title">Título de obre</h5>
                            <p class="card-text">$000,000</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">TIPO DE ARTÍCULO</p>
                            <h5 class="card-title">Título de obre</h5>
                            <p class="card-text">$000,000</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">TIPO DE ARTÍCULO</p>
                            <h5 class="card-title">Título de obre</h5>
                            <p class="card-text">$000,000</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./assets/images/trabajoImg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">TIPO DE ARTÍCULO</p>
                            <h5 class="card-title">Título de obre</h5>
                            <p class="card-text">$000,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    },
    postRender: ()=>{
        
    }
}
const BeyondArtComponent = {
    render: ()=>{
        return `
        <div class="container">
        <div class="row">
            <h3 class="titulo ba">¿QUÉ ES BEYOND ART?</h3>
            <div class="col-md-12 about-ale">
                <div class="sub-container">
                    <img src="../assets/images/testCarrousel.png" alt="video de presentacion" style="width: 573px; height: 482px;">
                    <div class="text-container">
                        <div class="subtitulo">
                            ¡Hola! Soy Ale
                        </div>
                        <div class="texto">
                            <p>
                                Nací en Perú, y emigré a Argentina en el año 2019. Estudio Ilustración en la Universidad de Palermo, y Actuación en la Universidad Nacional de las Artes (Argentina). Estoy en capacitación y entrenamiento constante desde hace más de ocho años, y me desempeño
                                en el ámbito teatral desde hace cinco años.
                            </p>
                            <p>
                                Mi pasión está en poder compartir mi arte con el mundo y visibilizarlo como una herramienta de transformación social y personal.
                            </p>
                        </div>
                    </div>
                    <button class="btn btn-outline-warning btn-ba" type="button"> VER MIS TRABAJOS </button>
                </div>
            </div>

            <div class="col-md-12 about-beyond">
                <div class="sub-container">
                    <img src="../assets/images/testCarrousel.png" alt="video de presentacion" style="width: 573px; height: 482px;">
                    <div class="text-container">
                        <div class="subtitulo">
                            Acerca de Beyond Art
                        </div>
                        <div class="texto">
                            <p>
                                Beyond Art nació en un verano aburrido del 2016 con unos plumones faber castell y hojas para impresora. Con el tiempo, el color empezó a sumergirse en mí. Esta marca es el resultado de años de evolución y crecimiento personal, que nace como mi intento
                                de compartir mi arte y lo que hago con el mundo, irradiando y llevándole a luz a todas las personas que se acerquen.
                            </p>
                            <p>
                                Ahora, Beyond Art es más que sólo su faceta artística, sino que también trabajo junto a mis compañeros en fomentar un proyecto social que consiste en llevar el arte más allá de todas las fronteras y enseñarlo como una herramienta de crecimiento y transformación
                                personal.
                            </p>
                        </div>
                    </div>
                    <button class="btn btn-outline-warning btn-ba" type="button"> CONOCÉ EL PROYECTO </button>
                </div>
            </div>
        </div>
    </div>`
    },
    postRender: ()=>{

    }
}
const PortfolioComponent = {
    render: ()=>{
        return `
        <div class="container">
        <div class="row">
            <h3 class="titulo">MIS TRABAJOS</h3>
            <div class="card-container">
                <div class="card-deck">
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card-deck">
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card-deck">
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card trabajos">
                        <div class="descripcion">
                            <h5>Titulo de obra</h5>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde non dolorum facere quis et, incidunt fugit exercitationem molestias delectus quaerat pariatur laborum corporis blanditiis culpa, consequuntur ipsam nihil sequi?
                            </div>
                        </div>
                        <img src="../assets/images/trabajoImg.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
        </div>
    </div>`
    },
    postRender: ()=>{

    }
}
const EscuelaDigitalComponent = {
    render: ()=>{
        return `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/testCarrousel.png" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/testCarrousel.png" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/testCarrousel.png" class="d-block w-100">
            </div>
        </div>
    </div>

    <div class="container-ba mt-5">
        <div class="texto-container">
            <div class="subtitulo">
                Lorem Ipsum
            </div>
            <div class="texto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>

        <h3 class="titulo">NUESTROS TALLERES</h3>

        <div class="row">
            <div class="card card-taller">
                <img src="../assets/images/trabajoImg.png" class="card-taller-img" alt="...">
                <div class="card-body">
                    <div class="card-title-ba">JUEGOS TEATRALES</div>
                    <div class="card-autor">Por Joaquín Ogusco y Alessandra Cortez</div>
                    <p class="card-text">Escuchamos, transitamos y trabajamos nuestras emociones a través del arte, el teatro y el cuerpo.</p>
                    <a href="#" class="btn btn-outline-primary">VER MÁS</a>
                </div>
            </div>

            <div class="card card-taller">
                <img src="../assets/images/trabajoImg.png" class="card-taller-img" alt="...">
                <div class="card-body">
                    <div class="card-title-ba">JUEGOS TEATRALES</div>
                    <div class="card-autor">Por Joaquín Ogusco y Alessandra Cortez</div>
                    <p class="card-text">Escuchamos, transitamos y trabajamos nuestras emociones a través del arte, el teatro y el cuerpo.</p>
                    <a href="#" class="btn btn-outline-primary">VER MÁS</a>
                </div>
            </div>
            <div class="card card-taller">
                <img src="../assets/images/trabajoImg.png" class="card-taller-img" alt="...">
                <div class="card-body">
                    <div class="card-title-ba">JUEGOS TEATRALES</div>
                    <div class="card-autor">Por Joaquín Ogusco y Alessandra Cortez</div>
                    <p class="card-text">Escuchamos, transitamos y trabajamos nuestras emociones a través del arte, el teatro y el cuerpo.</p>
                    <a href="#" class="btn btn-outline-primary">VER MÁS</a>
                </div>
            </div>
            <div class="card card-taller">
                <img src="../assets/images/trabajoImg.png" class="card-taller-img" alt="...">
                <div class="card-body">
                    <div class="card-title-ba">JUEGOS TEATRALES</div>
                    <div class="card-autor">Por Joaquín Ogusco y Alessandra Cortez</div>
                    <p class="card-text">Escuchamos, transitamos y trabajamos nuestras emociones a través del arte, el teatro y el cuerpo.</p>
                    <a href="#" class="btn btn-outline-primary">VER MÁS</a>
                </div>
            </div>
        </div>

        <h3 class="titulo">NUESTROS TALLERES</h3>

        <div class="texto-container">
            <div class="subtitulo">
                Lorem Ipsum
            </div>
            <div class="texto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <button class="btn btn-outline-warning btn-membresia">QUIERO SER MIEMBRO</button>
        </div>

        <h3 class="titulo">LÍDERES</h3>

        <div class="row">
            <div class="card-lideres">
                <img src="../assets/images/testCarrousel.png">
                <img src="../assets/images/testCarrousel.png">
                <img src="../assets/images/testCarrousel.png">
                <img src="../assets/images/testCarrousel.png">
                <img src="../assets/images/testCarrousel.png">
                <img src="../assets/images/testCarrousel.png">
                <img src="../assets/images/testCarrousel.png">
                <img src="../assets/images/testCarrousel.png">
            </div>
        </div>

    </div>`
    },
    postRender: ()=>{

    }
}
const ProyectoSocialComponent = {
    render: ()=>{
        console.log("proyecto")
    },
    postRender: ()=>{

    }
}
const ShopComponent = {
    render: ()=>{
        console.log("shop")
    },
    postRender: ()=>{

    }
}
const ContactoComponent = {
    render: ()=>{
        console.log("contacto")
    },
    postRender: ()=>{

    }
}

const ErrorComponent = {
    render: ()=>{
        console.log("error")
    },
    postRender: ()=>{
    
    }
}

// rutas

const routes = [
    {path: '/', component: IndexComponent},
    {path: '/beyondart', component: BeyondArtComponent},
    {path: '/portfolio', component: PortfolioComponent},
    {path: '/escueladigital', component: EscuelaDigitalComponent},
    {path: '/proyectosocial', component: ProyectoSocialComponent},
    {path: '/shop', component: ShopComponent},
    {path: '/contacto', component: ContactoComponent}
]
