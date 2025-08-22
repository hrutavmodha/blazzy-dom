type State = {
    value: any,
    nodes: Array<Node>,
    ref?: any
}
let state: {
    [key: string]: State
} = {}
export function createState(key: string, value: any) {
    if (!Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = {
            value: value,
            nodes: [],
            ref: undefined
        }
    } else {
        state[key].value = value
    }
    if (!state[key].ref) {
        const ref = {
            get() {
                return state[key].value
            },
            set(v: any) {
                updateState(key, v)
            },
            toString() {
                const v = state[key].value
                return v == null ? '' : String(v)
            },
            valueOf() {
                return state[key].value
            },
            [Symbol.toPrimitive](_hint: string) {
                return state[key].value
            }
        }
        state[key].ref = ref
    }
    return state[key].ref 
}
export function bindState(
    key: string,
    node: Node
) {
    if (!Object.prototype.hasOwnProperty.call(state, key)) {
        throw new Error(`State ${key} does not exists`)
    }
    state[key].nodes.push(node)
    node.textContent = state[key].value == null ? '' : String(state[key].value)
}
export function updateState(key: string, value: any) {
    if (!Object.prototype.hasOwnProperty.call(state, key)) {
        throw new Error(`State "${key}" does not exist`)
    }
    state[key].value = value
    state[key].nodes.forEach((boundNode: Node) => {
        const nodes = Array.from(document.querySelectorAll(`[state="${key}"]`))
        nodes.forEach((node: Node) => {
            node.textContent = String(value)
        })
    })
}