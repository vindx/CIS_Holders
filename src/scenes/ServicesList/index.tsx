import React, { FC, useCallback, useEffect } from 'react'
import { SectionList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import MainView from '~styles/MainView'
import { servicesRequest } from '~store/actions'

import {
  servicesStateSelector,
  servicesSectionListSelector,
} from '~store/selectors'

import { IService, IServiceType } from '~types'

import { ErrorText, HeaderText, ItemText, Wrapper } from './styles'

const ServicesList = () => {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(servicesStateSelector)
  const list = useSelector(servicesSectionListSelector)

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
    <ItemText>{serviceData.name}</ItemText> // @todo add more info
  )

  const Header: FC<{ typeData: IServiceType }> = ({ typeData }) => (
    <HeaderText>{typeData.name}</HeaderText>
  )

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
