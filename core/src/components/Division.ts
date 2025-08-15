export default function Division({
    children,
    ...props
}: {
    children: Array<HTMLElement>
    [key: string]: any
}): HTMLDivElement {
    const div = document.createElement('div')
    if (!Array.isArray(children)) {
        children = [children]
    }
    for (const child of children) {
        if (child instanceof Node) {
            div.appendChild(child)
        }
    }
    for (const key in props) {
        if (key.startsWith('on')) {
            div.addEventListener(key.substring(2), props[key])
        } else {
            div.setAttribute(key, props[key])
        }
    }
    return div
}
