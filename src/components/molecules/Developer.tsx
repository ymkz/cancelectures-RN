import { Entypo } from '@expo/vector-icons'
import { WebBrowser } from 'expo'
import * as React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from 'src/constants'

const Developer = () => (
  <TouchableOpacity
    onPress={() => WebBrowser.openBrowserAsync('https://ymkz.co')}
  >
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/13027104' // 'https://github.com/ymkz.png'
        }}
      />
      <View style={styles.developer}>
        <Text style={styles.name}>Kazuya Yamashita</Text>
        <Text style={styles.info}>Developer for Web / App</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={colors.darkGray} />
    </View>
  </TouchableOpacity>
)

export default Developer

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 16,
    height: 32,
    width: 32
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginTop: 32,
    padding: 16
  },
  developer: {
    flex: 1,
    paddingHorizontal: 16
  },
  info: {
    color: colors.black,
    fontSize: 14
  },
  name: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
