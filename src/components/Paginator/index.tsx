import React, { FC } from 'react'
import { Animated, View, useWindowDimensions } from 'react-native'

import styles from './styles'
import { IPaginatorProps } from './types'

const Paginator: FC<IPaginatorProps> = ({ data, scrollX }) => {
  const { width } = useWindowDimensions()

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        })

        return (
          <Animated.View
            key={i}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        )
      })}
    </View>
  )
}

export default Paginator
