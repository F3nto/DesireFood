import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import SigninScreen from '../Screens/Auth/SigninScreen';
import SignupScreen from '../Screens/Auth/SignupScreen';

const stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (

    <NavigationContainer>

        <stack.Navigator screenOptions={{headerShown : false}}>

            <stack.Screen name = "SigninScreen" component={SigninScreen} />
            <stack.Screen name = "SignupScreen" component={SignupScreen}/>



        </stack.Navigator>
    
    </NavigationContainer>
   
  )
}

export default MainNavigator;