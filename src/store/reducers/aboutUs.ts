import { createReducer } from '@reduxjs/toolkit'

import {
  aboutUsRequest,
  aboutUsResponse,
  aboutUsResponseFail,
} from '~store/actions'

import { IAboutUs } from '~types'

import { IListState } from '../types'

const initialState: IListState<IAboutUs[]> = {
  list: [],
  error: null,
  isLoaded: false,
  isLoading: false,
  isInitialized: false,
}

const reducer = createReducer(initialState, builder => {
  builder.addCase(aboutUsRequest, state => ({
    ...state,
    list: [],
    isLoading: true,
    isLoaded: false,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(aboutUsResponse, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    list: action.payload,
    error: null,
    isInitialized: true,
  }))

  builder.addCase(aboutUsResponseFail, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    list: [],
    error: action.payload,
    isInitialized: true,
  }))
})

export default reducer
