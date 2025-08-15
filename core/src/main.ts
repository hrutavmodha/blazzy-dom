import { render, setRender } from './render'
import { setRoutes } from './router'
import About from './test/About'
import App from './test/App'
import Home from './test/Home'
const root= document.getElementById('root') as HTMLDivElement
render(App(), root)
setRoutes({
    '/': App,
    '/home': Home,
    '/about': About
})
setRender(() => render(App(), root))