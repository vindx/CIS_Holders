import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './DrawerNavigator'

const Router = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default Router
