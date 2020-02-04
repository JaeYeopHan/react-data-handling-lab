import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { postThunks } from '@/features/post'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postThunks.fetchPosts())
  }, [dispatch])

  return (
    <main>
      <h1>Normalize Example</h1>
      <ul>
        <li>
          <div>title</div>
          <div>body preview</div>
          <div>comment count</div>
        </li>
      </ul>
    </main>
  )
}
