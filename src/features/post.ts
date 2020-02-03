import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getPosts, IGetPostsResponse } from '@/api/post'
import { INormalizedPostEntity, normalizePost } from '@/entities/PostEntities'

import { AppThunk } from '.'
import { loadingActions } from './loading'

interface IPostState {
  entities: INormalizedPostEntity
  allIds: string[]
}

const name = 'Post'
const initialState: IPostState = {
  entities: {},
  allIds: [],
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    success(state: IPostState, action: PayloadAction<IGetPostsResponse>) {
      const { entities, result } = normalizePost(action.payload)

      state.entities = entities
      state.allIds = result
    },
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
