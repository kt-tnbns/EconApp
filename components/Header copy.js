import { StyleSheet, } from 'react-native'
import { NativeBaseProvider,Box,HStack,StatusBar,IconButton,Icon,Text,Switch,useColorMode,useColorModeValue, Center } from 'native-base'
import React from 'react'

const Dashboard = (color) => {
    console.log(color);
  return (
    <NativeBaseProvider >
        <Box bg={color.theme.bgColor} w="100%" h="100%">
            <Center>
                <Text color={color.theme.txtColor}>
                    Dashboard
                </Text>
            </Center>
        </Box>
    </NativeBaseProvider>
  )
}

export default Dashboard

const styles = StyleSheet.create({})