import { Action, combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import { COMMENT, commentReducer } from './comment'
import { ERROR, errorReducer } from './error'
import { LOADING, loadingReducer } from './loading'
import { POST, postReducer } from './post'
import { USER, userReducer } from './user'

const rootReducer = combineReducers({
  [LOADING]: loadingReducer,
  [ERROR]: errorReducer,

  [POST]: postReducer,
  [COMMENT]: commentReducer,
  [USER]: userReducer,
})

const store = configureStore({ reducer: rootReducer })

export type IRootState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, IRootState, null, Action<string>>

export default store
