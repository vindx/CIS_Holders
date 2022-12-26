import { IError } from '~types'

interface IState {
  error: null | IError
  isLoaded: boolean
  isLoading: boolean
  isInitialized: boolean
}

export interface IListState<T, F = {}> extends IState {
  list: T
  filters?: F
}

export interface IDataState<T> extends IState {
  data: T
}
