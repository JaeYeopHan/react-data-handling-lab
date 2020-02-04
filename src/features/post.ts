import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getPosts, IGetPostsResponse } from '@/api/post'
import { IPostLabel } from '@/models/PostDomains'
import { INormalizedPosts, normalizePost } from '@/models/PostEntities'

import { IPostEntity } from '../models/PostEntities'
import { AppThunk } from '.'
import { ERROR_CODE, errorActions } from './error'
import { loadingActions } from './loading'

export interface IPostState extends INormalizedPosts {}

const name = 'Post'
const initialState: IPostState = {
  entities: {
    posts: {},
  },
  result: [],
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    success(state: IPostState, action: PayloadAction<IGetPostsResponse>) {
      const { entities, result } = normalizePost(action.payload)

      state.entities = entities
      state.result = result
    },
  },
})

const getPostIds = (state: IPostState) => state.result
const getPostLabel = (state: IPostState, props: { id: string }): IPostLabel => {
  const post: IPostEntity = state.entities.posts[props.id]

  return {
    title: post.title,
    author: post.author,
    countOfComment: post.comments.length,
  }
}

export function fetchPosts(): AppThunk {
  return async function(dispatch) {
    dispatch(loadingActions.start(name))
    try {
      const response = await getPosts()

      dispatch(postActions.success(response))
    } catch (e) {
      dispatch(errorActions.trigger(ERROR_CODE.API_ERROR))
    } finally {
      dispatch(loadingActions.finish(name))
    }
  }
}

export const POST = _.name
export const postReducer = _.reducer
export const postActions = _.actions
export const postSelector = {
  postIds: getPostIds,
  postLabel: getPostLabel,
}
export const postThunks = {
  fetchPosts,
}
