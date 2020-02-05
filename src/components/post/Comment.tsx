import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { POST, postSelector } from '@/features/post'
import { ICommentEntity } from '@/models/PostEntities'

interface ICommentProps {
  id: string
}

export const Comment = (props: ICommentProps) => {
  const { id } = props
  const comment = useSelector<IRootState, ICommentEntity>(state =>
    postSelector.comment(state[POST], { id }),
  )

  return (
    <li>
      <div>{comment.comment}</div>
      <div>{comment.author}</div>
    </li>
  )
}
