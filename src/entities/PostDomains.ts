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
