import { Entypo } from '@expo/vector-icons'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from 'src/constants'
import { lectureDetailPrefix } from 'src/utils'

interface Props {
  lecture: Lecture
  name: string
  icon: string
}

const LectureDetail = ({ lecture, name, icon }: Props) => (
  <View style={styles.container}>
    <Entypo name={icon} size={16} color={colors.black} style={styles.icon} />
    <Text style={styles.detail}>
      {lectureDetailPrefix[name]}: {lecture[name]}
    </Text>
  </View>
)

export default LectureDetail

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  detail: {
    color: colors.black,
    fontSize: 14,
    marginBottom: 4
  },
  icon: {
    marginRight: 8
  }
})
