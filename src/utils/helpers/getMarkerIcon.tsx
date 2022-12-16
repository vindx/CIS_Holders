import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'

import * as machineValues from '~constants/firestore/serviceTypeMachineValues'

// @todo change icon colors and size if needed
const mapper = {
  [machineValues.HOTEL]: {
    size: 28,
    color: 'red',
    name: 'bed',
  },
  [machineValues.PARKING]: {
    size: 28,
    color: 'red',
    name: 'car',
  },
  [machineValues.FAST_FOOD]: {
    size: 28,
    color: 'red',
    name: 'fast-food',
  },
  [machineValues.CINEMA]: {
    size: 28,
    color: 'red',
    name: 'film',
  },
  [machineValues.SHOP]: {
    size: 28,
    color: 'red',
    name: 'cart',
  },
  [machineValues.HOSPITAL]: {
    size: 28,
    color: 'red',
    name: 'medical',
  },
  [machineValues.RAILWAY_STATION]: {
    size: 28,
    color: 'red',
    name: 'train',
  },
  [machineValues.AIRPORT]: {
    size: 28,
    color: 'red',
    name: 'md-airplane',
  },
  [machineValues.AIRPORT]: {
    size: 28,
    color: 'red',
    name: 'md-barbell',
  },
}

const getMarkerIcon = (
  serviceTypeMachineValue: machineValues.TServiceTypeMachineValue,
) => {
  if (!serviceTypeMachineValue || !mapper[serviceTypeMachineValue]) {
    return null
  }

  return <Ionic {...mapper[serviceTypeMachineValue]} />
}

export default getMarkerIcon
