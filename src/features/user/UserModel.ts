import { schema } from 'normalizr'

import { IEntityTypeOf } from '@/typings'

export interface IUser {
  id: string
  name: string
}

export const user = new schema.Entity<IUser>('users', {}, { idAttribute: 'id' })

export type IUserEntity = IEntityTypeOf<IUser>

export const NullUser = {
  id: '-1',
  name: '',
}
