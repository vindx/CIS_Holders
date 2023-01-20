import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './DrawerNavigator'
import { navigationRef } from './RootNavigation'

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default Router
