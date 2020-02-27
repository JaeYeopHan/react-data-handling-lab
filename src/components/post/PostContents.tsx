import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IRootState } from '@/features'
import { IPostEntity } from '@/features/post/PostModel'
import { postSelector } from '@/features/post/PostSlice'

import { ListWrapper } from '../shared/layout/ListWrapper'
import { MainContainer } from '../shared/layout/MainContainer'
import { Comment } from './Comment'

interface IPostContentsProps {
  id: string
}

export const PostContents = (props: IPostContentsProps) => {
  const { id } = props
  const post = useSelector<IRootState, IPostEntity>(state =>
    postSelector.post(state, { id }),
  )

  return (
    <MainContainer>
      <h1>{post.title}</h1>
      <Link to={`/user/${post.author}`} className="author">
        {post.author}
      </Link>
      <article>{post.body}</article>
      <section>
        <ListWrapper>
          {post.comments.map(commentId => (
            <Comment key={`comment-${commentId}`} id={commentId} />
          ))}
        </ListWrapper>
      </section>
    </MainContainer>
  )
}
