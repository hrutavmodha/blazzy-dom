export default function useScript({
    path,
    ...props
}: {
    path: string
    [key: string]: any
}) {
    const script = document.createElement('script')
    script.src = path
    for (let key in props) {
        script.setAttribute(key, props[key])
    }
    document.body.appendChild(script)
}
