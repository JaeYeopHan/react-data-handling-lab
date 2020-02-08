import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IRootState } from '@/features'
import { IPostLabel } from '@/features/post/PostModel'
import { POST, postSelector } from '@/features/post/PostSlice'

interface IPostLabelProps {
  id: string
}

export const PostLabel = (props: IPostLabelProps) => {
  const { id } = props
  const label = useSelector<IRootState, IPostLabel>(state =>
    postSelector.postLabel(state[POST], { id }),
  )

  return (
    <Link to={`/${id}`}>
      <li>
        <div>{label.title}</div>
        <div>{label.author}</div>
        <div>{label.countOfComment}</div>
      </li>
    </Link>
  )
}
