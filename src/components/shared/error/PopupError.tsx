import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import {
  ERROR,
  ERROR_CODE,
  IErrorState,
} from '@/features/common/error/ErrorSlice'

export const PopupError = () => {
  const { code } = useSelector<IRootState, IErrorState>(state => state[ERROR])

  if (code === ERROR_CODE.CLEAR) {
    return <></>
  }

  return (
    <div>
      <div>Error!</div>
      <div>
        Code: <span>{code}</span>
      </div>
    </div>
  )
}
