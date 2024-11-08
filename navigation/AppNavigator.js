import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

console.log("AppNavigator.js Loaded");

export default function AppNavigator() {
  console.log("Rendering AppNavigator");
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}





