import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { adminReducer, adminSaga, USER_LOGOUT } from 'react-admin'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import rootReducer from '../reducers'

export default ({ authProvider, dataProvider, history }) => {
  const reducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history),
    // add your own reducers here
    rootReducer,
  })

  const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action)

  const saga = function* rootSaga() {
    yield all(
      [
        adminSaga(dataProvider, authProvider),
        // add your own sagas here
      ].map(fork)
    )
  }

  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    compose

  const store = createStore(
    resettableAppReducer,
    {
      /* set your initial state here */
    },
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
        // add your own middlewares here
      )
      // add your own enhancers here
    )
  )

  sagaMiddleware.run(saga)

  return store
}
