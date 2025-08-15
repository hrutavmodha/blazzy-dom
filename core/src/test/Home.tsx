import Heading from '../components/Heading'
import Division from '../components/Division'
import Paragraph from '../components/Paragraph'
import About from './About'
import Input from '../components/Input'
import useState from '../hooks/useState'
export default function Home() {
    const [input, setInput] = useState('')
    return (
        <Division id="myDiv">
            <Heading level={1}>Hello World</Heading>
            <Paragraph>This is a paragraph</Paragraph>
            <About />
            <Input
                type="text"
                placeholder="Enter some text"
                onchange={(e: any) => setInput(e.target.value)}
            />
            <Paragraph>You entered:</Paragraph>
            <Paragraph>{input}</Paragraph>
        </Division>
    )
}