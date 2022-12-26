import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import AddService from '~scenes/AddService'
import ServicesList from '~scenes/ServicesList'
import ServicesMap from '~scenes/ServicesMap'
import { ADD_SERVICE, MAP, SERVICES_LIST } from '~constants/navigation'
import { useFiltersModal } from '~context/FiltersModal'

const styles = StyleSheet.create({
  addIcon: {
    marginTop: 5,
  },
  headerContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
  },
  filtersBtn: {
    position: 'absolute',
    right: 10,
  },
})

interface ICustomHeaderProps extends BottomTabHeaderProps {
  toggleDrawer: () => void
}

const CustomHeader: FC<ICustomHeaderProps> = props => {
  const { setIsOpened: openFiltersModal } = useFiltersModal()
  const filterBtnDisplayed = [SERVICES_LIST, MAP].includes(props.route.name)

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.toggleDrawer}>
        <Ionic name="menu-outline" size={32} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.route.name}</Text>
      {filterBtnDisplayed && (
        <TouchableOpacity style={styles.filtersBtn} onPress={openFiltersModal}>
          <Ionic name="filter-outline" size={32} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const BottomTabNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      initialRouteName={SERVICES_LIST}
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: 'gray',
        header: props => (
          <CustomHeader {...props} toggleDrawer={navigation.toggleDrawer} />
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
