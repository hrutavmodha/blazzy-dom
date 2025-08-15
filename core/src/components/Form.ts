export default function Form({
    children,
    ...props
}: {
    children: Array<HTMLElement>
    [key: string]: any    
}) {
    const form = document.createElement('form')
    for (let key in props) {
        if (key.startsWith('on')) {
            form.addEventListener(key.substring(2), props[key])
        }
        else {
            form.setAttribute(key, props[key])
        }
    }
    children.forEach((child: any) => {
        form.appendChild(child)
    })
    return form
}