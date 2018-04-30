import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import HiddenItem from 'src/components/molecules/HiddenItem'
import VisibleItem from 'src/components/molecules/VisibleItem'

interface Props {
  lecture: Lecture
}

interface State {
  open: boolean
}

class LectureItem extends React.PureComponent<Props, State> {
  state = {
    open: false
  }

  render() {
    const { lecture } = this.props
    const { open } = this.state
    return (
      <TouchableOpacity onPress={() => this.setState({ open: !open })}>
        <VisibleItem lecture={lecture} open={open} />
        {open && <HiddenItem lecture={lecture} />}
      </TouchableOpacity>
    )
  }
}

export default LectureItem
