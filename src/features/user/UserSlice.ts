import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { connectToRoot } from '@/utils/redux'

import { IUserEntity, NullUser } from './UserModel'

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

const getUser = (state: IUserState, props: { id: string }): IUserEntity => {
  if (!state.users) {
    return NullUser
  }

  return state.users[props.id]
}

export const USER = _.name
export const userActions = _.actions
export const userReducer = _.reducer
export const userSelector = connectToRoot(name, {
  user: getUser,
})
