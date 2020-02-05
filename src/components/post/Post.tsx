import React from 'react'
import { useParams } from 'react-router'

import { NotFoundPost } from './NotFoundPost'
import { PostContents } from './PostContents'


export default () => {
  const { id } = useParams()

  if (!id) {
    return <NotFoundPost />
  }

  return <PostContents id={id} />
}
