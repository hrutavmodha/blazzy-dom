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
    div.className = 'alert'
    button.className = 'alertBtn'
    p.className = 'alertMsg'
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