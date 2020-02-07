import { Action, combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import { COMMENT, commentReducer } from './comment'
import { ERROR, errorReducer } from './error'
import { LOADING, loadingReducer } from './loading'
import { POST, postReducer } from './post'

const rootReducer = combineReducers({
  [LOADING]: loadingReducer,
  [ERROR]: errorReducer,

  [POST]: postReducer,
  [COMMENT]: commentReducer,
})

const store = configureStore({ reducer: rootReducer })

export type IRootState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, IRootState, null, Action<string>>

export default store
