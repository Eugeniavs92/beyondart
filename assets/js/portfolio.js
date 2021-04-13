// mis trabajos

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