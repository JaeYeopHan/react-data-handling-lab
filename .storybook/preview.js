import { addDecorator } from '@storybook/react'
import { withProvider } from './decorators/addon-redux-toolkit'
import StoryRouter from 'storybook-react-router'

addDecorator(withProvider())
addDecorator(StoryRouter())
