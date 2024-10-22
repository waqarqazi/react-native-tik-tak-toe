// src/navigation/GameNavigation.tsx
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../types'
import AppNavigator from './app-navigator'
import AuthNavigator from './auth-navigator'
// import { login, logout } from '../store/authSlice';

const GameNavigation: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default GameNavigation
