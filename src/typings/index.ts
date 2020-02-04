export interface IndexSignatureStringType<V> {
  [key: string]: V
}

type ValueType = string | number | symbol
type EntityValueType<P> = P extends (infer R)[] ? string[] : string

export type IEntityTypeOf<M> = {
  [k in keyof M]: M[k] extends ValueType ? M[k] : EntityValueType<M[k]>
}
