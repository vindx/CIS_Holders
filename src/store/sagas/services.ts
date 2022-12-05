import { call, takeLatest } from 'redux-saga/effects'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore' // FirebaseFirestoreTypes,

import { SERVICES_REQUEST } from '~constants/actions'
import { SERVICES_COLLECTION } from '~constants/firestore'
// import { servicesResponse, servicesResponseFail } from '~store/actions'

import { IService } from '~types'

const getServicesList = async () =>
  firestore().collection<IService[]>(SERVICES_COLLECTION).get()

function* watchGetServices() {
  // const { pagination, filters } = action?.payload

  try {
    console.log('SAGA watchGetServices')
    const snapshot: unknown = yield call(getServicesList)
    console.log(
      '🚀 ~ ',
      snapshot.docs.map(doc => doc.data()),
    )
  } catch (error) {
    console.log('🚀 ~ function*watchGetServices ~ error', error)
  }
}

function* root() {
  yield takeLatest(SERVICES_REQUEST, watchGetServices)
}

export default root
