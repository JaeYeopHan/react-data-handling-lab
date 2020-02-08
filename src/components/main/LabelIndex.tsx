import styled from '@emotion/styled'
import React from 'react'

import { colors } from '@/styles/colors'

export const StyledLi = styled.li`
  display: flex;
`

export const LabelText = styled.div`
  padding: 6px;
  flex: 1;
  text-align: center;
  background-color: ${colors.blue[1]};
`

export const LabelIndex = () => {
  return (
    <StyledLi>
      <LabelText>Title</LabelText>
      <LabelText>Author</LabelText>
      <LabelText>Comment</LabelText>
    </StyledLi>
  )
}
