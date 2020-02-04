import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ERROR_CODE {
  CLEAR = '',
  API_ERROR = 'API_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export interface ErrorState {
  code: ERROR_CODE
}

const name = 'Error'
const initialState: ErrorState = {
  code: ERROR_CODE.CLEAR,
}
const _ = createSlice({
  name,
  initialState,
  reducers: {
    trigger(state: ErrorState, action: PayloadAction<ERROR_CODE>) {
      state.code = action.payload
    },
    resolve(state: ErrorState) {
      state.code = ERROR_CODE.CLEAR
    },
  },
})

export const ERROR = _.name
export const errorActions = _.actions
export const errorReducer = _.reducer
