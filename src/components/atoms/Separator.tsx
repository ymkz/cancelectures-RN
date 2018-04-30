import * as React from 'react'
import { StyleSheet, View } from 'react-native'

const Separator = () => <View style={styles.separator} />

export default Separator

const styles = StyleSheet.create({
  separator: {
    borderTopColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth
  }
})
