import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

const StyledUl = styled.ul`
  margin: 12px auto;
`

interface IListWrapperProps {
  children: ReactNode
}

export const ListWrapper = (props: IListWrapperProps) => {
  return <StyledUl>{props.children}</StyledUl>
}
