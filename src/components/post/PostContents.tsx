import React from 'react'
import { useSelector } from 'react-redux'

import { IRootState } from '@/features'
import { POST, postSelector } from '@/features/post'
import { IPostEntity } from '@/models/PostEntities'

import { Comment } from './Comment'

interface IPostContentsProps {
  id: string
}

export const PostContents = (props: IPostContentsProps) => {
  const { id } = props
  const post = useSelector<IRootState, IPostEntity>(state =>
    postSelector.post(state[POST], { id }),
  )

  return (
    <main>
      <h1>{post.title}</h1>
      <div className="author">{post.author}</div>
      <article>
        {post.body}
      </article>
      <section>
        <ul>
          {post.comments.map(commentId => (
            <Comment key={`comment-${commentId}`} id={commentId} />
          ))}
        </ul>
      </section>
    </main>
  )
}
