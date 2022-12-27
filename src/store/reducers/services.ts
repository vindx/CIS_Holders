import { createReducer } from '@reduxjs/toolkit'

import {
  servicesRequest,
  servicesResponse,
  servicesResponseFail,
  servicesChangeFilters,
} from '~store/actions'

import { IService } from '~types'

import { IListState, IServicesListFilters } from '../types'

const initialState: IListState<IService[], IServicesListFilters> = {
  list: [],
  error: null,
  isLoaded: false,
  isLoading: false,
  isInitialized: false,
}

const reducer = createReducer(initialState, builder => {
  builder.addCase(servicesRequest, state => ({
    ...state,
    list: [],
    isLoading: true,
    isLoaded: false,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(servicesResponse, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    list: action.payload,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(servicesResponseFail, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    list: [],
    error: action.payload,
    isInitialized: true,
  }))

  builder.addCase(servicesChangeFilters, (state, action) => ({
    ...state,
    filters: action.payload,
  }))
})

export default reducer
