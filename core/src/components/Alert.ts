import '../styles/alert.css'
export default function Alert({
    children
}: {
    children: string
}) {
    const div = document.createElement('div')
    const button = document.createElement('button')
    const p = document.createElement('p')
    button.textContent = 'OK'
    p.textContent = children
    p.className = 'alertMsg'
    button.className = 'alertBtn'
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
        animation: alertFadeIn 0.75s ease forwards;
        font-family: 'Segoe UI', sans-serif;`
    button.style.cssText = `
        display: block;
        margin-left: 110px;
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
    p.style.cssText = `
        font-size: 16px;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.4;
    `
    button.onclick = () => {
        div.style.animation = 'alertFadeOut 0.75s ease forwards'
        div.addEventListener('animationend', () => {
            div.remove()
        }, {
            once: true
        })
    }
    div.append(p, button)
    return div
}