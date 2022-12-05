import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import ServicesList from '~scenes/ServicesList'
import { ABOUT } from '~constants/navigation'

import BottomTabs from './BottomTabs'

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'lightgray',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 5,
  },
})

const Drawer = () => {
  const { Navigator, Screen } = createDrawerNavigator()

  return (
    <Navigator
      screenOptions={{
        drawerStyle: styles.drawer,
      }}>
      <Screen name="Home" component={BottomTabs} />
      <Screen name={ABOUT} component={ServicesList} />
    </Navigator>
  )
}

export default Drawer
