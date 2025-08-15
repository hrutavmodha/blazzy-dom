export default function Link({
    href,
    children,
    ...props
}: {
    href: string
    children: string | number
    [key: string]: any
}): HTMLAnchorElement {
    const link = document.createElement('a')
    link.href = href
    link.textContent = String(children)
    for (const key in props) {
        if (key.startsWith('on')) {
            link.addEventListener(key, props[key])
        } else {
            link.setAttribute(key, props[key])
        }
    }
    return link
}
