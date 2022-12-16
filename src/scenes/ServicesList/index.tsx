import React, { FC, useCallback, useEffect } from 'react'
import { SectionList, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Ionic from 'react-native-vector-icons/Ionicons'

import {
  servicesStateSelector,
  servicesSectionListSelector,
} from '~store/selectors'

import MainView from '~styles/MainView'
import { IService } from '~types'
import { servicesRequest } from '~store/actions'
import { useServiceModal } from '~context/ServiceModal'

import { ErrorText, HeaderText, ItemText, Wrapper, styles } from './styles'

const ServicesList = () => {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(servicesStateSelector)
  const list = useSelector(servicesSectionListSelector)
  const { setModalData } = useServiceModal()

  const loadServicesList = useCallback(
    () => dispatch(servicesRequest()),
    [dispatch],
  )

  useEffect(() => {
    loadServicesList()
  }, [loadServicesList])

  if (error) {
    return (
      <MainView>
        <Wrapper>
          <ErrorText>{error?.message}</ErrorText>
        </Wrapper>
      </MainView>
    )
  }

  const Item: FC<{ serviceData: IService }> = ({ serviceData }) => (
    <View style={styles.itemWrapper}>
      <ItemText>{serviceData.name}</ItemText>
      <TouchableOpacity onPress={() => setModalData(serviceData)}>
        <Ionic name="information-circle-outline" color="gray" size={26} />
      </TouchableOpacity>
    </View>
  )

  const Header: FC<{ typeData: { id: string; name: string } }> = ({
    typeData,
  }) => <HeaderText>{typeData.name}</HeaderText>

  return (
    <MainView>
      <SectionList
        sections={list}
        keyExtractor={item => item.id}
        renderItem={item => <Item serviceData={item.item} />}
        renderSectionHeader={({ section: { type } }) => (
          <Header typeData={type} />
        )}
        refreshing={isLoading}
        onRefresh={loadServicesList}
      />
    </MainView>
  )
}

export default ServicesList
