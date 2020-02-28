import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { userSelector } from '@/features/user/UserSlice'

import { MainContainer } from '../shared/layout/MainContainer'

interface IUserProfileProps {
  id: string
}

export const UserProfile = (props: IUserProfileProps) => {
  const { id } = props
  const userInfo = useSelector((state: IRootState) =>
    userSelector.user(state, { id }),
  )

  return (
    <MainContainer>
      <h2>User Profile</h2>
      <div>{userInfo.id}</div>
      <div>{userInfo.name}</div>
    </MainContainer>
  )
}
