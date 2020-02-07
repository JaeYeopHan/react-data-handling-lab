import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUserEntity } from './../models/PostEntities'

export interface IUserState {
  users?: { [key: string]: IUserEntity }
}

const name = 'User'
const initialState: IUserState = {
  users: {},
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    fetched(state: IUserState, action: PayloadAction<IUserState>) {
      const { users } = action.payload

      state.users = users
    },
  },
})

export const USER = _.name
export const userActions = _.actions
export const userReducer = _.reducer
