import React from 'react'
import { useParams } from 'react-router'

import { NotFoundPage } from '../shared/error/NotFoundPage'
import { PostContents } from './PostContents'

export default () => {
  const { id } = useParams()

  if (!id) {
    return <NotFoundPage />
  }

  return <PostContents id={id} />
}
