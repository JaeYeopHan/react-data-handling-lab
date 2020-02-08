import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

const StyledMain = styled.main`
  margin: auto;
  max-width: '480px';
  padding: 12px;
`

interface IMainContainerProps {
  children: ReactNode
}

export const MainContainer = (props: IMainContainerProps) => {
  return <StyledMain>{props.children}</StyledMain>
}
