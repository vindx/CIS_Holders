import { call, put, takeLatest } from 'redux-saga/effects'

import { SERVICES_REQUEST } from '~constants/actions'
import {
  servicesRequest,
  servicesResponse,
  servicesResponseFail,
} from '~store/actions'
import { getServicesListAPI } from '~api'
import { IService } from '~types'

function* watchGetServices(
  action: ReturnType<typeof servicesRequest>,
): Generator<unknown, any, IService[]> {
  try {
    const services = yield call(getServicesListAPI, action.payload?.typeIds)

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
