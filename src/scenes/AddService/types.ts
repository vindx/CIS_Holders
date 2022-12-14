import { IService } from '~types'

export interface IFormValues
  extends Omit<IService, 'id' | 'type' | 'imageUrl'> {
  typeId: string
  rawImagePath?: string
}

export interface ICreateService {
  formValues: IFormValues
  onSuccessCallback?: () => void
  onErrorCallback?: () => void
}
