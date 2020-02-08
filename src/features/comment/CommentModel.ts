import { schema } from 'normalizr'

import { IEntityTypeOf } from '@/typings'

import { IUser, user } from '../user/UserModel'

export interface IComment {
  id: number
  author: IUser
  comment: string
}

export const comment = new schema.Entity<IComment>('comments', {
  author: user,
})

export type ICommentEntity = IEntityTypeOf<IComment>

export const NullComment: ICommentEntity = {
  id: -1,
  author: '',
  comment: '',
}
