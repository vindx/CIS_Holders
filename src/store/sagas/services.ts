import { IService } from '~types'
import { call, put, takeLatest } from 'redux-saga/effects'

import { SERVICES_REQUEST } from '~constants/actions'
import { servicesResponse, servicesResponseFail } from '~store/actions'

import { getServicesList } from '~api'

function* watchGetServices(): Generator<unknown, any, IService[]> {
  try {
    const services = yield call(getServicesList)

    yield put(servicesResponse(services))
  } catch (error) {
    // @todo error handling
    yield put(servicesResponseFail({ status: 500, message: 'Some error' }))
  }
}

function* root() {
  yield takeLatest(SERVICES_REQUEST, watchGetServices)
}

export default root
