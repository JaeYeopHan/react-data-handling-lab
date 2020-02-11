import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import StoryRouter from 'storybook-react-router'

import { Label } from '@/components/main/Label'
import { LabelIndex } from '@/components/main/LabelIndex'
import store from '@/features'

export default {
  title: 'Main Page/Label',
  decorators: [
    (storyFn: () => ReactNode) => <Provider store={store}>{storyFn()}</Provider>,
    StoryRouter(),
  ],
}

export const Index = () => <LabelIndex />
export const Item = () => <Label id={'post2'} />
