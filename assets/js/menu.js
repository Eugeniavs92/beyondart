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