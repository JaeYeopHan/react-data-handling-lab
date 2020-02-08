import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './Main'
import Post from './post/Post'
import { User } from './user/User'

export default () => {
  return (
    <Switch>
      <Route path="/user/:id" component={User} />
      <Route path="/:id" component={Post} />
      <Route path="/" component={Main} />
    </Switch>
  )
}
