import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { ADD_SERVICE, MAP, SERVICES_LIST } from '~constants/navigation'

import ServicesList from '~scenes/ServicesList'

const styles = StyleSheet.create({
  addIcon: {},
})

const BottomTabs = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      initialRouteName={SERVICES_LIST}
      screenOptions={{
        tabBarActiveTintColor: 'gray',
        // header: () => null,
      }}>
      <Screen
        name={SERVICES_LIST}
        component={ServicesList}
        options={{
          tabBarLabel: SERVICES_LIST,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionic
              name={focused ? 'list-circle' : 'list-circle-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name={ADD_SERVICE}
        component={ServicesList}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionic
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={color}
              size={size}
              style={styles.addIcon}
            />
          ),
        }}
      />
      <Screen
        name={MAP}
        component={ServicesList}
        options={{
          tabBarLabel: MAP,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionic
              name={focused ? 'map' : 'map-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  )
}

export default BottomTabs
