import { createAction } from '@reduxjs/toolkit'

import {
  SERVICES_REQUEST,
  SERVICES_RESPONSE,
  SERVICES_RESPONSE_FAIL,
} from '~constants/actions'

import { IService, IError } from '~types'

import { IServicesListFilters } from '../types'

export const servicesRequest = createAction(
  SERVICES_REQUEST,
  (filters?: IServicesListFilters) => ({ payload: filters }),
)

export const servicesResponse = createAction(
  SERVICES_RESPONSE,
  (data: IService[]) => ({ payload: data }),
)

export const servicesResponseFail = createAction(
  SERVICES_RESPONSE_FAIL,
  (error: IError) => ({ payload: error }),
)
