export function jsx(type: any, props: any): HTMLElement {
    return type({ ...props })
}

export const jsxs = jsx

export function Fragment(props: any) {
    return props.children
}
