import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/RegisterScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import AboutScreen from './src/screens/AboutScreen';
import DestinationScreen from './src/screens/DestinationScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={SignUp} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="AboutUs" component={AboutScreen} />
       
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
