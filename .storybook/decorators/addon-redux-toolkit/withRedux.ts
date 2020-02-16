import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from '@/features'

import { withProvider } from './withProvider'

type WithReduxOptionType = {
  preventAction: boolean
  debug: boolean
}
const defaultWithReduxOption: WithReduxOptionType = {
  preventAction: true,
  debug: false,
}
export const withRedux = (
  mockState: any,
  customOption: WithReduxOptionType = defaultWithReduxOption,
) => {
  const option = { ...defaultWithReduxOption, ...customOption }
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: mockState,
  })

  option.debug && console.log('[STORE] -> ', store.getState())

  return withProvider(store)
}
