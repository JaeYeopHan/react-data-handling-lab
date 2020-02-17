import React from 'react'

import { Label } from '@/components/main/Label'
import { LabelIndex } from '@/components/main/LabelIndex'
import { POST } from '@/features/post/PostSlice'
import { withState } from '@/stories/addons'

export default {
  title: 'Main Page/Label',
}

export const Index = () => <LabelIndex />
export const Item = () => <Label id={'post2'} />

Item.story = {
  decorators: [withState({
    [POST]: {
      posts: {
        'post2': {
          id: 'post2',
          title: 'Mock Title',
          author: 'Mock Author',
          body: 'Mock body',
          comments: [1, 2],
        },
      },
      ids: ['post2'],
    },
  })],
}
