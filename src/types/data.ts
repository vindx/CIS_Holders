import { TServiceTypeMachineValue } from '~constants/firestore'

export interface IServiceType {
  id: string
  name: string
  machineValue: TServiceTypeMachineValue
}

export interface IAddress {
  latitude: number
  longitude: number
}

export interface IService {
  id: string
  name: string
  description?: string
  type: IServiceType
  address: IAddress
  imageUrl?: string
}

export interface IAboutUs {
  id: string
  title: string
  description: string
  imageUrl: string
}
