import { Entypo } from '@expo/vector-icons'
import * as React from 'react'
import { colors } from 'src/constants'

interface Props {
  open: boolean
}

const Item = ({ open }: Props) => (
  <Entypo
    name={open ? 'chevron-up' : 'chevron-down'}
    size={24}
    color={colors.darkGray}
  />
)

export default Item
