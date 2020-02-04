import { IPost } from '@/entities/PostEntities'

export type IGetPostsResponse = IPost[]

export function getPosts(): Promise<IGetPostsResponse> {
  return Promise.resolve([
    {
      id: 'post1',
      author: { username: 'user1', name: 'User 1' },
      body: '...post contents 1..',
      comments: [
        {
          id: 1,
          author: { username: 'user2', name: 'User 2' },
          comment: '...comment 1-1..',
        },
        {
          id: 2,
          author: { username: 'user3', name: 'User 3' },
          comment: '...comment 1-2..',
        },
      ],
    },
    {
      id: 'post2',
      author: { username: 'user2', name: 'User 2' },
      body: '...post contents 2..',
      comments: [
        {
          id: 3,
          author: { username: 'user3', name: 'User 3' },
          comment: '...comment 2-1..',
        },
        {
          id: 4,
          author: { username: 'user1', name: 'User 1' },
          comment: '...comment 2-2..',
        },
        {
          id: 5,
          author: { username: 'user3', name: 'User 3' },
          comment: '...comment 2-3..',
        },
      ],
    },
  ])
}
