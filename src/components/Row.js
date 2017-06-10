import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class Row extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expand: false
    }
  }

  render () {
    return (
      <TouchableOpacity onPress={() => this.setState({ expand: !this.state.expand })}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>{this.props.lecture.title}</Text>
            <Text style={styles.subtitle}>{this.props.lecture.teacher}</Text>
          </View>
          {this.state.expand &&
            <View style={styles.expand}>
              <Text>分類: {this.props.lecture.status}</Text>
              <Text>時限: {this.props.lecture.time}</Text>
              <Text>グループ: {this.props.lecture.group}</Text>
              <Text>教室: {this.props.lecture.room}</Text>
              <Text>備考: {this.props.lecture.memo}</Text>
            </View>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 16
  },
  title: {
    fontSize: 16,
    color: '#212121'
  },
  subtitle: {
    fontSize: 12,
    color: '#646464'
  },
  expand: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  }
})
