import React, { FC } from 'react'
import { Image, StyleSheet, Text } from 'react-native'

import { IService } from '~types'

interface IServiceInfoProps {
  service: IService
}

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

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 18,
    paddingVertical: 15,
  },
  image: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 50,
    width: 80,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
})

export default ServiceInfo
