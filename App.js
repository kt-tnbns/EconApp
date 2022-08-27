import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigation from './navigations/Navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
