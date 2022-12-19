import { call, put, takeLatest } from 'redux-saga/effects'

import { ABOUT_US_REQUEST } from '~constants/actions'
import { aboutUsResponse, aboutUsResponseFail } from '~store/actions'
import { getAboutUsScreensListAPI } from '~api'
import { IAboutUs } from '~types'

function* watchAboutUs(): Generator<unknown, any, IAboutUs[]> {
  try {
    const services = yield call(getAboutUsScreensListAPI)

    yield put(aboutUsResponse(services))
  } catch (error) {
    // @todo error handling
    yield put(aboutUsResponseFail({ status: 500, message: 'Some error' }))
  }
}

function* root() {
  yield takeLatest(ABOUT_US_REQUEST, watchAboutUs)
}

export default root
