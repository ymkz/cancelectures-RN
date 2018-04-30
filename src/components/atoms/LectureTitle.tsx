import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from 'src/constants'

interface Props {
  lecture: Lecture
}

const LectureTitle = ({ lecture }: Props) => (
  <Text style={styles.title}>{lecture.title}</Text>
)

export default LectureTitle

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
