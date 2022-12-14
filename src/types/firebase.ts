import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export interface IServiceTypeFB {
  name: string
}
export interface IServiceFB {
  address: FirebaseFirestoreTypes.GeoPoint
  imageUrl?: string
  description?: string
  name: string
  type: FirebaseFirestoreTypes.DocumentReference<IServiceTypeFB>
}
