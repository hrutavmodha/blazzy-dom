const sideEffects = new WeakMap<Function, Array<any>>()
export default function useEffect(
    callBack: () => void | (() => void),
    dependencies: Array<any>
): void {
    const previousDependency = sideEffects.get(callBack)
    const compareDependency = dependencies.some((
        dependency,
        index
    ) => {
        if (previousDependency) {
            dependency !== previousDependency[index]
        }
    })
    if (!previousDependency || compareDependency) {
        callBack()
    }
    const cleanup = callBack()
    if (typeof cleanup === 'function') {
        cleanup()
    }
    sideEffects.set(callBack, dependencies)
}