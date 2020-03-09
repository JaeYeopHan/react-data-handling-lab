import React from 'react'

import Main from '@/components/main/Main'
import { POST } from '@/features/post/PostSlice'
import { withState } from '@/stories/addons'


export default {
  title: 'Main Page',
  component: Main,
}

export const Index = () => <Main />

Index.story = {
  decorators: [withState({
    [POST]: {
      posts: {
        'post1': {
          id: 'post1',
          title: 'Mock Title 1',
          author: 'Mock Author 1',
          body: 'Mock body 1',
          comments: [1, 2, 3, 4],
        },
        'post2': {
          id: 'post2',
          title: 'Mock Title 2',
          author: 'Mock Author 2',
          body: 'Mock body 2',
          comments: [1, 2],
        },
      },
      ids: ['post1', 'post2'],
    },
  })],
}
