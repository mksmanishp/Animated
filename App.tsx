import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NoLibaray from './tutortails/NoLibaray'

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.text}>Animations</Text>
      <NoLibaray />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: "center"

  }
})