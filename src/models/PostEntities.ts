import { normalize, NormalizedSchema, schema } from 'normalizr'

import { IEntityTypeOf, IndexSignatureStringType } from '@/typings'

import { IComment, IPost, IUser } from './PostDomains'

export type IUserEntity = IEntityTypeOf<IUser>

export type ICommentEntity = IEntityTypeOf<IComment>

export type IPostEntity = IEntityTypeOf<IPost>

const user = new schema.Entity<IUser>('users', {}, { idAttribute: 'id' })

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
  string[]
>

export function normalizePost(data: IPost[]): INormalizedPosts {
  return normalize(data, [post])
}
