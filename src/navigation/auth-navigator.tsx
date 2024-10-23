import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SCREENS from './constants'
import Login from '@screens/auth/login'
import SignUp from '@screens/auth/signup'


const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    
    <Stack.Screen
      name={SCREENS.LOGIN}
      component={Login}
    />
      <Stack.Screen name={SCREENS.SIGNUP} component={SignUp} />
  </Stack.Navigator>
)

export default AuthNavigator
