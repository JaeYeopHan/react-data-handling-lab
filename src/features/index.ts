import { Action, combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import { COMMENT, commentReducer } from './comment/CommentSlice'
import { ERROR, errorReducer } from './common/error/ErrorSlice'
import { LOADING, loadingReducer } from './common/loading/LoadingSlice'
import { POST, postReducer } from './post/PostSlice'
import { USER, userReducer } from './user/UserSlice'

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
