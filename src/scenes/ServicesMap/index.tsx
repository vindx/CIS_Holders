import React, { useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useSelector } from 'react-redux'

import Modal from '~components/Modal'
import { IService } from '~types'
import { servicesStateSelector } from '~store/selectors'

import styles from './styles'

const initialRegion = {
  latitude: 50,
  longitude: 10,
  latitudeDelta: 30,
  longitudeDelta: 30,
}

const ServicesMap = () => {
  const [modalState, setModalState] = useState({
    isOpened: false,
    data: {} as IService,
  })
  const { isLoading, list } = useSelector(servicesStateSelector)

  const handleCloseModal = () =>
    setModalState(prevState => ({
      ...prevState,
      isOpened: false,
    }))

  const onHandleCalloutPress = (service: IService) => {
    setModalState(prevState => ({
      ...prevState,
      data: service,
      isOpened: true,
    }))
  }

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
            onCalloutPress={() => onHandleCalloutPress(item)}
          />
        ))}
      </MapView>

      <ActivityIndicator
        animating={isLoading}
        style={styles.loader}
        size={40}
        color="gray"
      />

      <Modal isOpen={modalState.isOpened} onClose={handleCloseModal}>
        <Text style={styles.text}>{modalState.data.name}</Text>
        <Text style={styles.text}>{modalState.data.description}</Text>
        <Text style={styles.text}>{modalState.data.type?.id}</Text>
        <Text style={styles.text}>{modalState.data.type?.name}</Text>
      </Modal>
    </View>
  )
}

export default ServicesMap
