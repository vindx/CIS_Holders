import { createAction } from '@reduxjs/toolkit'

import {
  ABOUT_US_REQUEST,
  ABOUT_US_RESPONSE,
  ABOUT_US_RESPONSE_FAIL,
} from '~constants/actions'

import { IAboutUs, IError } from '~types'

export const aboutUsRequest = createAction(ABOUT_US_REQUEST)

export const aboutUsResponse = createAction(
  ABOUT_US_RESPONSE,
  (data: IAboutUs[]) => ({ payload: data }),
)

export const aboutUsResponseFail = createAction(
  ABOUT_US_RESPONSE_FAIL,
  (error: IError) => ({ payload: error }),
)
