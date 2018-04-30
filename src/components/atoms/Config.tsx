import { MaterialIcons } from '@expo/vector-icons'
import * as React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { colors } from 'src/constants'

interface Props {
  icon: string
  name: string
  handleValueChange: (value: boolean) => void
  value: boolean
}

const Config = ({ icon, name, value, handleValueChange }: Props) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <MaterialIcons name={icon} size={24} color={colors.darkGray} />
      <Text style={styles.text}>{name}</Text>
    </View>
    <Switch value={value} onValueChange={handleValueChange} />
  </View>
)

export default Config

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: colors.black,
    fontSize: 16,
    marginHorizontal: 8
  }
})
