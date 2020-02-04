import { normalize, NormalizedSchema, schema } from 'normalizr'

import { IndexSignature } from '@/typings'

export interface IUser {
  username: string
  name: string
}

export interface IComment {
  id: number
  author: IUser
  comment: string
}

export interface IPost {
  id: string
  author: IUser
  body: string
  comments: IComment[]
}

const user = new schema.Entity<IUser>('users', {}, { idAttribute: 'username' })

export interface IUserEntity extends IUser {}

const comment = new schema.Entity<IComment>('comments', {
  author: user,
})

export interface ICommentEntity {
  id: Pick<IComment, 'id'>
  author: Pick<IUser, 'username'>
  comment: Pick<IComment, 'comment'>
}

const post = new schema.Entity<IPost>('posts', {
  author: user,
  comments: [comment],
})

export interface IPostEntity {
  id: Pick<IPost, 'id'>
  author: Pick<IUser, 'username'>
  body: string
  comments: Pick<IComment, 'id'>[]
}

type EntityOf<M extends object> = {
  [k in keyof M]: string | number
}

type EntityPost = EntityOf<IPostEntity>

// const usern: Pick<IUser, 'username'> = 'jbee'
// const testPost: IPostEntity = {
//   id: 'id',
//   author: 'jbee',
//   body: 'test',
//   comment: [1],
// }

export type INormalizedPosts = NormalizedSchema<
  {
    posts: IndexSignature<IPostEntity, 'id'>
    comments?: IndexSignature<ICommentEntity, 'id'>
    users?: IndexSignature<IUserEntity, 'username'>
  },
  Pick<IPost, 'id'>[]
>

export function normalizePost(data: IPost[]): INormalizedPosts {
  return normalize(data, [post])
}
