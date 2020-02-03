import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getPosts, IGetPostsResponse } from '@/api/post'

import { AppThunk } from '.'
import { loadingActions } from './loading'

interface IPostState {}

const name = 'Post'
const initialState: IPostState = {}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    success(state: IPostState, action: PayloadAction<IGetPostsResponse>) {},
  },
})

export function fetchPosts(): AppThunk {
  return async function(dispatch) {
    dispatch(loadingActions.start(name))
    try {
      const response = await getPosts()

      dispatch(postActions.success(response))
    } catch (e) {
    } finally {
      dispatch(loadingActions.finish(name))
    }
  }
}

export const POST = _.name
export const postReducer = _.reducer
export const postActions = _.actions
