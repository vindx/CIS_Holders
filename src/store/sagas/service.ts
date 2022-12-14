import { call, put, takeLatest } from 'redux-saga/effects'

import { CREATE_SERVICE_REQUEST } from '~constants/actions'
import { servicesResponse, servicesResponseFail } from '~store/actions'
import { getServicesListAPI } from '~api'
import { IService } from '~types'

function* watchAddService(): Generator<unknown, any, IService[]> {
  try {
    const services = yield call(getServicesListAPI)

    yield put(servicesResponse(services))
  } catch (error) {
    // @todo error handling
    yield put(servicesResponseFail({ status: 500, message: 'Some error' }))
  }
}

function* root() {
  yield takeLatest(CREATE_SERVICE_REQUEST, watchAddService)
}

export default root
