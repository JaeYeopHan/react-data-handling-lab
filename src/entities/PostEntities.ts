import { normalize, NormalizedSchema, schema } from 'normalizr'

export interface IUser {
  username: string
  name: string
}

export interface IUserEntity extends IUser {}

export interface IComment {
  id: string
  author: IUser
  comment: string
}

export interface IPost {
  id: string
  author: IUser
  body: string
  comments: IComment[]
}

export interface IPostEntity {
  id: Pick<IPost, 'id'>
  author: Pick<IUser, 'username'>
  body: string
  comments: Pick<IComment, 'id'>[]
}

const user = new schema.Entity<IUser>('users', {}, { idAttribute: 'username' })

const comment = new schema.Entity<IComment>('comments', {
  author: user,
})

export interface ICommentEntity {
  id: string
  author: string
  comment: string
}

const post = new schema.Entity<IPost>('posts', {
  author: user,
  comments: [comment],
})

export type INormalizedKeys = string[]

export type INormalizedPostEntity = {
  [key: string]: { [key: string]: IPostEntity | ICommentEntity | IUserEntity }
}
export type INormalizedPosts = NormalizedSchema<
  INormalizedPostEntity,
  INormalizedKeys
>

export function normalizePost(data: IPost[]): INormalizedPosts {
  return normalize(data, [post])
}
