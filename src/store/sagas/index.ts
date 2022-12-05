import { all, fork } from 'redux-saga/effects'

import services from './services'

function* root() {
  yield all([fork(services)])
}

export default root
