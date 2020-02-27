import { IRootState } from '@/features'

type IndexSignatureWith<T> = { [key: string]: T }
type SliceSelectorType = IndexSignatureWith<(state: any, ...args: any) => any>
type RootSelectorType = IndexSignatureWith<
  (state: IRootState, ...args: any) => any
>

export function connectToRoot(
  name: keyof IRootState,
  selectorMap: SliceSelectorType,
): RootSelectorType {
  return Object.entries(selectorMap).reduce((prev, [key, selectorFunction]) => {
    return {
      ...prev,
      [key]: (state: IRootState, ...args: any) =>
        selectorFunction(state[name], ...args),
    }
  }, {})
}
