import { normalize, NormalizedSchema, schema } from 'normalizr'

import { IEntityTypeOf, IndexSignatureStringType } from '@/typings'

export interface IUser {
  username: string
  name: string
}

export type IUserEntity = IEntityTypeOf<IUser>

export interface IComment {
  id: number
  author: IUser
  comment: string
}

export type ICommentEntity = IEntityTypeOf<IComment>

export interface IPost {
  id: string
  author: IUser
  body: string
  comments: IComment[]
}

export type IPostEntity = IEntityTypeOf<IPost>

const user = new schema.Entity<IUser>('users', {}, { idAttribute: 'username' })

const comment = new schema.Entity<IComment>('comments', {
  author: user,
})

const post = new schema.Entity<IPost>('posts', {
  author: user,
  comments: [comment],
})

export type INormalizedPosts = NormalizedSchema<
  {
    posts: IndexSignatureStringType<IPostEntity>
    comments?: IndexSignatureStringType<ICommentEntity>
    users?: IndexSignatureStringType<IUserEntity>
  },
  Pick<IPost, 'id'>[]
>

export function normalizePost(data: IPost[]): INormalizedPosts {
  return normalize(data, [post])
}
