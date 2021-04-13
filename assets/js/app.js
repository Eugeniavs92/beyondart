// general


const lideresContainer = document.getElementById('lideres-container')

lideres.forEach((lider) => {

    lideresContainer.innerHTML += `
             <div class="card trabajos">
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


// talleres

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
                        <a href="#" class="btn btn-${taller.framecolor}" id="btn-taller">VER MÁS</a>
                    </div>
                </div>
            </div>
        </div>
    `

})
