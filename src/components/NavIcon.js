import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux'

export default () => (
  <TouchableOpacity onPress={() => Actions.setting()}>
    <Icon name='settings' size={24} color='#424242' />
  </TouchableOpacity>
)
