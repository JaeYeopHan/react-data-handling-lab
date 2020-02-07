import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NullComment } from '@/models/PostDomains'
import { ICommentEntity } from '@/models/PostEntities'

export interface ICommentState {
  comments?: { [key: string]: ICommentEntity }
}

const name = 'Comment'
const initialState: ICommentState = {
  comments: {},
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    fetched(state: ICommentState, action: PayloadAction<ICommentState>) {
      const { comments } = action.payload

      state.comments = comments
    },
  },
})

const getComment = (
  state: ICommentState,
  props: { id: string },
): ICommentEntity => {
  if (!state.comments) {
    return NullComment
  }

  return state.comments[props.id]
}

export const COMMENT = _.name
export const commentActions = _.actions
export const commentReducer = _.reducer
export const commentSelector = {
  comment: getComment,
}
