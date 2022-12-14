import firestore from '@react-native-firebase/firestore'

import {
  SERVICES_COLLECTION,
  SERVICE_TYPES_COLLECTION,
} from '~constants/firestore'
import { IServiceFB, IService, IServiceTypeFB } from '~types'

import { getServiceTypeByRefAPI } from './'

export const getServicesListAPI = async () => {
  const snapshot = await firestore()
    .collection<IServiceFB>(SERVICES_COLLECTION)
    .get()

  const services = await Promise.all(
    snapshot.docs.map(async doc => {
      const data: IService = {
        ...doc.data(),
        address: doc.data().address.toJSON(),
        id: doc.id,
        type: await getServiceTypeByRefAPI(doc.data().type),
      }

      return data
    }),
  )

  return services
}

interface ICreateServiceAPI extends Omit<IService, 'id' | 'type'> {
  typeId: string
}

export const createServiceAPI = async (service: ICreateServiceAPI) => {
  const typeRef = await firestore()
    .collection<IServiceTypeFB>(SERVICE_TYPES_COLLECTION)
    .doc(service.typeId)

  const address = new firestore.GeoPoint(
    Number(service.address.latitude),
    Number(service.address.longitude),
  )

  return firestore()
    .collection<IServiceFB>(SERVICES_COLLECTION)
    .add({
      address,
      description: service.description || '',
      imageUrl: service.imageUrl || '',
      name: service.name,
      type: typeRef,
    })
}
