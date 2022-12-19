import { createSelector } from 'reselect'

import { getRootState } from '~store'

export const aboutUsStateSelector = createSelector(
  getRootState,
  state => state.aboutUs,
)
