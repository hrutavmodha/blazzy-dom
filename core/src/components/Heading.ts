export default function Heading({
    level,
    children,
    ...props
}: {
    level: number
    children: string | number
    [key: string]: any
}): HTMLHeadingElement {
    const heading = document.createElement(`h${level}`) as HTMLHeadingElement
    heading.textContent = String(children)
    for (const key in props) {
        if (key.startsWith('on')) {
            heading.addEventListener(key.substring(2), props[key])
        } else {
            heading.setAttribute(key, props[key])
        }
    }
    return heading
}
