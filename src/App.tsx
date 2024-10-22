import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { ErrorBoundary } from '@components'
import GameNavigation from './navigation/index'
import { ThemeProviderWrapper } from './styles/ThemeContext'
import { PersistGate } from 'redux-persist/integration/react'
import AuthContext from './utils/auth-context'
import store, { persistor } from './store/store'
import 'react-native-gesture-handler'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState({})

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AuthContext.Provider value={{ user, setUser, userData, setUserData }}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProviderWrapper>
              <GameNavigation />
            </ThemeProviderWrapper>
          </PersistGate>
        </AuthContext.Provider>
        <FlashMessage floating position="top" />
      </Provider>
    </ErrorBoundary>
  )
}

export default App
