import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import WithDrawScreen from './app/screens/WithDrawScreen';
import SpinnerScreen from './app/screens/SpinnerScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SpinnerScreen">
        <Stack.Screen name="WithDrawScreen" component={WithDrawScreen} />
        <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


