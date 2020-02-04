import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { POST, postSelector, postThunks } from '@/features/post'

import { PostLabel } from './PostLabel'
import { PostWrapper } from './PostWrapper'

export default () => {
  const dispatch = useDispatch()
  const postIds = useSelector<IRootState, string[]>(state => postSelector.postIds(state[POST]))

  useEffect(() => {
    dispatch(postThunks.fetchPosts())
  }, [dispatch])

  return (
    <main>
      <h1>Normalize Example</h1>
      <PostWrapper>
        {postIds.map(id => <PostLabel key={id} id={id} />)}
      </PostWrapper>
    </main>
  )
}
