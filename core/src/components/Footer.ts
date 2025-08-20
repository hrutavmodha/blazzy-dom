export default function Footer({
    children,
    ...props
}: {
    children: Array<HTMLElement>
    [key: string]: any
}): HTMLElement {
    const footer = document.createElement('footer')
    if (!Array.isArray(children)) {
        children = [children]
    }
    children.forEach((child) => {
        footer.appendChild(child)
    })
    for (let key in props) {
        if (key.startsWith('on')) {
            footer.addEventListener(key.substring(2), props[key])
        }
        else {
            footer.setAttribute(key, props[key])
        }
    }
    footer.style.bottom = '0'
    return footer
}