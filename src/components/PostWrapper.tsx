import React, { ReactChild } from 'react'

interface IPostWrapperProps {
  children: ReactChild | ReactChild[]
}

export const PostWrapper = (props: IPostWrapperProps) => {
  return <ul>{props.children}</ul>
}
