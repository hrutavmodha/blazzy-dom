import { reRender } from '../render'
let state: {
    [key: string]: any
} = {}
export function createState(key: string, value: any) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
        return state[key]
    }
    state[key] = value
    return value
}
export function updateState(key: string, value: any) {
    if (!Object.prototype.hasOwnProperty.call(state, key)) {
        throw new Error(`State "${key}" does not exist`)
    }
    else {
        state[key] = value
        reRender()
    }
}