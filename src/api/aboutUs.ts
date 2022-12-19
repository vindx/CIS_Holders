import firestore from '@react-native-firebase/firestore'

import { ABOUT_US_COLLECTION } from '~constants/firestore'
import { IAboutUs, IAboutUsFB } from '~types'

export const getAboutUsScreensListAPI = async () => {
  const snapshot = await firestore()
    .collection<IAboutUsFB>(ABOUT_US_COLLECTION)
    .get()

  const list = snapshot.docs.map<IAboutUs>(doc => {
    const data = {
      ...doc.data(),
      id: doc.id,
    }

    return data
  })

  return list
}
