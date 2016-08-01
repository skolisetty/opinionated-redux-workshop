import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


export default function configureStore(reducers) {
  const rootReducer = combineReducers(reducers)
  const middleware = [
    thunkMiddleware,
    createLogger({
        // collapsed: true,
        duration: true,
        timestamp: false
    })
  ]
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
  const store = createStoreWithMiddleware(
    rootReducer,
    {}
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
