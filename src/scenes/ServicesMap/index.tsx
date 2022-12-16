import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useSelector } from 'react-redux'

import { getMarkerIcon } from '~utils/helpers'
import { servicesStateSelector } from '~store/selectors'
import { useServiceModal } from '~context/ServiceModal'

import styles from './styles'

const initialRegion = {
  latitude: 50,
  longitude: 10,
  latitudeDelta: 30,
  longitudeDelta: 30,
}

const ServicesMap = () => {
  const { isLoading, list } = useSelector(servicesStateSelector)
  const { setModalData } = useServiceModal()

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}>
        {list.map(item => (
          <Marker
            key={item.id}
            data-id={item.id}
            coordinate={item.address}
            title={item.name}
            description="подробнее"
            onCalloutPress={() => setModalData(item)}>
            {getMarkerIcon(item.type.machineValue)}
          </Marker>
        ))}
      </MapView>

      <ActivityIndicator
        animating={isLoading}
        style={styles.loader}
        size={40}
        color="gray"
      />
    </View>
  )
}

export default ServicesMap
