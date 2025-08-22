import Heading from '../components/Heading'
import Division from '../components/Division'
import Paragraph from '../components/Paragraph'
import { createState, updateState } from '../state/state'
import { Button } from '../components'
export default function Home() {
    const index = createState('count', 1)
    return (
        <Division id="myDiv">
            <Heading level={1}>Hello World</Heading>
            <Paragraph>This is a paragraph</Paragraph>
            <Button onclick={() => updateState('count', index + 1)}>Click Me</Button>
            <Paragraph>You entered:</Paragraph>
            <Paragraph state="count">{index}</Paragraph>
        </Division>
    )
}