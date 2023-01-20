import { call, put, takeLatest } from 'redux-saga/effects'

import {
  serviceCreateRequest,
  serviceCreateResponse,
  serviceCreateResponseFail,
  servicesRequest,
} from '~store/actions'

import { SERVICES_LIST } from '~constants/navigation'
import { SERVICE_CREATE_REQUEST } from '~constants/actions'
import { createServiceAPI, saveImageAPI } from '~api'
import { navigate } from '~router/RootNavigation'

function* watchCreateService(action: ReturnType<typeof serviceCreateRequest>) {
  try {
    const { payload: data } = action
    let imageUrl: string | undefined
    if (data.rawImagePath) {
      const imageFilename = data.rawImagePath.substring(
        data.rawImagePath.lastIndexOf('/') + 1,
      )
      imageUrl = yield call(saveImageAPI, imageFilename, data.rawImagePath)
    }

    yield call(createServiceAPI, { ...data, imageUrl })

    yield put(serviceCreateResponse())
    yield put(servicesRequest())
    yield call(navigate, SERVICES_LIST)
  } catch (error) {
    // @todo error handling
    yield put(serviceCreateResponseFail({ status: 500, message: 'Some error' }))
  }
}

function* root() {
  yield takeLatest(SERVICE_CREATE_REQUEST, watchCreateService)
}

export default root
