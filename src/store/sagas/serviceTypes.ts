import { call, put, takeLatest } from 'redux-saga/effects'

import { SERVICE_TYPES_REQUEST } from '~constants/actions'
import { serviceTypesResponse, serviceTypesResponseFail } from '~store/actions'
import { getServiceTypesListAPI } from '~api'
import { IServiceType } from '~types'

function* watchGetServiceTypes(): Generator<unknown, any, IServiceType[]> {
  try {
    const services = yield call(getServiceTypesListAPI)

    yield put(serviceTypesResponse(services))
  } catch (error) {
    // @todo error handling
    yield put(serviceTypesResponseFail({ status: 500, message: 'Some error' }))
  }
}

function* root() {
  yield takeLatest(SERVICE_TYPES_REQUEST, watchGetServiceTypes)
}

export default root
