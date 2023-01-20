import { createAction } from '@reduxjs/toolkit'

import {
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_RESPONSE,
  SERVICE_CREATE_RESPONSE_FAIL,
} from '~constants/actions'

import { IError, IServiceCreate } from '~types'

export const serviceCreateRequest = createAction(
  SERVICE_CREATE_REQUEST,
  (data: IServiceCreate) => ({ payload: data }),
)

export const serviceCreateResponse = createAction(SERVICE_CREATE_RESPONSE)

export const serviceCreateResponseFail = createAction(
  SERVICE_CREATE_RESPONSE_FAIL,
  (error: IError) => ({ payload: error }),
)
