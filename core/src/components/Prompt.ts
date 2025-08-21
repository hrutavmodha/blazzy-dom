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
    div.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: #f9f9f9;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        width: 50vw;
        padding: 20px;
        opacity: 0;
        z-index: 100;
        animation: promptFadeIn 0.75s ease forwards;
        font-family: 'Segoe UI', sans-serif;
    `
    p.style.cssText = `
        font-size: 16px;
        color: #333;
        margin-bottom: 15px;
        text-align: center;
        line-height: 1.4;
    `
    input.style.cssText = `
        display: block;
        width: 100%;
        padding: 8px 10px;
        font-size: 15px;
        border-radius: 20px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        box-sizing: border-box;
    `
    button.style.cssText = `
        display: block;
        margin-left: 100px;
        width: 50%;
        padding: 10px 0;
        background: #4cafef;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.1s ease, background 0.2s ease;
    `
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