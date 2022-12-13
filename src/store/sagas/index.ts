import { all, fork } from 'redux-saga/effects'

import services from './services'
import serviceTypes from './serviceTypes'

function* root() {
  yield all([fork(services)])
  yield all([fork(serviceTypes)])
}

export default root
