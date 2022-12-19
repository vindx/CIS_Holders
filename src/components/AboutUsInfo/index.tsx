import React, { FC } from 'react'
import { Image, Text, View, useWindowDimensions } from 'react-native'

import styles from './styles'
import { IAboutUsInfoProps } from './types'

const AboutUsInfo: FC<IAboutUsInfoProps> = ({ data }) => {
  const { width } = useWindowDimensions()

  return (
    <View style={[styles.container, { width }]}>
      <Image
        style={[styles.image, { width }]}
        source={{ uri: data.imageUrl }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  )
}

export default AboutUsInfo
