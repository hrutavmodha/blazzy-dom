import { render, setRender } from 'blazzy-dom'
import App from './App.jsx'
console.log('Went to index.js')
const root = document.getElementById('root')
render(App(), root)
setRender(() => render(App(), root))