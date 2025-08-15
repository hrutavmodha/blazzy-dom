import Heading from '../components/Heading'
import Division from '../components/Division'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { navigate } from '../router/routing'
import useState from '../hooks/useState'
import Header from '../components/Header'
import List from '../components/List'
import Item from '../components/Item'
import Footer from '../components/Footer'
export default function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Hrutav Modha')
    return (
        <Division id="testDiv">
            <Header>
                <List ordered={false}>
                    <Item>Home</Item>
                    <Item>About</Item>
                    <Item>Contact</Item>
                </List>
            </Header>
            <Heading level={1}>Hello World</Heading>
            <Paragraph>Click below button to land anywhere</Paragraph>
            <Button onclick={() => navigate('/home')}>Go Home</Button>
            <Button onclick={() => navigate('/about')}>Go About</Button>
            <Button onclick={() => navigate('/test')}>Go to State Test</Button>
            <Paragraph>
                Below is basic state example. Click the button below to change
                the 0's value
            </Paragraph>
            <Button onclick={() => setCount(count + 1)}>Change value</Button>
            <Paragraph>{count}</Paragraph>
            <Button onclick={() => setName('')}>Clear</Button>
            <Paragraph>{name}</Paragraph>
            <Footer>
                <Paragraph>Hello World</Paragraph>
            </Footer>
        </Division>
    )
}
