import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ERROR_CODE {
  CLEAR = '',
  API_ERROR = 'API_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export interface IErrorState {
  code: ERROR_CODE
}

const name = 'Error'
const initialState: IErrorState = {
  code: ERROR_CODE.CLEAR,
}
const _ = createSlice({
  name,
  initialState,
  reducers: {
    trigger(state: IErrorState, action: PayloadAction<ERROR_CODE>) {
      state.code = action.payload
    },
    resolve(state: IErrorState) {
      state.code = ERROR_CODE.CLEAR
    },
  },
})

export const ERROR = _.name
export const errorActions = _.actions
export const errorReducer = _.reducer
