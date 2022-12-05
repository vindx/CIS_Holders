import { createSelector } from 'reselect'

import { getRootState } from '~store'

export const servicesStateSelector = createSelector(
  getRootState,
  state => state.services,
)
