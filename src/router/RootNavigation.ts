import { createNavigationContainerRef } from '@react-navigation/native'

import { RouteNames } from '~constants/navigation'
import { TRouteNamesList } from '~router/types'

export const navigationRef = createNavigationContainerRef<TRouteNamesList>()

export function navigate(name: RouteNames) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name)
  }
}
