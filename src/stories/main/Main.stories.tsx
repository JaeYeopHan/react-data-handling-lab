
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import StoryRouter from 'storybook-react-router'

import Main from '@/components/main/Main'
import store from '@/features'

export default {
  title: 'Main Page',
  component: Main,
  decorators: [
    (storyFn: () => ReactNode) => <Provider store={store}>{storyFn()}</Provider>,
    StoryRouter(),
  ],
}

export const main = () => <Main />
