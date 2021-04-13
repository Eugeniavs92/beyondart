// menu mobile

const botonAbrirMobile = document.getElementById('navbar-open')
const botonCerrarMobile = document.getElementById('navbar-close')
const menuMobile = document.getElementById('menuMobile')

menuMobile.addEventListener('click', (e)=> {
    e.stopPropagation()
})
botonAbrirMobile.addEventListener('click', ()=>{
    menuMobile.classList.add('navbar-active')
})
botonCerrarMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('navbar-active')
})