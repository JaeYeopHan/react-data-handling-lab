import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { postThunks } from '@/features/post'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postThunks.fetchPosts())
  }, [dispatch])

  return (
    <h1>
      <a
        href="https://github.com/JaeYeopHan/cra-template-unicorn"
        target="_blank"
        rel="noopener noreferrer"
      >
        cra-template-unicorn
      </a>
    </h1>
  )
}
