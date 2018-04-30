import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from 'src/constants'
import { groupColor, mapGroupFromJpnToEng } from 'src/utils'

const LectureGroup = ({ lecture }) => (
  <View
    style={[
      styles.container,
      { backgroundColor: groupColor[mapGroupFromJpnToEng(lecture.group)] }
    ]}
  >
    <Text style={styles.text}>{lecture.group}</Text>
  </View>
)

export default LectureGroup

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  text: {
    color: colors.white,
    fontWeight: 'bold'
  }
})
