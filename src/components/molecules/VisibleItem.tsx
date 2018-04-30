import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import LectureGroup from 'src/components/atoms/LectureGroup'
import LectureTeacher from 'src/components/atoms/LectureTeacher'
import LectureTitle from 'src/components/atoms/LectureTitle'
import OpenIcon from 'src/components/atoms/OpenIcon'
import { colors } from 'src/constants'
import { groupColor, mapGroupFromJpnToEng } from 'src/utils'

interface Props {
  lecture: Lecture
  open: boolean
}

const VisibleItem = ({ lecture, open }: Props) => (
  <View
    style={[
      styles.container,
      {
        borderLeftColor: groupColor[mapGroupFromJpnToEng(lecture.group)]
      }
    ]}
  >
    <View style={styles.contents}>
      <LectureTitle lecture={lecture} />
      <LectureTeacher lecture={lecture} />
    </View>
    <LectureGroup lecture={lecture} />
    <OpenIcon open={open} />
  </View>
)

export default VisibleItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderLeftWidth: 4,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 16
  },
  contents: {
    flex: 1
  }
})
