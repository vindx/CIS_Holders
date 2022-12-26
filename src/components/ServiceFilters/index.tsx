import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckBox from '@react-native-community/checkbox'

import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {
  serviceTypesStateSelector,
  servicesStateSelector,
} from '~store/selectors'

import { servicesRequest, serviceTypesRequest } from '~store/actions'
import { IServiceType } from '~types'

import styles from './styles'
import { IServiceFilters } from './types'

const ServiceFilters: FC<IServiceFilters> = ({ closeModal }) => {
  const dispatch = useDispatch()
  const { isLoading, list } = useSelector(serviceTypesStateSelector)
  const { filters } = useSelector(servicesStateSelector)
  const [selectedTypeIds, setSelectedTypeIds] = useState<
    Array<IServiceType['id']> | 'all'
  >(filters?.typeIds || 'all')

  useEffect(() => {
    dispatch(serviceTypesRequest())
  }, [dispatch])

  const handleToggleCheckbox = (typeId: IServiceType['id']) => {
    if (selectedTypeIds === 'all') {
      const allIds = list.map(({ id }) => id)
      setSelectedTypeIds(allIds.filter(id => id !== typeId))
      return
    }

    if (selectedTypeIds.includes(typeId)) {
      setSelectedTypeIds(prevState =>
        prevState !== 'all' ? prevState.filter(id => id !== typeId) : [],
      )
      return
    }

    setSelectedTypeIds(prevState =>
      prevState.length + 1 === list.length ? 'all' : [...prevState, typeId],
    )
  }

  const handleToggleAllFilters = () => {
    setSelectedTypeIds(selectedTypeIds === 'all' ? [] : 'all')
  }

  const handleAcceptFilters = () => {
    dispatch(servicesRequest({ typeIds: selectedTypeIds }))
    typeof closeModal === 'function' && closeModal()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Фильтры по типу</Text>
      <TouchableOpacity
        style={styles.typeElement}
        onPress={handleToggleAllFilters}>
        <CheckBox
          disabled={isLoading}
          tintColors={{ false: 'lightgray' }}
          value={selectedTypeIds === 'all'}
          onValueChange={handleToggleAllFilters}
        />
        <Text style={styles.text}>Выбрать все</Text>
      </TouchableOpacity>
      <ScrollView>
        {list.map(type => (
          <TouchableOpacity
            key={type.id}
            disabled={isLoading}
            style={styles.typeElement}
            onPress={() => handleToggleCheckbox(type.id)}>
            <CheckBox
              disabled={isLoading}
              tintColors={{ false: 'lightgray' }}
              value={
                selectedTypeIds === 'all' || selectedTypeIds.includes(type.id)
              }
              onValueChange={() => handleToggleCheckbox(type.id)}
            />
            <Text style={styles.text}>{type.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {isLoading && (
        <ActivityIndicator animating={isLoading} size={40} color="gray" />
      )}

      <TouchableOpacity
        disabled={isLoading || selectedTypeIds.length === 0}
        style={styles.applyButton}
        onPress={handleAcceptFilters}>
        <Text style={styles.applyButtonText}>Применить</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ServiceFilters
