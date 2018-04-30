import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from 'src/constants'

interface Props {
  lecture: Lecture
}

const LectureTeacher = ({ lecture }: Props) => (
  <Text style={styles.teacher}>{lecture.teacher}</Text>
)

export default LectureTeacher

const styles = StyleSheet.create({
  teacher: {
    color: colors.black,
    fontSize: 14,
    marginTop: 4
  }
})
