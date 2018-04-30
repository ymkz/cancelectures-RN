import * as React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Configs from 'src/components/molecules/Configs'
import Developer from 'src/components/molecules/Developer'
import { colors } from 'src/constants'

interface Props {
  handleValueChange: (value, name) => void
  setting: {}
}

class Setting extends React.PureComponent<Props> {
  render() {
    const { setting, handleValueChange } = this.props
    return (
      <ScrollView style={styles.container}>
        <Configs setting={setting} handleValueChange={handleValueChange} />
        <Developer />
      </ScrollView>
    )
  }
}

export default Setting

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    flex: 1,
    paddingVertical: 32
  }
})
