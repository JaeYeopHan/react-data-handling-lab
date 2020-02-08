import { IPost } from '@/features/post/PostModel'

export type IGetPostsResponse = IPost[]

export function getPosts(): Promise<IGetPostsResponse> {
  return Promise.resolve([
    {
      id: 'post1',
      title: 'First post',
      author: { id: 'user1', name: 'User 1' },
      body: '...post contents 1..',
      comments: [
        {
          id: 1,
          author: { id: 'user2', name: 'User 2' },
          comment: '...comment 1-1..',
        },
        {
          id: 2,
          author: { id: 'user3', name: 'User 3' },
          comment: '...comment 1-2..',
        },
      ],
    },
    {
      id: 'post2',
      title: 'Second post',
      author: { id: 'user2', name: 'User 2' },
      body: '...post contents 2..',
      comments: [
        {
          id: 3,
          author: { id: 'user3', name: 'User 3' },
          comment: '...comment 2-1..',
        },
        {
          id: 4,
          author: { id: 'user1', name: 'User 1' },
          comment: '...comment 2-2..',
        },
        {
          id: 5,
          author: { id: 'user3', name: 'User 3' },
          comment: '...comment 2-3..',
        },
      ],
    },
  ])
}
