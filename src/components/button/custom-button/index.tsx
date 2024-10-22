import { View, Text } from 'react-native'
import React from 'react'
import makeStyles from './styles'
import { useTheme } from 'styled-components'
import { Button as PaperButton } from 'react-native-paper'
type Props = {
  marginVertical?: number
  disabled?: boolean
  onPress?: any
  title?: string
  svg?: any
}

export default function CustomButton(props: Props) {
  const vertical = props.marginVertical ? props.marginVertical : 5
  const colors = useTheme()
  const styles = makeStyles(colors)

  return (
    <View style={[styles.btnContainer, { marginVertical: vertical }]}>
      <PaperButton
        disabled={props.disabled}
        onPress={props.onPress}
        contentStyle={[
          styles.btn,
          {
            backgroundColor: props?.disabled ? colors.disable : colors.primary,
          },
        ]}
      >
        {props.title && <Text style={{ color: 'white' }}>{props.title}</Text>}
        {/* Add your SVG here if needed */}
      </PaperButton>
    </View>
  )
}
