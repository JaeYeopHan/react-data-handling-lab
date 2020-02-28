import { Action, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'

export type ActionsPreventMiddlewareOptionType = {
  allowedActions?: string[]
  debug?: boolean
}

export const preventActions = (option: ActionsPreventMiddlewareOptionType) => {
  const actionPreventMiddleware: Middleware = (store: MiddlewareAPI) => {
    option.debug && console.log(`[ACTION_PREVENT] Applied!`)

    return next => <A extends Action>(action: A) => {
      if (option.allowedActions?.includes(action.type)) {
        return next(action)
      }

      return store.getState()
    }
  }

  return actionPreventMiddleware
}
