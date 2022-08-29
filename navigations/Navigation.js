import * as React from 'react';
import {View, Text ,Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements';
import {StyleSheet} from 'react-native';
import Dashboard from '../screens/Dashboard';
import OilPrice from '../screens/OilPrice';
import Header from '../components/Header';
import { ScreenDetail } from './ScreenDetail';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../config/themeContext';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const theme = React.useContext(themeContext);
  const [mode , setMode] = React.useState(false);
  return (
    <Drawer.Navigator useLegacyImplementation style= {[
      {backgroundColor: theme.background} ,
      {color: theme.color}
    ]} >
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
                    headerRight: () => (
                    <Switch 
                      value={mode} 
                      onValueChange={(value) => {
                        setMode(value);
                        EventRegister.emit("changeTheme", value);

                      }} 
                      
                      />)
                }}
      />
            )
           
        })}
    </Drawer.Navigator>
     
  );
};

export default Navigation;

const styles = StyleSheet.create({});
