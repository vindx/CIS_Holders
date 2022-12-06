import { IServiceFB, IServiceType } from '~types'

export const getServiceTypeByRef = async (typeRef?: IServiceFB['type']) => {
  if (!typeRef) {
    return
  }

  const docSnapshot = await typeRef.get()

  if (!docSnapshot.exists) {
    return
  }

  const data: IServiceType = {
    id: docSnapshot.id,
    name: docSnapshot.data()?.name ?? '',
  }

  return data
}
