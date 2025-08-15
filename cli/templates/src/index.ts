import {
    render,
    setRender
    // @ts-ignore
} from 'blazzy-dom'
import App from './App'
const root= document.getElementById('root') as HTMLDivElement
render(App(), root)
setRender(() => render(App(), root))