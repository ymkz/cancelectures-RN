import React from 'react'
import { StyleSheet, View } from 'react-native'

export default (sectionID, rowID, adjacentRowHighlighted) => (
  <View key={`${sectionID}-${rowID}`} style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ccc' }} />
)
