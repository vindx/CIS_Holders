import { IError } from '~types'

interface IState {
  error: null | IError
  isLoaded: boolean
  isLoading: boolean
  isInitialized: boolean
}

export interface IListState<T> extends IState {
  list: T
}

export interface IDataState<T> extends IState {
  data: T
}
