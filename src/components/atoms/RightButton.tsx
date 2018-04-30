import { Entypo } from '@expo/vector-icons'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { colors } from 'src/constants'

const RightButton = () => (
  <Entypo
    name="cog"
    size={24}
    color={colors.black}
    style={styles.icon}
    onPress={Actions.setting}
  />
)

export default RightButton

const styles = StyleSheet.create({
  icon: {
    marginRight: 16
  }
})
