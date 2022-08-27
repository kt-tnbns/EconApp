import { StyleSheet, } from 'react-native'
import { NativeBaseProvider,Box,HStack,StatusBar,IconButton,Icon,Text,Switch,useColorMode,useColorModeValue, Center } from 'native-base'
import React from 'react'

const Dashboard = (theme,toggleColorMode) => {
  return (
    <NativeBaseProvider >
        <Box bg={theme.bgColor}>
            <Center>
                <Text color={theme.txtColor}>
                    Dashboard
                </Text>
            </Center>
        </Box>
    </NativeBaseProvider>
  )
}

export default Dashboard

const styles = StyleSheet.create({})