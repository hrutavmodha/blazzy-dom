import { reRender } from '../render/rerenderer'
interface ComponentState {
    states: any[]
    pointer: number
}
let componentStates: { [componentId: string]: ComponentState } = {}
let currentComponentId = ''
export function setContext(componentId: string) {
    currentComponentId = componentId
    if (!componentStates[componentId]) {
        componentStates[componentId] = {
            states: [],
            pointer: 0,
        }
    }
    componentStates[componentId].pointer = 0
}
export default function useState<T>(initialState: T): [T, (val: T) => void] {
    if (!currentComponentId) {
        setContext('/')
    }
    const componentState = componentStates[currentComponentId]
    const index = componentState.pointer
    if (componentState.states[index] === undefined) {
        componentState.states[index] = initialState
    }
    const setState = (newState: T) => {
        if (componentState.states[index] !== newState) {
            componentState.states[index] = newState
            reRender()
        }
    }
    componentState.pointer++
    return [componentState.states[index], setState]
}
export function resetIndexPointer() {
    if (currentComponentId && componentStates[currentComponentId]) {
        componentStates[currentComponentId].pointer = 0
    }
}