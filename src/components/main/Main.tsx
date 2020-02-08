import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { ILoadingState, LOADING } from '@/features/common/loading/LoadingSlice'
import { POST, postSelector, postThunks } from '@/features/post/PostSlice'

import { ListWrapper } from '../shared/layout/ListWrapper'
import { MainContainer } from '../shared/layout/MainContainer'
import { Loading } from '../shared/loading/Loading'
import { Label } from './Label'

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
    <MainContainer>
      <h1>Normalize Example</h1>
      <ListWrapper>
        {postIds.map(id => (
          <Label key={id} id={id} />
        ))}
      </ListWrapper>
    </MainContainer>
  )
}
