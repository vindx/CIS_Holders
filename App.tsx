import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import RNBootSplash from 'react-native-bootsplash'

import Router from '~router'
import store from '~store'
import { ServiceModalProvider } from '~context/ServiceModal'
import { FiltersModalProvider } from '~context/FiltersModal'

const App = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <Provider store={store}>
      <FiltersModalProvider>
        <ServiceModalProvider>
          <Router />
        </ServiceModalProvider>
      </FiltersModalProvider>
    </Provider>
  )
}

export default App
