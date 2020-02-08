import { IPostState, postActions, postReducer } from '@/features/post'

test('add new post', () => {
  // Given
  const state: IPostState = {
    posts: {
      post1: {
        id: 'post1',
        title: 'First Post',
        author: 'user1',
        body: '...post contents 1..',
        comments: ['1', '2'],
      },
    },
    ids: ['post1', 'post2'],
  }
  const id = 'post99'
  const data = {
    id,
    title: 'New Post',
    author: 'Jbee',
    body: 'New post body contents',
  }
  // When
  const result = postReducer(state, postActions.added(data))

  // Then
  const expected = {
    posts: {
      ...state.posts,
      [id]: {
        ...data,
        comments: [],
      },
    },
    ids: state.ids.concat(id),
  }
  expect(result).toEqual(expected)
})
