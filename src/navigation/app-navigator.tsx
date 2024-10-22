import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SCREENS from './constants'
import Matching from '@screens/main/matching'
const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={SCREENS.HOME} component={Matching} />   
  </Stack.Navigator>
)

export default AppNavigator
