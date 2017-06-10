import React, { Component } from 'react'
import { StyleSheet, View, ListView } from 'react-native'
import { connect } from 'react-redux'
import cheerio from 'cheerio-without-node-native'
import Row from '../components/Row'
import Separator from '../components/Separator'
import SectionHeader from '../components/SectionHeader'
import { add } from '../ducks/lectures'

class Main extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
    this.state = {
      lectures: ds.cloneWithRowsAndSections(this.mapArrayToSectionObject(this.props.lectures)),
      expand: false
    }
  }

  componentWillMount () {
    this.fetchLectures(1)
  }

  componentWillReceiveProps (nextProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
    this.setState({
      lectures: ds.cloneWithRowsAndSections(this.mapArrayToSectionObject(nextProps.lectures))
    })
  }

  fetchLectures = (page) => {
    fetch(`http://www.kougi.shimane-u.ac.jp/selectweb/conduct_list.asp?abspage=${page}`).then(response => {
      return response.text()
    }).then(text => {
      const $ = cheerio.load(text)
      const current = Number($('.nowpagenum').text())
      const pages = $('.pagenum').map((i, e) => $(e).text()).get().map(v => Number(v))
      const raw = $('.DataField').map((i, e) => $(e).text()).get()
      const array = raw.map(v => v === '' ? 'N/A' : v)
      const data = this.mapArrayToObject(array)
      this.props.dispatch(add(data))
      if (current < Math.max.apply(null, pages)) {
        this.fetchLectures(current + 1)
      } else {
        console.log('finish!')
      }
    }).catch(error => {
      console.log(error)
    })
  }

  mapArrayToObject (array) {
    let result = []
    for (let i = 0; i < array.length; i = i + 8) {
      result.push({
        date: array[i],
        status: array[i + 1],
        time: array[i + 2],
        group: array[i + 3],
        title: array[i + 4],
        teacher: array[i + 5],
        room: array[i + 6],
        memo: array[i + 7]
      })
    }
    return result
  }

  mapArrayToSectionObject = (lectures) => {
    let mappedWithSection = {}
    lectures.forEach(lecture => {
      if (!mappedWithSection[lecture.date]) {
        mappedWithSection[lecture.date] = []
      }
      mappedWithSection[lecture.date].push(lecture)
    })
    return mappedWithSection
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.state.lectures}
          renderSeparator={Separator}
          renderRow={rowData => <Row lecture={rowData} />}
          renderSectionHeader={(senctionData, date) => <SectionHeader date={date} />}
        />
      </View>
    )
  }
}

function mapJapaneseToEnglish (groupByJp) {
  switch (groupByJp) {
    case '教養':
      return 'culture'
    case '法文学部':
      return 'law'
    case '教育学部':
      return 'education'
    case '人間科学部':
      return 'humanity'
    case '医学部':
      return 'medic'
    case '総合理工学部':
      return 'engineering'
    case '生物資源学部':
      return 'biology'
    case '大学院':
      return 'master'
    default:
      return 'culture'
  }
}

function mapStateToProps ({ lectures, setting }) {
  return {
    lectures: lectures.filter(lecture => setting[mapJapaneseToEnglish(lecture.group)])
  }
}

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  }
})
