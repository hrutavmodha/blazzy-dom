import '../styles/prompt.css'
export default function Prompt({
    children,
}: {
    children: string
}) {
    let resolver: (value: string) => void
    const response: Promise<string> = new Promise((resolve) => {
        resolver = resolve
    })
    const div = document.createElement('div')
    const p = document.createElement('p')
    const input = document.createElement('input')
    const button = document.createElement('button')
    input.type = 'text'
    input.placeholder = 'Enter here'
    div.className = 'prompt'
    p.className = 'promptMsg'
    input.className = 'promptInput'
    button.className = 'promptBtn'
    p.textContent = children
    button.textContent = 'OK'
    button.onclick = () => {
        div.style.animation = 'promptFadeOut 0.75s ease forwards'
        div.addEventListener('animationend', () => {
            div.remove()
        }, {
            once: true
        })
        resolver(input.value)
    }
    div.append(p, input, button)
    document.body.appendChild(div)
    return response
}