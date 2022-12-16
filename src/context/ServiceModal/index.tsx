import React, {
  FC,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react'

import Modal from '~components/Modal'
import ServiceInfo from '~components/ServiceInfo'
import { IService } from '~types'

import { IContext, IModalProviderProps } from './types'

const ModalContext = createContext<IContext | undefined>(undefined)

const modalInitState = {
  isOpen: false,
  data: {} as IService,
}

const ModalProvider: FC<IModalProviderProps> = props => {
  const [modalState, setModalState] = useState(modalInitState)

  const closeModal = useCallback(() => {
    setModalState(modalInitState)
  }, [setModalState])

  const setModalData = useCallback((data: IService) => {
    setModalState(prevState => ({ ...prevState, isOpen: true, data }))
  }, [])

  return (
    <ModalContext.Provider value={{ setModalData }} {...props}>
      {props.children}
      <Modal isOpen={modalState.isOpen} onClose={closeModal}>
        <ServiceInfo service={modalState.data} />
      </Modal>
    </ModalContext.Provider>
  )
}

const useServiceModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error(
      'useServiceModal must be used within a ServiceModalProvider',
    )
  }

  return context
}

export { ModalProvider as ServiceModalProvider, useServiceModal }
