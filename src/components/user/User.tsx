import React from 'react'
import { useParams } from 'react-router'

import { NotFoundPage } from '../shared/error/NotFoundPage'
import { UserProfile } from './UserProfile'

export const User = () => {
  const { id } = useParams()

  if (!id) {
    return <NotFoundPage />
  }

  return <UserProfile id={id} />
}
