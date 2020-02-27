import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IRootState } from '@/features'
import { ICommentEntity } from '@/features/comment/CommentModel'
import { commentSelector } from '@/features/comment/CommentSlice'

interface ICommentProps {
  id: string
}

export const Comment = (props: ICommentProps) => {
  const { id } = props
  const comment = useSelector<IRootState, ICommentEntity>(state =>
    commentSelector.comment(state, { id }),
  )

  return (
    <li>
      <div>{comment.comment}</div>
      <Link to={`/user/${comment.author}`}>{comment.author}</Link>
    </li>
  )
}
