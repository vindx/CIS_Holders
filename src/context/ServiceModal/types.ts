import { IService } from '~types'

export interface IContext {
  setModalData: (data: IService) => void
}

export interface IModalProviderProps {
  children: React.ReactNode
}
