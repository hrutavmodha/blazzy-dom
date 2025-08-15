import '../styles/code.css'
import Alert from './Alert'
export default function Code({
    children,
    ...props
}: {
    children: Array<string>
    [key: string]: any    
}) {
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
    console.log(`Type of children is: ${typeof children}`)
    copyBtn.textContent = 'Copy'
    copyBtn.className = 'copyBtn'
    div.className = 'code'
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