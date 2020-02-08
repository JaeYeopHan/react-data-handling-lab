import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { ICommentEntity } from '@/features/comment/CommentModel'
import { COMMENT, commentSelector } from '@/features/comment/CommentSlice'

interface ICommentProps {
  id: string
}

export const Comment = (props: ICommentProps) => {
  const { id } = props
  const comment = useSelector<IRootState, ICommentEntity>(state =>
    commentSelector.comment(state[COMMENT], { id }),
  )

  return (
    <li>
      <div>{comment.comment}</div>
      <div>{comment.author}</div>
    </li>
  )
}
