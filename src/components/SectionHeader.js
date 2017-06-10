import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default ({ date }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eee'
  },
  text: {
    color: '#212121'
  }
})
