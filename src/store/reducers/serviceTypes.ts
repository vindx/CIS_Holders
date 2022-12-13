import { createReducer } from '@reduxjs/toolkit'

import {
  serviceTypesRequest,
  serviceTypesResponse,
  serviceTypesResponseFail,
} from '~store/actions'

import { IServiceType } from '~types'

import { IListState } from '../types'

const initialState: IListState<IServiceType[]> = {
  list: [],
  error: null,
  isLoaded: false,
  isLoading: false,
  isInitialized: false,
}

const reducer = createReducer(initialState, builder => {
  builder.addCase(serviceTypesRequest, state => ({
    ...state,
    list: [],
    isLoading: true,
    isLoaded: false,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(serviceTypesResponse, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    list: action.payload,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(serviceTypesResponseFail, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    list: [],
    error: action.payload,
    isInitialized: true,
  }))
})

export default reducer
