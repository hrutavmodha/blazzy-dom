export default function Image({
    src,
    alt,
    ...props
}: {
    src: string,
    alt?: string,
    [key: string]: any
}) {
    const img = document.createElement('img')
    img.src = src
    if (alt) {
        img.alt = alt
    }
    Object.entries(props).forEach(([key, value]) => {
        img.setAttribute(key, value)
    })
    return img
}
