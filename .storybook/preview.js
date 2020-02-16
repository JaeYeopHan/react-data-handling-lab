import { addDecorator } from '@storybook/react'
import { withProvider } from './decorators/addon-redux-toolkit'
import StoryRouter from 'storybook-react-router'
import { withConsole } from '@storybook/addon-console'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withProvider())
addDecorator(StoryRouter())
