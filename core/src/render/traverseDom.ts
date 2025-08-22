const elements: HTMLElement[] = []
export default function traverseDom(
    root: Node = document.body
): HTMLElement[] {
    root.childNodes.forEach((node) => {
        if (node.hasChildNodes()) {
            elements.push(node as HTMLElement)
            traverseDom(node)
        }
        else {
            elements.push(node as HTMLElement)
        }
    })
    return elements
}