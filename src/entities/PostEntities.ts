import { normalize, NormalizedSchema, schema } from 'normalizr'

export interface IUser {
  username: string
  name: string
}

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

const user = new schema.Entity<IUser>('users', {}, { idAttribute: 'username' })

export interface IUserEntity extends IUser {}

const comment = new schema.Entity<IComment>('comments', {
  author: user,
})

// ? Case 1
export type ICommentEntity = Omit<IComment, 'author'> & Pick<IUser, 'username'>

const post = new schema.Entity<IPost>('posts', {
  author: user,
  comments: [comment],
})

// ? Case 2
export interface IPostEntity {
  id: Pick<IPost, 'id'>
  author: Pick<IUser, 'username'>
  body: string
  comments: Pick<IComment, 'id'>[]
}

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
