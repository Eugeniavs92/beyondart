
// shop

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