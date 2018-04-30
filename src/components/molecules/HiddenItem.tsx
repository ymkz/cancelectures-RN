import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import LectureDetail from 'src/components/atoms/LectureDetail'
import { colors } from 'src/constants'

interface Props {
  lecture: Lecture
}

const HiddenItem = ({ lecture }: Props) => (
  <View style={styles.container}>
    <LectureDetail lecture={lecture} name="status" icon="graduation-cap" />
    <LectureDetail lecture={lecture} name="time" icon="stopwatch" />
    <LectureDetail lecture={lecture} name="room" icon="location-pin" />
    <LectureDetail lecture={lecture} name="memo" icon="clipboard" />
  </View>
)

export default HiddenItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16
  }
})
