import React from 'react'
import { View, WebView } from 'react-native'

export default () => (
  <View style={{ flex: 1, paddingTop: 64 }}>
    <WebView source={{ uri: 'https://github.com/ymkz' }} />
  </View>
)
