let renderFn: () => void
export function setRender(render: typeof renderFn): void {
    renderFn = render
}
export function reRender(): void {
    if (renderFn) {
        renderFn()
    }
}
