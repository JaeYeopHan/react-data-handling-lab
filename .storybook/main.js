const customWebpackConfig = require('../craco.config.js')
const { addDecorator } = require('@storybook/react')

addDecorator()

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async config => {
    const { webpack } = customWebpackConfig()

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...webpack.alias,
        },
      },
    }
  },
}
