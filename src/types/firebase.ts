import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { TServiceTypeMachineValue } from '~constants/firestore'

export interface IServiceTypeFB {
  name: string
  machineValue: TServiceTypeMachineValue
}
export interface IServiceFB {
  address: FirebaseFirestoreTypes.GeoPoint
  imageUrl?: string
  description?: string
  name: string
  type: FirebaseFirestoreTypes.DocumentReference<IServiceTypeFB>
}

export interface IAboutUsFB {
  title: string
  description: string
  imageUrl: string
}
