export interface IndexSignatureStringType<V> {
  [key: string]: V
}

export interface IndexSignatureNumberType<V> {
  [key: number]: V
}

export type IEntityTypeOf<M> = {
  [k in keyof M]: M[k]
}
