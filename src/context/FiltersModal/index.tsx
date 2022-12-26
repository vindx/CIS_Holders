import React, {
  FC,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react'

import Modal from '~components/Modal'
import ServiceFilters from '~components/ServiceFilters'

import { IContext, IModalProviderProps } from './types'

const ModalContext = createContext<IContext | undefined>(undefined)

const modalInitState = {
  isOpen: false,
}

const ModalProvider: FC<IModalProviderProps> = props => {
  const [modalState, setModalState] = useState(modalInitState)

  const closeModal = useCallback(() => {
    setModalState(modalInitState)
  }, [setModalState])

  const setIsOpened = useCallback(() => setModalState({ isOpen: true }), [])

  return (
    <ModalContext.Provider value={{ setIsOpened }} {...props}>
      {props.children}
      <Modal isOpen={modalState.isOpen} onClose={closeModal} hideCloseButton>
        <ServiceFilters closeModal={closeModal} />
      </Modal>
    </ModalContext.Provider>
  )
}

const useFiltersModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error(
      'useFiltersModal must be used within a FiltersModalProvider',
    )
  }

  return context
}

export { ModalProvider as FiltersModalProvider, useFiltersModal }
