import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const SignupScreen = () => {
  return (

    <SafeAreaView style = {styles.container}>

    <View style = {styles.content}>

      <Text>Signup screen</Text>

    </View>

    </SafeAreaView>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({

  container : {flex:1},

  content   : {flex:1}

    
})
