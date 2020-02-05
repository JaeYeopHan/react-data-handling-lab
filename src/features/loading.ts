import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ILoadingState {
  [key: string]: boolean
}

const name = 'Loading'

const _ = createSlice({
  name,
  initialState: {},
  reducers: {
    start(state: ILoadingState, action: PayloadAction<string>) {
      state[action.payload] = true
    },
    finish(state: ILoadingState, action: PayloadAction<string>) {
      state[action.payload] = false
    },
  },
})

export const LOADING = _.name
export const loadingActions = _.actions
export const loadingReducer = _.reducer
