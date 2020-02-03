import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoadingState {
  [key: string]: boolean
}

const name = 'Loading'

const _ = createSlice({
  name,
  initialState: {},
  reducers: {
    start(state: LoadingState, action: PayloadAction<string>) {
      state[action.payload] = true
    },
    finish(state: LoadingState, action: PayloadAction<string>) {
      state[action.payload] = false
    },
  },
})

export const LOADING = _.name
export const loadingActions = _.actions
export const loadingReducer = _.reducer
