import render from '../render/render'
let routes: { [key: string]: () => HTMLElement } = {}
export function setRoutes(newRoutes: typeof routes): void {
    routes = newRoutes
}
export function navigate(path: string): void {
    window.history.pushState({}, '', path)
    renderRoute()
}
export function renderRoute(): void {
    const currentPath = window.location.pathname
    const currentComponent = routes[currentPath] || routes['/']
    if (currentComponent) {
        const root = document.getElementById('root') as HTMLDivElement
        render(currentComponent(), root)
    }
}
window.addEventListener('popstate', () => {
    renderRoute()
})