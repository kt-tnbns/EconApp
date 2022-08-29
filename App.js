import * as React from 'react';
import { useState, useEffect } from "react";
import { useColorScheme } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import {NavigationContainer,DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigation from './navigations/Navigation';
import themeContext from "./config/themeContext";
import theme from "./config/theme";

import { EventRegister } from 'react-native-event-listeners'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

export default function App() {
  const [mode, setMode] = useState(true);
  console.log({ mode })
  
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
        console.log({ data })
      }
    );
      return () => {
        EventRegister.removeEventListener(eventListener);
      };
    }
  );
  return (
   
    <NativeBaseProvider>
      <NavigationContainer theme={ mode === false ? DarkTheme : DefaultTheme}>
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>
  
  );
}
