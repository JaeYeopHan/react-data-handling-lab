import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { POST, postSelector } from '@/features/post'
import { IPostLabel } from '@/models/PostDomains'

interface IPostLabelProps {
  id: string
}

export const PostLabel = (props: IPostLabelProps) => {
  const label = useSelector<IRootState, IPostLabel>(state =>
    postSelector.postLabel(state[POST], { id: props.id }),
  )

  return (
    <li>
      <div>{label.title}</div>
      <div>{label.author}</div>
      <div>{label.countOfComment}</div>
    </li>
  )
}
