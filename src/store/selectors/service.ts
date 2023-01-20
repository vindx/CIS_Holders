import { createSelector } from 'reselect'

import { getRootState } from '~store'

export const serviceStateSelector = createSelector(
  getRootState,
  state => state.service,
)
