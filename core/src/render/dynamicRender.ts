import render from './render'
import { setRender } from './rerenderer'
export default function dynamicRender(routes: {
    [key: string]: () => HTMLElement
}) {
    const root = document.getElementById('root') as HTMLDivElement
    const currentPath = window.location.pathname
    const currentComponent = routes[currentPath as keyof typeof routes] || routes['/']
    render(currentComponent(), root)
    setRender(() => dynamicRender(routes))
}
