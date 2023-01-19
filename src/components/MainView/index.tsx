import React, { FC } from 'react'
import { View } from 'react-native'

import styles from './styles'
import { IMainViewProps } from './types'

const MainView: FC<IMainViewProps> = ({ children }) => (
  <View style={styles.view}>{children}</View>
)

export default MainView
