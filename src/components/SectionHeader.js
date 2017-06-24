import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

export default ({ date }) => {
  return (
    <View style={styles.header}>
      <Icon name='today' color='#424242' />
      <Text style={styles.text}>{date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#424242',
    marginLeft: 10,
    fontWeight: 'bold'
  }
})
