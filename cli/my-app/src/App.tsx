import { Division, Heading, Paragraph } from 'blazzy-dom'
import './styles.css'
export default function App() {
    return (
        <Division id='templateDiv'>
            <Heading level={1}>Welcome to Blazzy DOM</Heading>
            <Paragraph>Edit src/App.tsx to view changes</Paragraph>
        </Division>
    )
}