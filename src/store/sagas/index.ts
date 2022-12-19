import { all, fork } from 'redux-saga/effects'

import aboutUs from './aboutUs'
import services from './services'
import serviceTypes from './serviceTypes'

function* root() {
  yield all([fork(aboutUs), fork(services), fork(serviceTypes)])
}

export default root
