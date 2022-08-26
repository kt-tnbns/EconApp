import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider,Box,HStack,StatusBar,IconButton,Icon,Text } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { HeaderData } from './HeaderData';

const Header = () => {
  return (
    <NativeBaseProvider >
        <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#fff" />
      <HStack bg="#fff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
        <HStack alignItems="center">
          <IconButton icon={<Icon size="8" as={MaterialIcons} name="menu" color="#000" />} />
          <Text color="#000" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
            {HeaderData.map((item,index) => {
                return(
                    <IconButton key={item.name} icon={<Icon as={item.iconType} name={item.icon} size="6" color={item.color} />} />
                    )
                }
            )}
        </HStack>
      </HStack>
    </NativeBaseProvider>
  )
}

export default Header

const styles = StyleSheet.create({})