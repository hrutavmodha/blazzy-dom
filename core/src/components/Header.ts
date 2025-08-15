export default function Header({
    children,
    ...props
}: {
    children: Array<HTMLElement>
    [key: string]: any
}) {
    const header = document.createElement('header')
    if (!Array.isArray(children)) {
        children = [children]
    }
    children.forEach((child) => {
        header.appendChild(child)
    })
    for (let key in props) {
        if (key.startsWith('on')) {
            header.addEventListener(key.slice(2).toLowerCase(), props[key])
        } else {
            header.setAttribute(key, props[key])
        }
    }
    header.style.top = '0'
    return header
}