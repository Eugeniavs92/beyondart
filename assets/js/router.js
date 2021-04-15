// router - pathFInder

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'
const findComponentByPath = (path) => routes.find(el => el.path.match(path)) || undefined;
const router = () =>{
    const component = findComponentByPath(parseLocation()) ? findComponentByPath(parseLocation()).component : ErrorComponent;
    document.getElementById('app').innerHTML = component.render() 
    component.postRender()
}
window.addEventListener('load', router)
window.addEventListener('hashchange', router)

