export default function Script({
    children,
}: {
    children: () => any
}): HTMLScriptElement {
    const js = document.createElement('script')
    js.textContent = `(${children.toString()})()`
    return js
}
