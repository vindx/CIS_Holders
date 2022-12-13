import { createAction } from '@reduxjs/toolkit'

import {
  SERVICE_TYPES_REQUEST,
  SERVICE_TYPES_RESPONSE,
  SERVICE_TYPES_RESPONSE_FAIL,
} from '~constants/actions'

import { IServiceType, IError } from '~types'

export const serviceTypesRequest = createAction(SERVICE_TYPES_REQUEST)

export const serviceTypesResponse = createAction(
  SERVICE_TYPES_RESPONSE,
  (data: IServiceType[]) => ({ payload: data }),
)

export const serviceTypesResponseFail = createAction(
  SERVICE_TYPES_RESPONSE_FAIL,
  (error: IError) => ({ payload: error }),
)
