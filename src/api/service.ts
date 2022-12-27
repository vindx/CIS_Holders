import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

import {
  SERVICES_COLLECTION,
  SERVICE_TYPES_COLLECTION,
} from '~constants/firestore'
import { IServiceFB, IService, IServiceTypeFB } from '~types'
import { IServicesListFilters } from '~store/types'
import { TSortValue } from '~constants/firestore'

import { getServiceTypeByRefAPI } from './'

export const getServicesListAPI = async (
  filters?: IServicesListFilters,
  sorting?: TSortValue,
) => {
  let ref = firestore().collection<IServiceFB>(
    SERVICES_COLLECTION,
  ) as FirebaseFirestoreTypes.Query<IServiceFB>

  if (filters || sorting) {
    if (filters) {
      const { typeIds } = filters
      if (typeIds && typeIds !== 'all' && typeIds.length > 0) {
        const typeRefs = await Promise.all(
          typeIds.map(id =>
            firestore()
              .collection<IServiceTypeFB>(SERVICE_TYPES_COLLECTION)
              .doc(id),
          ),
        )

        ref = ref.where('type', 'in', typeRefs)
      }
    }

    if (sorting) {
      const [field, value] = sorting
      ref = ref.orderBy(field, value)
    }
  }

  const snapshot = await ref.get()

  const services = await Promise.all(
    snapshot.docs.map(async doc => {
      const data: IService = {
        ...doc.data(),
        address: doc.data().address.toJSON(),
        id: doc.id,
        createdDate: doc.data().createdDate.toDate().toISOString(),
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
      createdDate: firestore.Timestamp.now(),
    })
}
