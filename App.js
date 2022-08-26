import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeBaseProvider,Center } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>
        <Header/>
        <Footer/>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})