import React from 'react'
import { View } from 'react-native'

export default (sectionID, rowID, adjacentRowHighlighted) => (
  <View key={`${sectionID}-${rowID}`} style={{ height: 1, backgroundColor: '#ccc' }} />
)
