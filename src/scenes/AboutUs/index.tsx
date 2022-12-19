import React, { useEffect, useRef } from 'react'
import { Animated, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AboutUsInfo from '~components/AboutUsInfo'
import Paginator from '~components/Paginator'
import { aboutUsRequest } from '~store/actions'
import { aboutUsStateSelector } from '~store/selectors'

import styles from './styles'

const AboutUs = () => {
  const dispatch = useDispatch()
  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  const { isLoading, list } = useSelector(aboutUsStateSelector)

  useEffect(() => {
    dispatch(aboutUsRequest())
  }, [dispatch])

  if (isLoading) {
    return null
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <AboutUsInfo data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => String(item.id)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
        viewabilityConfig={viewConfig}
      />

      <Paginator data={list} scrollX={scrollX} />
    </View>
  )
}

export default AboutUs
