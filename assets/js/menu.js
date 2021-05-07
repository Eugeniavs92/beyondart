// menu mobile

const botonAbrirMobile = document.getElementById('navbar-open')
const botonCerrarMobile = document.getElementById('navbar-close')
const menuMobile = document.getElementById('menuMobile')
const links = document.getElementsByClassName('nav-item')

menuMobile.addEventListener('click', (e)=> {
    e.stopPropagation()
})
botonAbrirMobile.addEventListener('click', ()=>{
    menuMobile.classList.add('navbar-active')
})
botonCerrarMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('navbar-active')
})

for (let link of links) {
    link.addEventListener('click', ()=>{
        menuMobile.classList.remove('navbar-active')
    })
}

// footer links

const footFechas = document.getElementById('footProximasFechas')
const footAuspiciador = document.getElementById('footAuspiciador')
const footProyectoSocial = document.getElementById('footProyectoSocial')

footAuspiciador.addEventListener('click', ()=>{
    if(parseLocation() == "/proyecto-social") {
        document.getElementById('titulo-colaborar').scrollIntoView()
    } else {
        footProyectoSocial.click()
        setTimeout( ()=>{
            const offSet = document.getElementById('titulo-colaborar').getBoundingClientRect().top - 100
            window.scroll({top: offSet, behavior: 'smooth'})
        },100)
    }
})

footFechas.addEventListener('click', ()=>{
    if(parseLocation() == "/proyecto-social") {
        document.getElementById('titulo-fechas').scrollIntoView()
    } else {
        setTimeout( ()=>{
            const offSet = document.getElementById('titulo-fechas').getBoundingClientRect().top - 100
            window.scroll({top: offSet, behavior: 'smooth'})
        },100)
    }
})

const footTalleres = document.getElementById('footTalleres')
const footLideres = document.getElementById('footLideres')
const footMembresia = document.getElementById('footMembresia')

footTalleres.addEventListener('click', ()=>{
    if(parseLocation() == "/escuela-digital") {
        document.getElementById('talleres-titulo').scrollIntoView()
    } else {
        setTimeout( ()=>{
            const offSet = document.getElementById('talleres-titulo').getBoundingClientRect().top - 100
            window.scroll({top: offSet, behavior: 'smooth'})
        },100)
    }
})
footLideres.addEventListener('click', ()=>{
    if(parseLocation() == "/escuela-digital") {
        document.getElementById('talleres-lideres').scrollIntoView()
    } else {
        setTimeout( ()=>{
            const offSet = document.getElementById('talleres-lideres').getBoundingClientRect().top - 100
            window.scroll({top: offSet, behavior: 'smooth'})
        },100)
    }
})
footMembresia.addEventListener('click', ()=>{
    if(parseLocation() == "/escuela-digital") {
        document.getElementById('talleres-titulo').scrollIntoView()
    } else {
        setTimeout( ()=>{
            const offSet = document.getElementById('talleres-titulo').getBoundingClientRect().top - 100
            window.scroll({top: offSet, behavior: 'smooth'})
        },100)
    }
})

const wappTextoCerrar = document.getElementById('wapp-texto-cerrar')
const wappTexto = document.getElementsByClassName('wapp-texto')[0]
wappTextoCerrar.addEventListener('click',()=>{
    wappTextoCerrar.classList.remove('wapp-texto-cerrar-active')
    wappTexto.classList.remove('wapp-texto-active')
    
})