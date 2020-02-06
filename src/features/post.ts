import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getPosts, IGetPostsResponse } from '@/api/post'
import { IPostLabel, NullComment } from '@/models/PostDomains'
import {
  ICommentEntity,
  INormalizedPosts,
  normalizePost,
} from '@/models/PostEntities'

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
const getPost = (state: IPostState, props: { id: string }): IPostEntity => {
  return state.entities.posts[props.id]
}
const getPostLabel = (state: IPostState, props: { id: string }): IPostLabel => {
  const post: IPostEntity = getPost(state, { id: props.id })

  return {
    title: post.title,
    author: post.author,
    countOfComment: post.comments.length,
  }
}
const getComment = (
  state: IPostState,
  props: { id: string },
): ICommentEntity => {
  if (!state.entities.comments) {
    return NullComment
  }

  return state.entities.comments[props.id]
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
  post: getPost,
  postLabel: getPostLabel,

  comment: getComment,
}
export const postThunks = {
  fetchPosts,
}
