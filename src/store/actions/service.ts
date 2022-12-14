import { createAction } from '@reduxjs/toolkit'

import {
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_RESPONSE,
  CREATE_SERVICE_RESPONSE_FAIL,
} from '~constants/actions'

import { IService, IError } from '~types'

export const createServiceRequest = createAction(CREATE_SERVICE_REQUEST)

export const createServiceResponse = createAction(
  CREATE_SERVICE_RESPONSE,
  (data: IService[]) => ({ payload: data }),
)

export const createServiceResponseFail = createAction(
  CREATE_SERVICE_RESPONSE_FAIL,
  (error: IError) => ({ payload: error }),
)
