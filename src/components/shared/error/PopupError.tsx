import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import {
  ERROR,
  ERROR_CODE,
  IErrorState,
} from '@/features/common/error/ErrorSlice'
import { colors } from '@/styles/colors'

import { Dimmed } from '../layout/Dimmed'

const PopupWrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
  width: 100%;
  max-width: 320px;
  height: 5em;
  display: inline-block;
  border-radius: 16px;
  background-color: ${colors.white};
  z-index: 100;
  position: relative;
  vertical-align: middle;
`

const PopupTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`

const PopupMessage = styled.div`
  color: ${colors.gray[4]};
`

export const PopupError = () => {
  const { code } = useSelector<IRootState, IErrorState>(state => state[ERROR])

  return (
    <Dimmed isShow={code === ERROR_CODE.CLEAR}>
      <PopupWrapper>
        <PopupTitle>Error!</PopupTitle>
        <PopupMessage>(Code: {code})</PopupMessage>
      </PopupWrapper>
    </Dimmed>
  )
}
