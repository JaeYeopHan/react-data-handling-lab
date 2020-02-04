import { normalizePost } from '@/models/PostEntities'

test('should return normalized post data', () => {
  // Given
  const data = [
    {
      id: 'post1',
      title: 'First Post',
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
      title: 'Second Post',
      author: { username: 'user2', name: 'User 2' },
      body: '...post contents 2...',
      comments: [],
    },
  ]

  // When
  const result = normalizePost(data)

  // Then
  expect(result).toEqual({
    entities: {
      posts: {
        post1: {
          id: 'post1',
          title: 'First Post',
          author: 'user1',
          body: '...post contents 1..',
          comments: [1, 2],
        },
        post2: {
          id: 'post2',
          title: 'Second Post',
          author: 'user2',
          body: '...post contents 2...',
          comments: [],
        },
      },
      comments: {
        1: {
          id: 1,
          author: 'user2',
          comment: '...comment 1-1..',
        },
        2: {
          id: 2,
          author: 'user3',
          comment: '...comment 1-2..',
        },
      },
      users: {
        user1: {
          username: 'user1',
          name: 'User 1',
        },
        user2: {
          username: 'user2',
          name: 'User 2',
        },
        user3: {
          username: 'user3',
          name: 'User 3',
        },
      },
    },
    result: ['post1', 'post2'],
  })
})
