export default function render(
    element: HTMLElement,
    parent?: HTMLElement,
): void {
    if (parent) {
        parent.innerHTML = ''
        parent.appendChild(element)
    } else {
        document.body.innerHTML = ''
        document.body.appendChild(element)
    }
}
