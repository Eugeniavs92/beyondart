// componentes

const IndexComponent = {
    render: ()=>{
        return `
        
    <div class="banner-index padding-inicial">
        <div class="banner-index__text">
            <p class="banner__title">
                ¡Hola! Soy Ale
            </p>
            <p class="banner__text">
                Tengo 22 años, nací en Perú, y emigré a Argentina en el año 2019. Soy mamá de un hermoso gatito llamado Jagger. Estudio Ilustración en la Universidad de Palermo, y Actuación en la Universidad Nacional de las Artes (Argentina). Soy creadora de Beyond Art: una marca, un emprendimiento, proyecto social y comunidad artística. 
            </p>
            <a href="#/beyondart" class="boton">VER MÁS</a>
        </div>

        <div class="banner-index__img">
        </div>
    </div>


    <div class="container-md mb-5">
        <h3 class="titulo">ÚLTIMOS TRABAJOS</h3>

        <div id="trabajos-container" class="card-container-ba">
        </div>

        <h3 class="titulo">ÚLTIMOS PRODUCTOS</h3>

        <div id="shop-container" class="card-container-ba">
        </div>
    </div>
        `
    },
    postRender: ()=>{
        const trabajosContainer = document.getElementById('trabajos-container')

        let frameCount = 12;

        for (let i=0; i < 12; i++) {
            const tr = trabajos[i]

            trabajosContainer.innerHTML += `
                <div class="card-box">
                    <div class="card-shop">
                        <div class="descripcion-container frame${frameCount}">
                            <h3 class="titulo-obra">${tr.titulo}</h3>
                            <div class="descripcion-text">
                                ${tr.desc}
                            </div>
                        </div>
                        <img src=${tr.img}>
                    </div>
                </div>
            `
            frameCount++
            (frameCount > 19) && (frameCount = 12)
        }

        // ultimos productos
        const shopContainer = document.getElementById('shop-container');

        const productos = elefante.slice(0, 4).concat(mariposa.slice(0, 4)).concat(unDiaALaVez.slice(0, 4))

        for (let i=0; i < 12; i++) {
            const prod = productos[i]

            shopContainer.innerHTML += `
            <div class="card-box">
            <div class="card-shop">
            <div class="descripcion-container frame${frameCount}">
            <h3 class="titulo-obra">${prod.titulo}</h3>
            <div class="descripcion-text">
            ${prod.desc}
            </div>
            </div>
            <img src=${prod.img}>
            <div class="tipo-articulo">${prod.tipo}</div>
            <div class="titulo-obra">${prod.titulo}</div>
            <div class="precio">$${prod.precio}</div>
            </div>
            </div>
            `
            frameCount++
            (frameCount > 19) && (frameCount = 12)
        }
    }
}
const BeyondArtComponent = {
    render: ()=>{
        return `
        <div class="banner-index padding-inicial">
            <div class="banner-index__img img-beyondart1">
            </div>
        
            <div class="banner-index__text banner-beyond__1">
                <p class="banner__title">
                    ¡Hola! Soy Ale
                </p>
                <p class="banner__text">
                     Tengo 22 años, nací en Perú, y emigré a Argentina en el año 2019. Soy mamá de un hermoso gatito llamado Jagger. Estudio Ilustración en la Universidad de Palermo, y Actuación en la Universidad Nacional de las Artes (Argentina). Soy creadora de Beyond Art: una marca, un emprendimiento, proyecto social y comunidad artística. 
                </p>
                <p class="banner__text">
                    Mi pasión está en poder compartir mi arte con el mundo y visibilizarlo como una herramienta de transformación social y personal. 
                </p>
                <a href="#/trabajos" class="boton">VER TRABAJOS</a>
            </div>
        </div>
        
        <img src="./assets/images/imagen-beyond-art-2.png" alt="beyondaart" class="beyond-middel-img"/>

        <div class="banner-index">
            <div class="banner-index__text banner-beyond__2">
                <p class="banner__title">
                   Beyond Art
                </p>
                <p class="banner__text">
                    Beyond Art nació en un verano aburrido del 2016 con unos plumones faber castell y hojas para impresora. Jamás imaginé que se convertiría en algo tan importante, pero con el tiempo, el color empezó a sumergirse en mí. Esta marca es el resultado de años de evolución y crecimiento personal, que nace como mi intento de compartir mi arte y lo que hago con el mundo, irradiando y llevándole a luz a todas las personas que se acerquen. 
                </p>
                <p class="banner__text">
                    Ahora, Beyond Art es más que sólo su faceta artística, sino que también trabajo junto a mis compañeros en fomentar un proyecto social que consiste en llevar el arte más allá de todas las fronteras y enseñarlo como una herramienta de crecimiento y transformación personal.
                </p>
                <a href="#/proyecto-social" class="boton">CONOCER PROYECTO</a>
            </div>

            <div class="banner-index__img img-beyondart2">
            </div>
        </div>
        `
    },
    postRender: ()=>{

    }
}
const PortfolioComponent = {
    render: ()=>{
        return `
        <h3 class="titulo padding-inicial">MIS TRABAJOS</h3>
        <div class="container-md mb-5">
            <div id="portfolio-container" class="card-container-ba">
            
            </div>
        </div>`
    },
    postRender: ()=>{

        const portfolioContainer = document.getElementById('portfolio-container')

        let frameCount = 12;
        
        trabajos.forEach(tr => {
        
            portfolioContainer.innerHTML += `
            <div class="card-box">
                <div class="card-shop">
                    <div class="descripcion-container frame${frameCount}">
                        <h3 class="titulo-obra">${tr.titulo}</h3>
                        <div class="descripcion-text">
                            ${tr.desc}
                        </div>
                    </div>
                    <img src=${tr.img}>
                </div>
            </div>
        `
        
            frameCount++
            (frameCount > 19) && (frameCount = 12)
        })
    }
}
const EscuelaDigitalComponent = {
    render: ()=>{
        return `
        <div class="banner-index padding-inicial">
            <div class="banner-index__img img-escueladigital">
            </div>
        
            <div class="banner-index__text banner-escuela__text">
                <p class="banner__title">
                    Beyond Art Digital Studio
                </p>
                <p class="banner__text">
                    Nuestra escuela digital nace a partir de nuestra necesidad de ser autosustentables y poder sostener lo que más nos importa: el proyecto social. El equipo de educadores se compone por jóvenes artistas de Perú y Argentina, que dirigimos los talleres tanto de la escuela digital como también del proyecto social. Nuestro objetivo es compartir nuestro arte con la mayor cantidad de personas posible, y ayudar a otrxs a que también tengan, en algunos casos, sus primeros acercamientos con el mundo artístico, compartiendo nuestros ideales de una educación artística experimental que sirva como herramienta de evolución y crecimiento personal.
                </p>
                <a href="#/escuela-digital" id="boton-ver-talleres" class="boton">VER TALLERES</a>
            </div>
        </div>

        <div class="container-md mt-5 mb-5">
            <div class="texto-container">
                <div class="subtitulo">
                    Beyond Art Digital Studio
                </div>
                <div class="texto">
                    Nuestra escuela digital nace a partir de nuestra necesidad de ser autosustentables y poder sostener lo que más nos importa: el proyecto social. El equipo de educadores se compone por jóvenes artistas de Perú y Argentina, que dirigimos los talleres tanto de la escuela digital como también del proyecto social. Nuestro objetivo es compartir nuestro arte con la mayor cantidad de personas posible, y ayudar a otrxs a que también tengan, en algunos casos, sus primeros acercamientos con el mundo artístico, compartiendo nuestros ideales de una educación artística experimental que sirva como herramienta de evolución y crecimiento personal.
                </div>
            </div>

            <h3 class="titulo">NUESTROS TALLERES</h3>
            <div id="talleres-container"></div>


            <h3 class="titulo">LÍDERES</h3>
            <div id="lideres-container" class="card-container-ba lideres"></div>
        </div>`
    },
    postRender: ()=>{

        const talleresContainer = document.getElementById('talleres-container')

        talleres.forEach((taller) => {
        
            talleresContainer.innerHTML += `
                <div class="taller">
                    <div class="card border-top-${taller.framecolor}">
                        <img src=${taller.img} class="card-img-top-talleres">
                        <div class="card-body">
                            <div class="card-title">${taller.nombre}</div>
                            <div class="card-subtitle">${taller.profesor ? 'Por ' + taller.profesor : taller.alt}</div>
                            <p class="card-text">${taller.desc}</p>
                            <div class="btn-talleres-container">
                                <a href="#" class="boton-escuela btn-${taller.framecolor}">QUIERO SABER MÁS</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        
        })

        const lideresContainer = document.getElementById('lideres-container')

        lideres.forEach((lider) => {

            lideresContainer.innerHTML += `
                    <div class="card trabajos lideres">
                        <div class="descripcion-container ${lider.framecolor}">
                            <h3 class="titulo-obra">${lider.nombre}</h3>
                            <div class="descripcion-text">
                                ${lider.desc}
                            </div>
                        </div>
                        <img src=${lider.img} alt=${lider.nombre}>
                    </div>
            `
        })

        const botonVerTalleres = document.getElementById('boton-ver-talleres')
        botonVerTalleres.addEventListener('click', ()=>{
            talleresContainer.scrollIntoView()
        })
    }
}
const ProyectoSocialComponent = {
    render: ()=>{
        return `
        <div class="banner-index banner-proyectosocial padding-inicial">
            <div class="banner-index__text banner-proyecto__text">
                <p class="banner__title">
                    Proyecto Social
                </p>
                <p class="banner__text">
                    De la mano de Beyond Art, nace esta hermosa iniciativa que nos trae a nosotros, un grupo de jóvenes artistas latinoamericanos, a compartir nuestros conocimientos y experiencias artísticas con la comunidad. Creemos en el arte como una experiencia de transformación social y personal y en la educación artística experimental. Nuestro objetivo es, además de enseñar valores humanos y sociales a través del arte, hacer llegar nuestros diversos talleres artísticos a las personas que más lo necesiten, ofreciendo la posibilidad de recibir educación artística orientada a las necesidades de cada uno. La modalidad es virtual mediante encuentros semanales en los que se dictarán de manera gratuita distintos talleres artísticos por los líderes del proyecto.
                </p>
            </div>

            <div class="banner-index__img img-proyectosocial">
            </div>
        </div>

        <div class="container-md mt-5 mb-5">
            

            <h3 class="titulo">GRUPOS DE EDAD</h3>

            <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-5">
                    <div class="card border-top-frame1">
                        <div class="card-body">
                            <div class="card-subtitle">INSCRIPCIONES ABIERTAS</div>
                            <div class="card-title">Grupo 8 a 12 años</div>
                            <p class="card-text">Grupo orientado a niñxs de 8 a 12 años. Trabajeremos en distintos talleres artísticos mediante encuentros semanales en la plataforma zoom.</p>
                            <div class="btn-talleres-container">
                                <a href="#" class="boton-proyecto btn-frame1" id="btn-taller">QUIERO INSCRIBIRME</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-5">
                    <div class="card">
                        <div class="card-body border-top-frame2">
                            <div class="card-subtitle">INSCRIPCIONES ABIERTAS</div>
                            <div class="card-title">Grupo 13 a 17 años</div>
                            <p class="card-text">Grupo orientado a adolescentes de 13 a 17 años. Trabajeremos en distintos talleres artísticos mediante encuentros semanales en la plataforma zoom.</p>
                            <div class="btn-talleres-container">
                                <a href="#" class="boton-proyecto btn-frame2" id="btn-taller">QUIERO INSCRIBIRME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="titulo">LÍDERES</h3>

            <div id="lideres-container" class="card-container-ba lideres">
                <!-- cards desde data.js  -->
            </div>

            <h3 class="titulo">¿QUERÉS COLABORAR?</h3>

            <div class="texto-container mb-5">
                <div class="subtitulo">
                    Tu donación nos ayuda a crecer
                </div>
                <div class="texto">
                    Este proyecto no sería posible si no fuese por las personas que ayudan mediante distintas colaboraciones. Éstas son muy importantes para lograr la sostenibilidad del proyecto y hacen posible nuestro crecimiento. Las donaciones nos permiten estimular especialmente el área de proyecto social, ya que hacemos recaudaciones para poder regalarle en fechas importantes días lindos a niños en zonas vulnerables .
                </div>
                <div class="contenedor-membresia text-center">
                    <a class="btn-membresia text-center">QUIERO SER AUSPICIADOR</a>
                    <a class="btn-membresia text-center">QUIERO DONAR</a>
                </div>
            </div>

        </div>`
    },
    postRender: ()=>{
        const lideresContainer = document.getElementById('lideres-container')

        lideres.forEach((lider) => {
        
            lideresContainer.innerHTML += `
                     <div class="card trabajos lideres">
                        <div class="descripcion-container ${lider.framecolor}">
                            <h3 class="titulo-obra">${lider.nombre}</h3>
                            <div class="descripcion-text">
                                ${lider.desc}
                            </div>
                        </div>
                        <img src=${lider.img} alt=${lider.nombre}>
                    </div>
            `
        })
    }
}
const ShopComponent = {
    render: ()=>{
        return `
            <h3 class="titulo padding-inicial">SHOP BEYOND ART</h3>
            <div id="shop-container" class="card-container-ba mb-5"></div>
        `
    },
    postRender: ()=>{

        const shopContainer = document.getElementById('shop-container');

        const productos = elefante.concat(mariposa).concat(unDiaALaVez)
        
        let frameCount = 12;
        productos.forEach(prod => {
        
            shopContainer.innerHTML += `
                <div class="card-box">
                    <div class="card-shop">
                        <div class="descripcion-container frame${frameCount}">
                            <h3 class="titulo-obra">${prod.titulo}</h3>
                            <div class="descripcion-text">
                                ${prod.desc}
                            </div>
                        </div>
                        <img src=${prod.img}>
                        <div class="tipo-articulo">${prod.tipo}</div>
                        <div class="titulo-obra">${prod.titulo}</div>
                        <div class="precio">$${prod.precio}</div>
                    </div>
                </div>
            `
        
            frameCount++
            (frameCount > 19) && (frameCount = 12)
        })
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
    {path: '/trabajos', component: PortfolioComponent},
    {path: '/escuela-digital', component: EscuelaDigitalComponent},
    {path: '/proyecto-social', component: ProyectoSocialComponent},
    {path: '/shop', component: ShopComponent}
]
