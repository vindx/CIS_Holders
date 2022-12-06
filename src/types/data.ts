export interface IServiceType {
  id: string
  name: string
}

interface IAddress {
  latitude: number
  longitude: number
}

export interface IService {
  id: string
  name: string
  description: string
  type?: IServiceType
  address: IAddress
  attach: null | any
}
