import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, } from 'react-native'
import Dashboard from '../screens/Dashboard';
import OilPrice from '../screens/OilPrice';


const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Oil" component={OilPrice} />
    </Drawer.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})