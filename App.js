import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'; '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Players from './Components/screens/Players'
import Countries from './Components/screens/Countries'

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer><Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Countries" component={Countries} />
      <Stack.Screen name="Players" component={Players} />
    </Stack.Navigator></NavigationContainer>

  )
}

export default App
