import { createReducer } from '@reduxjs/toolkit'

import {
  serviceCreateRequest,
  serviceCreateResponse,
  serviceCreateResponseFail,
} from '~store/actions'

import { IService } from '~types'

import { IDataState } from '../types'

const initialState: IDataState<IService | {}> = {
  data: {},
  error: null,
  isLoaded: false,
  isLoading: false,
  isInitialized: false,
}

const reducer = createReducer(initialState, builder => {
  builder.addCase(serviceCreateRequest, state => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(serviceCreateResponse, state => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(serviceCreateResponseFail, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    error: action.payload,
    isInitialized: true,
  }))
})

export default reducer
