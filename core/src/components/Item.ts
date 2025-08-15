export default function Item({
    children,
    ...props
}: {
    children: string
    [key: string]: any
}) {
    const item = document.createElement('li')
    item.textContent = children
    for (let key in props) {
        if (key.startsWith('on')) {
            item.addEventListener(key.substring(2), props[key])
        } else {
            item.setAttribute(key, props[key])
        }
    }
    return item
}
