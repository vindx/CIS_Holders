import React, { FC } from 'react'
import {
  Modal as ModalRN,
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import styles from './styles'

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  hideCloseButton?: boolean
  containerStyles?: StyleProp<ViewStyle>
}

const Modal: FC<IModalProps> = ({
  isOpen = false,
  onClose,
  children,
  hideCloseButton = false,
  containerStyles,
}) => (
  <ModalRN
    animationType="fade"
    transparent={true}
    visible={isOpen}
    onRequestClose={onClose}>
    <View style={styles.wrapper}>
      <View style={[styles.modalView, containerStyles]}>
        {children}
        {!hideCloseButton && (
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}>
            <Text style={styles.textStyle}>Закрыть</Text>
          </TouchableOpacity>
        )}
      </View>
      <Pressable style={styles.background} onPress={onClose} />
    </View>
  </ModalRN>
)

export default Modal
