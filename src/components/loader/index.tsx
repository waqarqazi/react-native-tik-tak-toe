import React from 'react'
import { View } from 'react-native'

import { BarIndicator } from 'react-native-indicators'

import styles from './styles'
import { useTheme } from 'styled-components'

type Props = {
  visible: boolean
  fontSize?: any
}

export default function ActivityIndicator({
  visible = false,
  fontSize,
}: Props) {
  const colors = useTheme()
  if (!visible) {
    return null
  }

  return (
    <View style={styles.overLay}>
      <BarIndicator color={colors.text} size={fontSize ? fontSize : 40} />
    </View>
  )
}
