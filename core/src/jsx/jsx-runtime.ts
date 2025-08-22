import { bindState } from "../state/state"

export function jsx(type: any, props: any): HTMLElement {
    for (let attr in props) {
        if (attr === 'state') {
            bindState(props[attr], type({...props}))
        }
    }
    return type({ ...props })
}

export const jsxs = jsx

export function Fragment(props: any) {
    return props.children
}
