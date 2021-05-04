// router - pathFInder

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'
const findComponentByPath = (path) => routes.find(el => el.path.match(path)) || undefined;
const router = () =>{
    const component = findComponentByPath(parseLocation()) ? findComponentByPath(parseLocation()).component : ErrorComponent;
    document.getElementById('app').innerHTML = component.render() 
    window.scroll({top: 0, left: 0, behavior: 'auto'})
    component.postRender()
}
window.addEventListener('load', router)
window.addEventListener('hashchange', router)

