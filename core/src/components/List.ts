export default function List({
    ordered = true,
    children,
    ...props
}: {
    ordered: boolean
    children: Array<HTMLLIElement>
    [key: string]: any
}): HTMLUListElement | HTMLOListElement {
    let list: HTMLUListElement | HTMLOListElement | null = null
    if (ordered === true) {
        list = document.createElement('ol')
    } else {
        list = document.createElement('ul')
    }
    for (const child of children) {
        list.appendChild(child)
    }
    for (const key in props) {
        if (key.startsWith('on')) {
            list.addEventListener(key, props[key])
        } else {
            list.setAttribute(key, props[key])
        }
    }
    list.style += 'margin: 25px;'
    return list
}
