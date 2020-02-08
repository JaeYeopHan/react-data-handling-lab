import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { IUserEntity } from '@/features/user/UserModel'
import { USER, userSelector } from '@/features/user/UserSlice'

interface IUserProfileProps {
  id: string
}

export const UserProfile = (props: IUserProfileProps) => {
  const { id } = props
  const userInfo = useSelector<IRootState, IUserEntity>(state =>
    userSelector.user(state[USER], { id }),
  )

  return (
    <main>
      <h2>User Profile</h2>
      <div>{userInfo.id}</div>
      <div>{userInfo.name}</div>
    </main>
  )
}
