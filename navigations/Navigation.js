import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements';
import {StyleSheet} from 'react-native';
import Dashboard from '../screens/Dashboard';
import OilPrice from '../screens/OilPrice';
import Header from '../components/Header';
import { ScreenDetail } from './ScreenDetail';
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator useLegacyImplementation>
        {ScreenDetail.map((item,index) => {
            return(
                <Drawer.Screen
                name={item.title}
                key={item.title}
                component={item.component}
                options={
                {
                    headerTitleAlign:'center',
                    drawerLabel: item.drawerLabel,
                }}
      />
            )
        })}
    </Drawer.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
