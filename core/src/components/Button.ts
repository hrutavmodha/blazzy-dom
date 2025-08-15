export default function Button({
    children,
    ...props
}: {
    children: string | number
    [key: string]: any
}): HTMLButtonElement {
    const button = document.createElement('button')
    button.textContent = String(children)
    for (const key in props) {
        if (key.startsWith('on')) {
            button.addEventListener(key.substring(2), props[key])
        } else {
            button.setAttribute(key, props[key])
        }
    }
    return button
}
