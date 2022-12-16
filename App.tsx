import React from 'react'
import { Provider } from 'react-redux'

import Router from '~router'
import store from '~store'
import { ServiceModalProvider } from '~context/ServiceModal'

const App = () => (
  <Provider store={store}>
    <ServiceModalProvider>
      <Router />
    </ServiceModalProvider>
  </Provider>
)

export default App
