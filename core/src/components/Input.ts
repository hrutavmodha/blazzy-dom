export default function Input({
    type,
    ...props
}: {
    type: 'text' | 'number' | 'file' | 'date' | 'button' | 'email' | 'password'
    [key: string]: any
}): HTMLInputElement {
    const input = document.createElement('input')
    input.type = type
    for (let key in props) {
        if (key.startsWith('on')) {
            input.addEventListener(key.substring(2), props[key])
        } else {
            input.setAttribute(key, props[key])
        }
    }
    return input
}
