export interface IServiceType {
  id: string
  name: string
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
