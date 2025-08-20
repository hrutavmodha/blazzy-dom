import {
    Division,
    Heading,
    Paragraph,
    Link
} from 'blazzy-dom'
import './styles.css'
export default function App() {
    return (
        <Division id='templateDiv'>
            <Heading level={1}>Welcome to Blazzy DOM</Heading>
            <Paragraph>Edit src/App.tsx to view changes</Paragraph>
            <Paragraph>Please read more</Paragraph>
            <Link href='https://blazzy-dom-docs.onrender.com/'>here</Link>
        </Division>
    )
}