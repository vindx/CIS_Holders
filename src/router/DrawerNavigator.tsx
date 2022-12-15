import React from 'react'
import { StyleSheet, Text } from 'react-native'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'

import AboutStackNavigator from './stackNavigators/AboutStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import {
  ABOUT,
  ABOUT_PAGE_NAVIGATOR,
  ROOT_NAVIGATOR,
} from '~constants/navigation'

import { TRootRouteParams, TRootNavigatorList } from './types'

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'lightgray',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 5,
  },
  drawerItemText: {
    color: 'gray',
    fontSize: 18,
  },
})

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      {Object.entries(props.descriptors).map(
        ([key, descriptor]) =>
          (descriptor.route.params as TRootRouteParams)?.show && (
            <DrawerItem
              key={key}
              label={() => (
                <Text style={styles.drawerItemText}>
                  {(descriptor.route.params as TRootRouteParams)?.displayedName}
                </Text>
              )}
              onPress={() =>
                descriptor.navigation.navigate(descriptor.route.name)
              }
            />
          ),
      )}
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  const { Navigator, Screen } = createDrawerNavigator<TRootNavigatorList>()

  return (
    <Navigator
      initialRouteName={ROOT_NAVIGATOR}
      screenOptions={{
        drawerStyle: styles.drawer,
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Screen
        name={ROOT_NAVIGATOR}
        component={BottomTabNavigator}
        initialParams={{ show: false }}
      />
      <Screen
        name={ABOUT_PAGE_NAVIGATOR}
        component={AboutStackNavigator}
        initialParams={{ show: true, displayedName: ABOUT }}
      />
    </Navigator>
  )
}

export default DrawerNavigator
