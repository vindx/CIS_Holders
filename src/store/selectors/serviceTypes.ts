import { createSelector } from 'reselect'

import { getRootState } from '~store'

export const serviceTypesStateSelector = createSelector(
  getRootState,
  state => state.serviceTypes,
)

export const serviceTypesPickerSelector = createSelector(
  serviceTypesStateSelector,
  state => {
    const { list } = state

    return list.map(item => ({ label: item.name, value: item.id }))
  },
)
