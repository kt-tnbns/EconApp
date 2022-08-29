import * as React from 'react';
import { View, Text, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
import Dashboard from '../screens/Dashboard';
import OilPrice from '../screens/OilPrice';
import Header from '../components/Header';
import { ScreenDetail } from './ScreenDetail';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../config/themeContext';
import { IconButton, Icon, } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const theme = React.useContext(themeContext);
  const [mode, setMode] = React.useState(false);

  function changeTheme() {
    if (mode === true) {
      setMode(false);
      EventRegister.emit("changeTheme", mode);
    }
    else {
      setMode(true);
      EventRegister.emit("changeTheme", mode);
    }
  }
  return (
    <Drawer.Navigator
      useLegacyImplementation
    >
      {ScreenDetail.map((item, index) => {
        return (
          <Drawer.Screen
            name={item.title}
            key={item.title}
            component={item.component}
            options={
              {
                headerTitleAlign: 'center',
                drawerLabel: item.drawerLabel,
                headerLeft: ({ navigation }) => (<IconButton
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                  icon={
                    <Icon
                      as={MaterialCommunityIcons}
                      name={'menu'}
                      size="6"
                      color={mode === false ? '#000000' : '#FFFFFF'
}
                    />
                  }
                />),
                headerRight: () => (
                  <IconButton
                    onPress={() => {
                      changeTheme();
                    }}
                    icon={
                      <Icon
                        as={MaterialCommunityIcons}
                        name={mode === false ?  'weather-night' : 'white-balance-sunny'}
                        size="6"
                        color={mode === false ? '#000000' : '#FFFFFF'
}
                      />
                    }
                  />
                )
              }}
          />
        )

      })}
    </Drawer.Navigator>

  );
};

export default Navigation;

const styles = StyleSheet.create({});
