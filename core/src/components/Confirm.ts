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
    div.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 20px;
        width: 50vw;
        z-index: 100;
        animation: confirmFadeIn 0.75s ease forwards;
    `   
    p.style.cssText = `
        font-size: 16px;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.4;
    `
    okBtn.style.cssText = `
        margin: 0 10px 0 10px;
        width: 30%;
        padding: 10px 0;
        background: #4cafef;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.1s ease, background 0.2s ease;
        background-color: #4cafef;
        color: #fff;
        margin-left: 70px;
    `
    cancelBtn.style.cssText = `
        margin: 0 10px 0 10px;
        width: 30%;
        padding: 10px 0;
        background: #4cafef;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.1s ease, background 0.2s ease;
        background-color: #999;
        color: #fff;
    `
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