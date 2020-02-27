import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { ILoadingState, LOADING } from '@/features/common/loading/LoadingSlice'
import { POST, postSelector, postThunks } from '@/features/post/PostSlice'

import { ListWrapper } from '../shared/layout/ListWrapper'
import { MainContainer } from '../shared/layout/MainContainer'
import { Loading } from '../shared/loading/Loading'
import { Label } from './Label'
import { LabelIndex } from './LabelIndex'

const StyledH1 = styled.h1`
  font-size: 48px;
  letter-spacing: -3px;
  font-weight: bolder;
`

export default () => {
  const dispatch = useDispatch()
  const loading = useSelector<IRootState, ILoadingState>(
    state => state[LOADING],
  )
  const postIds = useSelector<IRootState, string[]>(postSelector.postIds)

  useEffect(() => {
    dispatch(postThunks.fetchPosts())
  }, [dispatch])

  if (loading[POST]) {
    return <Loading />
  }

  return (
    <MainContainer>
      <StyledH1>Normalize Example</StyledH1>
      <ListWrapper>
        <LabelIndex />
        {postIds.map(id => (
          <Label key={id} id={id} />
        ))}
      </ListWrapper>
    </MainContainer>
  )
}
