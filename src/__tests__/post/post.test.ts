import { IPostState, postActions, postReducer } from './../../features/post'

test('add new post', () => {
  // Given
  const state: IPostState = {
    entities: {
      posts: {
        post1: {
          id: 'post1',
          title: 'First Post',
          author: 'user1',
          body: '...post contents 1..',
          comments: ['1', '2'],
        },
      },
    },
    result: ['post1', 'post2'],
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
    entities: {
      posts: {
        ...state.entities.posts,
        [id]: {
          ...data,
          comments: [],
        },
      },
    },
    result: state.result.concat(id),
  }
  expect(result).toEqual(expected)
})
