import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { ILoadingState, LOADING } from '@/features/common/loading/LoadingSlice'
import { POST, postSelector, postThunks } from '@/features/post/PostSlice'

import { PostLabel } from './PostLabel'
import { PostWrapper } from './PostWrapper'
import { Loading } from './shared/loading/Loading'

export default () => {
  const dispatch = useDispatch()
  const loading = useSelector<IRootState, ILoadingState>(
    state => state[LOADING],
  )
  const postIds = useSelector<IRootState, string[]>(state =>
    postSelector.postIds(state[POST]),
  )

  useEffect(() => {
    dispatch(postThunks.fetchPosts())
  }, [dispatch])

  if (loading[POST]) {
    return <Loading />
  }

  return (
    <main>
      <h1>Normalize Example</h1>
      <PostWrapper>
        {postIds.map(id => (
          <PostLabel key={id} id={id} />
        ))}
      </PostWrapper>
    </main>
  )
}
