import { call, put, select, takeLatest } from 'redux-saga/effects'

import { IService } from '~types'
import { SERVICES_REQUEST } from '~constants/actions'
import { SEVICE_SORTING_KEY } from '~constants/asyncStorage'
import { TSortValue } from '~constants/firestore'
import { asyncStorage } from '~utils/helpers'
import { getServicesListAPI } from '~api'
import { servicesFiltersSelector } from '~store/selectors'
import { servicesResponse, servicesResponseFail } from '~store/actions'

import { IServicesListFilters } from '../types'

function* watchGetServices() {
  try {
    const filters: IServicesListFilters = yield select(servicesFiltersSelector)
    const sorting: TSortValue | undefined = yield call(
      asyncStorage.getData,
      SEVICE_SORTING_KEY,
    )

    const services: IService[] = yield call(
      getServicesListAPI,
      filters,
      sorting,
    )

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
