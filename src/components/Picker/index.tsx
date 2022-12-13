import React, { FC, useState } from 'react'
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

import styles from './styles'
import { IPickerOption, IPickerProps, IPickerDataState } from './types'

const Picker: FC<IPickerProps> = ({
  placeholder,
  options,
  selectedValue,
  onValueChange,
}) => {
  const [choosedData, setChoosedData] = useState<IPickerDataState>({
    label: placeholder || 'Select item',
    value: selectedValue || null,
  })
  const [isModalOpened, setIsModalOpened] = useState(false)

  const handleOpenModal = () => setIsModalOpened(true)
  const handleCloseModal = () => setIsModalOpened(false)

  const habdlePressOption = (option: IPickerOption) => {
    setChoosedData(option)
    typeof onValueChange === 'function' && onValueChange(option.value)
    handleCloseModal()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={handleOpenModal}>
        <Text style={[styles.label, !choosedData.value && styles.placeholder]}>
          {choosedData.label}
        </Text>
        <Ionic style={styles.icon} name="chevron-down" size={14} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalOpened}
        onRequestClose={handleCloseModal}>
        <Pressable style={styles.modalWrapper} onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <ScrollView>
              {options.map(option => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.optionContainer}
                  onPress={() => habdlePressOption(option)}>
                  <Text style={styles.option}>{option.label}</Text>
                </TouchableOpacity>
              ))}
              {options.length === 0 && (
                <Text style={styles.noElements}>(нет элементов)</Text>
              )}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}

export default Picker
