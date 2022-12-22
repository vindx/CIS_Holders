import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import RNBootSplash from 'react-native-bootsplash'

import Router from '~router'
import store from '~store'
import { ServiceModalProvider } from '~context/ServiceModal'

const App = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <Provider store={store}>
      <ServiceModalProvider>
        <Router />
      </ServiceModalProvider>
    </Provider>
  )
}

export default App
