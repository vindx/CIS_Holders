import { IService } from '~types'

export interface IServicesListFilters {
  typeIds?: Array<IService['type']['id']> | 'all'
}
