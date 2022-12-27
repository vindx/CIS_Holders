import { createSelector } from 'reselect'

import { getRootState } from '~store'
import { IService, IServiceType } from '~types'

export const servicesStateSelector = createSelector(
  getRootState,
  state => state.services,
)

export const servicesFiltersSelector = createSelector(
  servicesStateSelector,
  state => state.filters,
)

export const servicesSectionListSelector = createSelector(
  servicesStateSelector,
  state => {
    const { list } = state
    if (list.length === 0) {
      return []
    }

    const serviceTypeMapper: {
      [typeId: IServiceType['id']]: {
        name: IServiceType['name']
        data: IService[]
      }
    } = {}

    list.forEach(item => {
      if (item.type) {
        if (serviceTypeMapper[item.type.id]) {
          serviceTypeMapper[item.type.id].data.push(item)
        } else {
          serviceTypeMapper[item.type.id] = {
            name: item.type.name,
            data: [item],
          }
        }
      }
    })

    return Object.entries(serviceTypeMapper).map(([id, { name, data }]) => ({
      type: { id, name },
      data,
    }))
  },
)
