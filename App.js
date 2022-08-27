import * as React from 'react';
import { useColorScheme } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import {NavigationContainer,DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigation from './navigations/Navigation';

export default function App() {
  const scheme = useColorScheme();

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
