import Alert from './Alert'
export default function Code({
    children,
    ...props
}: {
    children: Array<string> | string
    [key: string]: any    
}): HTMLDivElement {
    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(block.innerText)
            Alert({
                children: 'Copied to clipboard'
            })
        }
        catch (error) {
            console.log(error)
        }
    }    
    const div = document.createElement('div')
    const block = document.createElement('pre')
    const copyBtn = document.createElement('button')
    copyBtn.textContent = 'Copy'
    copyBtn.style.cssText = `
        width: fit-content;
        height: fit-content;
        transform: translateX(85vw);
        background: #000;
        border: none;
        color: white;
        cursor: pointer;
    `
    div.style.cssText = `
        padding: 10px;
        padding-top: 20px;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        width: 90vw;
        height: fit-content;
        background: #000;
        color: #fff;
    `
    for (let child of children) {
        block.textContent += '\n' + child
    }
    copyBtn.addEventListener('click', copyCode)
    for (let key in props) {
        if (key.startsWith('on')) {
            div.addEventListener(key.substring(2), props[key])
        }
        else {
            div.setAttribute(key, props[key])
        }
    }
    div.append(copyBtn, block)
    return div
}