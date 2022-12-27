import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

import Modal from '~components/Modal'
import { DATE_SORT, NAME_SORT } from '~constants/firestore'
import { MAP, SERVICES_LIST } from '~constants/navigation'
import { SEVICE_SORTING_KEY } from '~constants/asyncStorage'
import { TSortValue } from '~constants/firestore'
import { asyncStorage } from '~utils/helpers'
import { servicesRequest } from '~store/actions'
import { useFiltersModal } from '~context/FiltersModal'

import styles from './styles'
import { ICustomHeaderProps, ISortItemProps } from './types'

const SortItem: FC<ISortItemProps> = ({ iconName, onPress, text }) => {
  return (
    <TouchableOpacity style={styles.sortItem} onPress={onPress}>
      <Text style={styles.sortItemText}>{text}</Text>
      <Ionic name={iconName} size={26} color="gray" />
    </TouchableOpacity>
  )
}

const CustomHeader: FC<ICustomHeaderProps> = props => {
  const dispatch = useDispatch()
  const [modalIsOpened, setModalIsOpened] = useState(false)
  const [sortValue, setSortValue] = useState<TSortValue | undefined>()
  const { setIsOpened: openFiltersModal } = useFiltersModal()

  const filterBtnDisplayed = [SERVICES_LIST, MAP].includes(props.route.name)
  const sortingBtnDisplayed = [SERVICES_LIST].includes(props.route.name)

  useEffect(() => {
    if (!modalIsOpened) {
      const updateSortValue = async () => {
        const value = await asyncStorage.getData<TSortValue>(SEVICE_SORTING_KEY)
        setSortValue(value)
      }
      updateSortValue()
    }
  }, [modalIsOpened])

  const toggleIsOpened = () => setModalIsOpened(prev => !prev)

  const handleSetSorting = useCallback(
    async (value: TSortValue) => {
      await asyncStorage.storeData(SEVICE_SORTING_KEY, value)
      dispatch(servicesRequest())
      toggleIsOpened()
    },
    [dispatch],
  )

  const getSortName = useCallback((value?: TSortValue) => {
    if (!value) {
      return DATE_SORT
    }

    switch (value[0]) {
      case 'createdDate':
        return DATE_SORT
      case 'name':
        return NAME_SORT
      default:
        return DATE_SORT
    }
  }, [])

  const getSortIcon = useCallback((value?: TSortValue) => {
    if (!value) {
      return 'arrow-down-outline'
    }

    switch (value[1]) {
      case 'asc':
        return 'arrow-down-outline'
      case 'desc':
        return 'arrow-up-outline'
      default:
        return 'arrow-down-outline'
    }
  }, [])

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.toggleDrawer}>
        <Ionic name="menu-outline" size={28} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.route.name}</Text>
      {filterBtnDisplayed && (
        <TouchableOpacity style={styles.filtersBtn} onPress={openFiltersModal}>
          <Ionic name="filter-outline" size={28} />
        </TouchableOpacity>
      )}
      {sortingBtnDisplayed && (
        <TouchableOpacity style={styles.sortBtn} onPress={toggleIsOpened}>
          <Text style={styles.sortText}>{getSortName(sortValue)}</Text>
          <Ionic name={getSortIcon(sortValue)} size={28} />
        </TouchableOpacity>
      )}
      <Modal
        containerStyles={styles.modalContainer}
        hideCloseButton
        isOpen={modalIsOpened}
        onClose={toggleIsOpened}>
        <SortItem
          iconName="arrow-down-outline"
          text={DATE_SORT}
          onPress={() => handleSetSorting(['createdDate', 'asc'])}
        />
        <SortItem
          iconName="arrow-up-outline"
          text={DATE_SORT}
          onPress={() => handleSetSorting(['createdDate', 'desc'])}
        />
        <SortItem
          iconName="arrow-down-outline"
          text={NAME_SORT}
          onPress={() => handleSetSorting(['name', 'asc'])}
        />
        <SortItem
          iconName="arrow-up-outline"
          text={NAME_SORT}
          onPress={() => handleSetSorting(['name', 'desc'])}
        />
      </Modal>
    </View>
  )
}

export default CustomHeader
