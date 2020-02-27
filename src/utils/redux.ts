import { IRootState } from '@/features'

type ExtractedPropsType<T> = T extends (state: any, args: infer T) => unknown
  ? T
  : never
type ReturnType<T> = T extends (...args: any[]) => infer T ? T : never

type ConnectedSelectorType<M> = {
  [key in keyof M]: (
    state: IRootState,
    props?: ExtractedPropsType<M[key]>,
  ) => ReturnType<M[key]>
}

export function connectToRoot<T>(
  name: keyof IRootState,
  selectorMap: T,
): ConnectedSelectorType<T> {
  return Object.entries(selectorMap).reduce((prev, [key, selectorFunction]) => {
    return {
      ...prev,
      [key]: (state: IRootState, props: unknown) =>
        selectorFunction(state[name], props),
    }
  }, {} as any)
}
