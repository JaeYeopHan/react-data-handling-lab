export interface IComment {
  id: number
  author: IUser
  comment: string
}

export interface IUser {
  username: string
  name: string
}

export interface IPost {
  id: string
  title: string
  author: IUser
  body: string
  comments: IComment[]
}

export interface IPostLabel {
  title: string
  author: string
  countOfComment: number
}

export const NullComment = {
  id: -1,
  author: '',
  comment: '',
}
