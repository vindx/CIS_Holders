import createSagaMiddleware from 'redux-saga'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers(reducers)

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

type RootState = ReturnType<typeof rootReducer>
export const getRootState = (state: RootState) => state

export default store
