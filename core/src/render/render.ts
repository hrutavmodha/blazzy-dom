import { resetIndexPointer, setContext } from '../hooks/useState'
export default function render(
    element: HTMLElement,
    parent?: HTMLElement,
): void {
    resetIndexPointer()
    if (!parent) {
        setContext(window.location.pathname || '/')
    }
    if (parent) {
        parent.innerHTML = ''
        parent.appendChild(element)
    } else {
        document.body.innerHTML = ''
        document.body.appendChild(element)
    }
}
