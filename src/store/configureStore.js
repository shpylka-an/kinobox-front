import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import reducers from './reducers'
import sagas from './sagas'

export default function configureStore() {
  const rootReducer = combineReducers(reducers)

  const saga = function* rootSaga() {
    yield all(sagas.map(fork))
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
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(saga)

  return store
}
