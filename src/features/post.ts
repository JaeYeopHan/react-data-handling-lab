import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getPosts } from '@/api/post'
import { IPostLabel } from '@/models/PostDomains'
import { normalizePost } from '@/models/PostEntities'

import { IPostEntity } from '../models/PostEntities'
import { AppThunk } from '.'
import { commentActions } from './comment'
import { ERROR_CODE, errorActions } from './error'
import { loadingActions } from './loading'
import { userActions } from './user'

export interface IPostState {
  posts: { [key: string]: IPostEntity }
  ids: string[]
}

const name = 'Post'
const initialState: IPostState = {
  posts: {},
  ids: [],
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    fetched(state: IPostState, action: PayloadAction<IPostState>) {
      const { posts, ids } = action.payload

      state.posts = posts
      state.ids = ids
    },
    added(
      state: IPostState,
      action: PayloadAction<Omit<IPostEntity, 'comments'>>,
    ) {
      const newPost = {
        ...action.payload, // title, author, body
        comments: [],
      }
      const { id } = newPost

      state.ids.push(id)
      state.posts[id] = newPost
    },
  },
})

const getPostIds = (state: IPostState) => state.ids
const getPost = (state: IPostState, props: { id: string }): IPostEntity => {
  return state.posts[props.id]
}
const getPostLabel = (state: IPostState, props: { id: string }): IPostLabel => {
  const post: IPostEntity = getPost(state, { id: props.id })

  return {
    title: post.title,
    author: post.author,
    countOfComment: post.comments.length,
  }
}

// TODO ! Check code structure...
export function fetchPosts(): AppThunk {
  return async function(dispatch) {
    dispatch(loadingActions.start(name))
    try {
      const response = await getPosts()
      const { entities, result } = normalizePost(response)

      dispatch(postActions.fetched({ posts: entities.posts, ids: result }))
      dispatch(commentActions.fetched({ comments: entities.comments }))
      dispatch(userActions.fetched({ users: entities.users }))
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
}
export const postThunks = {
  fetchPosts,
}
