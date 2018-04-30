import { Entypo } from '@expo/vector-icons'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from 'src/constants'

interface Props {
  title: string
}

const SectionHeader = ({ title }: Props) => (
  <View style={styles.container}>
    <Entypo name="calendar" size={18} color={colors.black} />
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default SectionHeader

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderBottomColor: colors.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.darkGray,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    height: 32,
    paddingHorizontal: 16
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    marginLeft: 8
  }
})
