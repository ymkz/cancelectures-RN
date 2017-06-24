import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

export default () => (
  <View style={styles.container}>
    <Icon name='done' size={64} color='#646464' />
    <Text style={styles.text}>{`休講も補講もありません！`}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#646464',
    fontSize: 18,
    marginTop: 24
  }
})
