import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IRootState } from '@/features'
import { IPostLabel } from '@/features/post/PostModel'
import { postSelector } from '@/features/post/PostSlice'
import { colors } from '@/styles/colors'

import { LabelText, StyledLi } from './LabelIndex'

const StyledLabel = styled(LabelText)`
  background-color: ${colors.white};
`

interface ILabelProps {
  id: string
}

export const Label = (props: ILabelProps) => {
  const { id } = props
  const label = useSelector<IRootState, IPostLabel>(state =>
    postSelector.postLabel(state, { id }),
  )

  return (
    <StyledLi>
      <StyledLabel>
        <Link to={`/${id}`}>{label.title}</Link>
      </StyledLabel>
      <StyledLabel>
        <Link to={`/user/${label.author}`}>{label.author}</Link>
      </StyledLabel>
      <StyledLabel>
        <span>{label.countOfComment}</span>
      </StyledLabel>
    </StyledLi>
  )
}
