// import { IServiceTypeFB } from './../types/firebase'
// import { SERVICE_TYPES_COLLECTION } from './../constants/firestore/collections'
import firestore from '@react-native-firebase/firestore'

import { SERVICES_COLLECTION } from '~constants/firestore'
import { IServiceFB, IService } from '~types'

import { getServiceTypeByRef } from './'

export const getServicesList = async () => {
  const snapshot = await firestore()
    .collection<IServiceFB>(SERVICES_COLLECTION)
    .get()

  const services = await Promise.all(
    snapshot.docs.map(async doc => {
      const data: IService = {
        ...doc.data(),
        address: doc.data().address.toJSON(),
        id: doc.id,
        type: await getServiceTypeByRef(doc.data().type),
      }

      return data
    }),
  )

  return services
}

// const addService = async (typeId: string) => {
//   const typeRef = await firestore()
//     .collection<IServiceTypeFB>(SERVICE_TYPES_COLLECTION)
//     .doc(typeId)

//   await firestore()
//     .collection<IServiceFB>(SERVICES_COLLECTION)
//     .add({
//       address: new firestore.GeoPoint(50, 50),
//       attach: null,
//       description: 'description',
//       name: 'name',
//       type: typeRef,
//     })
// }
