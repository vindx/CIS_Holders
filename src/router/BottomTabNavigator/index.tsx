import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AddService from '~scenes/AddService'
import ServicesList from '~scenes/ServicesList'
import ServicesMap from '~scenes/ServicesMap'
import { ADD_SERVICE, MAP, SERVICES_LIST } from '~constants/navigation'

import Header from './Header'
import styles from './styles'

const BottomTabNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      initialRouteName={SERVICES_LIST}
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: 'gray',
        header: props => (
          <Header {...props} toggleDrawer={navigation.toggleDrawer} />
        ),
      })}>
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
        component={AddService}
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
        component={ServicesMap}
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

export default BottomTabNavigator
