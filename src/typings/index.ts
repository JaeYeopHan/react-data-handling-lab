export interface IndexSignatureStringType<T> {
  [key: string]: T
}

export interface IndexSignatureNumberType<T> {
  [key: number]: T
}

export interface IndexSignature<T, NM extends string> {
  [key: Pick<T, NM> extends string ? string : number]: T
}
