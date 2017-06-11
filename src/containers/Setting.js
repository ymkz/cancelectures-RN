import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { update } from '../ducks/setting'

const list = [
  {
    title: '教養',
    group: 'culture',
    icon: 'insert-emoticon'
  },
  {
    title: '法文学部',
    group: 'law',
    icon: 'book'
  },
  {
    title: '教育学部',
    group: 'education',
    icon: 'school'
  },
  {
    title: '人間科学部',
    group: 'humanity',
    icon: 'perm-identity'
  },
  {
    title: '医学部',
    group: 'medic',
    icon: 'healing'
  },
  {
    title: '総合理工学部',
    group: 'engineering',
    icon: 'computer'
  },
  {
    title: '生物資源学部',
    group: 'biology',
    icon: 'language'
  },
  {
    title: '大学院',
    group: 'master',
    icon: 'stars'
  }
]

class Setting extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.label}>
            <Text style={styles.text}>表示するグループ</Text>
          </View>
          <List>
            {list.map((item, i) => (
              <ListItem
                key={item.group}
                title={item.title}
                leftIcon={{ name: item.icon }}
                onSwitch={(status) => this.props.dispatch(update({ group: item.group, status: status }))}
                switched={this.props[item.group]}
                switchButton
                hideChevron
              />
            ))}
          </List>
          <View style={styles.label}>
            <Text style={styles.text}>開発者</Text>
          </View>
          <List>
            <ListItem
              key='developer'
              title='Kazuya Yamashita'
              subtitle='developer'
              leftIcon={{ name: 'face' }}
              onPress={Actions.web}
            />
          </List>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps ({ setting }) {
  return {
    culture: setting.culture,
    law: setting.law,
    education: setting.education,
    humanity: setting.humanity,
    medic: setting.medic,
    engineering: setting.engineering,
    biology: setting.biology,
    master: setting.master
  }
}

export default connect(mapStateToProps)(Setting)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#fafafa'
  },
  label: {
    paddingTop: 20,
    paddingHorizontal: 14
  },
  text: {
    color: '#646464'
  }
})
