import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import MainView from '~styles/MainView'
import { servicesRequest } from '~store/actions'
import { servicesStateSelector } from '~store/selectors'

const StyledText = styled.Text`
  color: palevioletred;
`

const ServicesList = () => {
  const dispatch = useDispatch()
  // const { isInitialized, isLoading, error, list } = useSelector(
  //   servicesStateSelector,
  // )
  // console.log('🚀 ~ ', isInitialized, isLoading, error, list)

  useEffect(() => {
    dispatch(servicesRequest())
  }, [dispatch])

  return (
    <MainView>
      <StyledText>ServicesList</StyledText>
    </MainView>
  )
}

export default ServicesList
