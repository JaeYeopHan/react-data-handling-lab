import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

interface IDimmedProps {
  isShow: boolean
  onClick: () => void
  children: ReactNode
}

const StyledDiv = styled<'div', IDimmedProps>('div')`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 99;
  width: 100%;
  align-items: center;

  &:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    content: '';
  }
`

export const Dimmed = (props: IDimmedProps) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>
}
