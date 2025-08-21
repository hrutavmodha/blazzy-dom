import Heading from '../components/Heading'
import Division from '../components/Division'
import Paragraph from '../components/Paragraph'
import List from '../components/List'
import Item from '../components/Item'
import Code from '../components/Code'
export default function About() {
    return (
        <Division>
            <Heading level={1}>About's Page</Heading>
            <Paragraph>This is about</Paragraph>
            <List ordered={false} type="circle">
                <Item>Test Item</Item>
                <Item>Test Item</Item>
                <Item>Test Item</Item>
            </List>
            <List ordered type="a">
                <Item>Test Item</Item>
                <Item>Test Item</Item>
                <Item>Test Item</Item>
            </List>
            <Code>
                console.log('Hello World')
                alert('This is an alert')
            </Code>
        </Division>
    )
}
