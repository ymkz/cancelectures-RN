import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Expand from './Expand'

export default class Row extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expand: false
    }
  }

  render () {
    const colorMapper = {
      '教養': '#03A9F4',
      '法文学部': '#F44336',
      '教育学部': '#FF9800',
      '人間科学部': '#FFEB3B',
      '医学部': '#009688',
      '総合理工学部': '#9575CD',
      '生物資源科学部': '#8BC34A',
      '大学院': '#607D8B'
    }

    return (
      <TouchableOpacity onPress={() => this.setState({ expand: !this.state.expand })}>
        <View>
          <View style={[styles.header, { borderLeftColor: colorMapper[this.props.lecture.group] }]}>
            <View style={styles.content}>
              <Text style={styles.title}>{this.props.lecture.title}</Text>
              <Text style={styles.subtitle}>{this.props.lecture.teacher}</Text>
            </View>
            <View style={[styles.sign, { backgroundColor: colorMapper[this.props.lecture.group] }]}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{this.props.lecture.group}</Text>
            </View>
            <View style={styles.arrow}>
              <Icon name={this.state.expand ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color='#B0BEC5' />
            </View>
          </View>
          {this.state.expand &&
            <Expand lecture={this.props.lecture} />
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#37474F'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#455A64',
    marginTop: 8
  },
  content: {
    flex: 1
  },
  sign: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  arrow: {
    marginLeft: 4
  }
})
