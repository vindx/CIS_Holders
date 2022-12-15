import firestore from '@react-native-firebase/firestore'

import { SERVICE_TYPES_COLLECTION } from '~constants/firestore'
import { IServiceFB, IServiceTypeFB, IServiceType } from '~types'

export const getServiceTypesListAPI = async () => {
  const snapshot = await firestore()
    .collection<IServiceTypeFB>(SERVICE_TYPES_COLLECTION)
    .get()

  const result = snapshot.docs.map<IServiceType>(doc => ({
    id: doc.id,
    ...doc.data(),
  }))

  return result
}

export const getServiceTypeByRefAPI = async (
  typeRef?: IServiceFB['type'],
): Promise<IServiceType> => {
  const emptyServiceType: IServiceType = {
    id: '',
    name: '',
    machineValue: null,
  }
  if (!typeRef) {
    return emptyServiceType
  }

  const docSnapshot = await typeRef.get()

  if (!docSnapshot.exists) {
    return emptyServiceType
  }

  const data: IServiceType = {
    id: docSnapshot.id,
    name: docSnapshot.data()?.name ?? '',
    machineValue: docSnapshot.data()?.machineValue || null,
  }

  return data
}
