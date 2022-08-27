import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider,Box,HStack,StatusBar,IconButton,Icon,Text,Switch,useColorMode,useColorModeValue } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { HeaderData } from './HeaderData';
import Dashboard from '../screens/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Header = () => {
    const {toggleColorMode} = useColorMode();

    const theme = {
        bgColor: useColorModeValue('warmGray.50', 'coolGray.800'),
        txtColor: useColorModeValue('coolGray.800','warmGray.50')
    }
  return (
    <NativeBaseProvider >
      <Box safeAreaTop  />
      <HStack bg={theme.bgColor} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
        <HStack alignItems="center">
          <IconButton  icon={<Icon size="8" as={MaterialIcons} name="menu" color={theme.txtColor}/>} />
          <Text color={theme.txtColor} fontSize="20" fontWeight="bold">
            Dashboard
          </Text>
        </HStack>
        <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name='favorite' size="6" color='#FF365D' />} />
            <IconButton onPress={toggleColorMode} icon={<Icon as={MaterialCommunityIcons}  name={useColorModeValue('white-balance-sunny','weather-night')} size="6" color={theme.txtColor} />} />
        </HStack>
      </HStack>
    </NativeBaseProvider>
  )
}

export default Header

const styles = StyleSheet.create({})