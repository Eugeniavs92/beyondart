// index
// ultimos trabajos
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


