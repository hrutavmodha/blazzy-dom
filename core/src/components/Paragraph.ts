export default function Paragraph({
    children,
    ...props
}: {
    children: string | number | boolean
    [key: string]: any
}): HTMLParagraphElement {
    const paragraph = document.createElement('p')
    paragraph.textContent = String(children)
    for (const key in props) {
        if (key.startsWith('on')) {
            paragraph.addEventListener(key.substring(2), props[key])
        } else {
            paragraph.setAttribute(key, props[key])
        }
    }
    return paragraph
}
