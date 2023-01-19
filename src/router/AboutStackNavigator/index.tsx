import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Ionic from 'react-native-vector-icons/Ionicons'

import AboutUs from '~scenes/AboutUs'
import { ABOUT, ROOT_NAVIGATOR } from '~constants/navigation'
import { TRootNavigatorList } from '~router/types'

import styles from './styles'

const CustomHeaderLeft = () => {
  const { canGoBack, goBack, navigate } =
    useNavigation<StackNavigationProp<TRootNavigatorList>>()

  const handleGoBackClick = () => {
    canGoBack() ? goBack() : navigate(ROOT_NAVIGATOR)
  }

  return (
    <TouchableOpacity style={styles.goBackButton} onPress={handleGoBackClick}>
      <Ionic color="white" name="chevron-back-outline" size={28} />
    </TouchableOpacity>
  )
}

const AboutStackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator
      screenOptions={{
        headerLeft: () => <CustomHeaderLeft />,
        headerStyle: {
          backgroundColor: '#493d8a',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      <Screen name={ABOUT} component={AboutUs} />
    </Navigator>
  )
}

export default AboutStackNavigator
