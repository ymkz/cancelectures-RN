import { DangerZone } from 'expo'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from 'src/constants'
import empty from 'src/lotties/empty.json'

const { Lottie } = DangerZone

class Empty extends React.PureComponent {
  animation: React.RefObject<any> = React.createRef()

  componentDidMount() {
    this.animation.current.play()
  }

  render() {
    return (
      <View style={styles.container}>
        <Lottie ref={this.animation} source={empty} loop />
      </View>
    )
  }
}

export default Empty

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 64,
    padding: 128
  }
})
