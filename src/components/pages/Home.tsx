import * as React from 'react'
import { SectionList, StyleSheet, View } from 'react-native'
import Empty from 'src/components/atoms/Empty'
import SectionHeader from 'src/components/atoms/SectionHeader'
import Separator from 'src/components/atoms/Separator'
import LectureItem from 'src/components/organisms/LectureItem'
import { colors } from 'src/constants'
import { mapDataToSection } from 'src/utils'

interface Props {
  lectures: Lecture[]
  setting: {}
}

class Home extends React.PureComponent<Props> {
  render() {
    const { lectures, setting } = this.props
    return (
      <View style={styles.container}>
        <SectionList
          sections={mapDataToSection(
            lectures.filter(lecture =>
              Object.keys(setting)
                .filter(key => setting[key])
                .includes(lecture.group)
            )
          )}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={Empty}
          renderItem={({ item }) => <LectureItem lecture={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader title={title} />
          )}
        />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  }
})
