import { Entypo } from '@expo/vector-icons'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { colors } from 'src/constants'

const BackButton = () => (
  <Entypo
    name="chevron-thin-left"
    size={24}
    color={colors.black}
    style={styles.icon}
    onPress={Actions.pop}
  />
)

export default BackButton

const styles = StyleSheet.create({
  icon: {
    marginLeft: 8
  }
})
