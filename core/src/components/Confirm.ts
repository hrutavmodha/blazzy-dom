import '../styles/confirm.css'
export default function Confirm({
    children
}: {
    children: string
}):  HTMLDivElement | Promise<boolean> {
    let resolver: (value: boolean) => void
    const response: Promise<boolean> = new Promise((resolve) => {
        resolver = resolve
    })
    const div = document.createElement('div')
    const p = document.createElement('p')
    const okBtn = document.createElement('button')
    const cancelBtn = document.createElement('button')
    okBtn.textContent = 'OK'
    cancelBtn.textContent = 'Cancel'
    p.textContent = children
    div.className = 'confirm'
    p.className = 'confirmMsg'
    okBtn.className = 'confirmOKBtn'
    cancelBtn.className = 'confirmCancelBtn'
    okBtn.onclick = () => {
        div.style.animation = 'confirmFadeOut 0.75s ease forwards'
        div.addEventListener('animationend', () => {
            div.remove()
        }, {
            once: true
        })
        resolver(true)
    }
    cancelBtn.onclick = () => {
        div.style.animation = 'confirmFadeOut 0.75s ease forwards'
        div.addEventListener('animationend', () => {
            div.remove()
        }, {
            once: true
        })
        resolver(false)
    }
    div.append(p, okBtn, cancelBtn)
    document.body.appendChild(div)
    return response
}