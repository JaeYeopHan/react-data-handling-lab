import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import store, { rootReducer } from '@/features'

type StoryFunctionType = () => React.ReactNode
type WithReduxOptionType = {
  preventAction: boolean
  debug: boolean
}
const defaultWithReduxOption: WithReduxOptionType = {
  preventAction: true,
  debug: false
}

export const withProvider = (reduxStore = store) => (storyFn: StoryFunctionType) => {
  return <Provider store={reduxStore}>{storyFn()}</Provider>
}

export const withRedux = (mockState: any, customOption: WithReduxOptionType = defaultWithReduxOption) => {
  const option = { ...defaultWithReduxOption, ...customOption }
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: mockState,
  })

  option.debug && console.log(store.getState())

  return withProvider(store)
}
