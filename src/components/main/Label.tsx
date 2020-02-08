import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IRootState } from '@/features'
import { IPostLabel } from '@/features/post/PostModel'
import { POST, postSelector } from '@/features/post/PostSlice'

const StyledLi = styled.li`
  display: flex;
`

interface ILabelProps {
  id: string
}

export const Label = (props: ILabelProps) => {
  const { id } = props
  const label = useSelector<IRootState, IPostLabel>(state =>
    postSelector.postLabel(state[POST], { id }),
  )

  return (
    <StyledLi>
      <Link to={`/${id}`}>{label.title}</Link>
      <Link to={`/user/${label.author}`}>{label.author}</Link>
      <span>{label.countOfComment}</span>
    </StyledLi>
  )
}
