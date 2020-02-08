import { normalize, NormalizedSchema, schema } from 'normalizr'

import { IEntityTypeOf, IndexSignatureStringType } from '@/typings'

import { comment, IComment, ICommentEntity } from '../comment/CommentModel'
import { IUser, IUserEntity, user } from '../user/UserModel'

export interface IPost {
  id: string
  title: string
  author: IUser
  body: string
  comments: IComment[]
}

export type IPostEntity = IEntityTypeOf<IPost>

export const post = new schema.Entity<IPost>('posts', {
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

// export function addPostEntity(normalizedData: INormalizedPosts, newPost: IPost) {
//   const { id } = newPost
//   const { entities, result } = normalizedData

//   return {
//     entities: {
//       ...entities: {
//         post
//       }
//     }
//   }
// }

export interface IPostLabel {
  title: string
  author: string
  countOfComment: number
}
