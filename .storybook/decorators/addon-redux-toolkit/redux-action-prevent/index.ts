import { Action, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'

export type ActionsPreventMiddlewareOptionType = {
  prevents?: boolean | string[]
  debug?: boolean
}

const defaultOption: ActionsPreventMiddlewareOptionType = {
  debug: true,
  prevents: true,
}

export const preventActions = (
  customOption?: ActionsPreventMiddlewareOptionType,
) => {
  const option = { ...defaultOption, ...customOption }
  const actionPreventMiddleware: Middleware = (store: MiddlewareAPI) => {
    option.debug && console.log(`[ACTION_PREVENT] Applied!`)

    return next => <A extends Action>(action: A) => {
      const triggerAction = () => next(action)
      const preventAction = () => {
        option.debug && console.log(`[ACTION_PREVENT] Prevent ${action.type}!`)

        return store.getState()
      }

      if (!option.prevents) {
        return triggerAction()
      }

      if (typeof option.prevents === 'boolean') {
        return preventAction()
      }

      if (option.prevents.indexOf(action.type.split('/')[0]) > -1) {
        return preventAction()
      }

      return triggerAction()
    }
  }

  return actionPreventMiddleware
}
