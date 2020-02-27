import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { batch } from 'react-redux'

import { getPosts } from '@/api/post'
import {
  IPostEntity,
  IPostLabel,
  normalizePost,
} from '@/features/post/PostModel'
import { connectToRoot } from '@/utils/redux'

import { AppThunk } from '..'
import { commentActions } from '../comment/CommentSlice'
import { ERROR_CODE, errorActions } from '../common/error/ErrorSlice'
import { loadingActions } from '../common/loading/LoadingSlice'
import { userActions } from '../user/UserSlice'

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

export function fetchPosts(): AppThunk {
  return async function(dispatch) {
    dispatch(loadingActions.start(name))
    try {
      const response = await getPosts()
      const { entities, result } = normalizePost(response)

      batch(() => [
        dispatch(postActions.fetched({ posts: entities.posts, ids: result })),
        dispatch(commentActions.fetched({ comments: entities.comments })),
        dispatch(userActions.fetched({ users: entities.users })),
      ])
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
export const postSelector = connectToRoot(name, {
  postIds: getPostIds,
  post: getPost,
  postLabel: getPostLabel,
})
export const postThunks = {
  fetchPosts,
}
