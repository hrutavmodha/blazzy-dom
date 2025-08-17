import { render, setRender } from 'blazzy-dom'
import App from './App'
const root = document.getElementById('root')
render(App(), root)
setRender(() => render(App(), root))