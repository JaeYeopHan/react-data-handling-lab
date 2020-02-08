import React from 'react'
import { useParams } from 'react-router'

import { UserProfile } from './UserProfile'

export const User = () => {
  const { id } = useParams()

  if (!id) {
    return <div>NOT FOUND USER</div>
  }

  return <UserProfile id={id} />
}
