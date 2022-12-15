import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Ionic from 'react-native-vector-icons/Ionicons'

import About from '~scenes/About'
import { ABOUT, ROOT_NAVIGATOR } from '~constants/navigation'
import { TRootNavigatorList } from '~router/types'

const CustomHeaderLeft = () => {
  const { canGoBack, goBack, navigate } =
    useNavigation<StackNavigationProp<TRootNavigatorList>>()

  const handleGoBackClick = () => {
    canGoBack() ? goBack() : navigate(ROOT_NAVIGATOR)
  }

  return (
    <TouchableOpacity style={styles.goBackButton} onPress={handleGoBackClick}>
      <Ionic color="gray" name="chevron-back-outline" size={28} />
    </TouchableOpacity>
  )
}

const AboutStackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator
      screenOptions={{
        headerLeft: () => <CustomHeaderLeft />,
      }}>
      <Screen name={ABOUT} component={About} />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  goBackButton: { marginLeft: 10 },
})

export default AboutStackNavigator
