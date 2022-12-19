import React, { FC } from 'react'
import { Image, Text } from 'react-native'

import styles from './styles'
import { IServiceInfoProps } from './types'

const ServiceInfo: FC<IServiceInfoProps> = ({ service }) => {
  return (
    <>
      {service.imageUrl && (
        <Image style={styles.image} source={{ uri: service.imageUrl }} />
      )}
      <Text style={styles.text}>{service.type.name}</Text>
      <Text style={styles.text}>{service.name}</Text>
      {service.description && (
        <Text style={styles.text}>{service.description}</Text>
      )}
    </>
  )
}

export default ServiceInfo
