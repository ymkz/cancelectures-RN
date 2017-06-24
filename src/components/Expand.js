import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

export default ({ lecture }) => (
  <View style={styles.expand}>
    <View style={styles.subcontent}>
      <Icon name='star' size={16} color='#424242' />
      <Text style={styles.info}>分類: {lecture.status}</Text>
    </View>
    <View style={styles.subcontent}>
      <Icon name='access-time' size={16} color='#424242' />
      <Text style={styles.info}>時限: {lecture.time}</Text>
    </View>
    <View style={styles.subcontent}>
      <Icon name='room' size={16} color='#424242' />
      <Text style={styles.info}>教室: {lecture.room}</Text>
    </View>
    <View style={styles.subcontent}>
      <Icon name='note' size={16} color='#424242' />
      <Text style={styles.info}>備考: {lecture.memo}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  expand: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc'
  },
  subcontent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    fontWeight: 'bold',
    color: '#424242'
  }
})
