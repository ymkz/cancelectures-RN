import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Config from 'src/components/atoms/Config'
import { colors, groups } from 'src/constants'

interface Props {
  handleValueChange: (value, name) => void
  setting: {}
}

class Configs extends React.PureComponent<Props> {
  render() {
    const { setting, handleValueChange } = this.props
    return (
      <View style={styles.container}>
        {groups.map(group => (
          <Config
            key={group.name}
            icon={group.icon}
            name={group.name}
            value={setting[group.name]}
            handleValueChange={value => handleValueChange(value, group.name)}
          />
        ))}
      </View>
    )
  }
}

export default Configs

const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.darkGray,
    borderTopWidth: StyleSheet.hairlineWidth
  }
})
