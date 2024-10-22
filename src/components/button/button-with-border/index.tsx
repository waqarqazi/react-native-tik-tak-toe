import { View, Text } from 'react-native'
import React from 'react'
import makeStyles from './styles'
import { useTheme } from 'styled-components'
import { Button as PaperButton } from 'react-native-paper'
import { widthPercentageToDP } from 'react-native-responsive-screen'
type Props = {
  disabled?: boolean
  onPress: any
  title?: string
  svg?: any
  leftIcon?: any
}

export default function ButtonWithBorder(props: Props) {
  const colors = useTheme()
  const styles = makeStyles(colors)

  return (
    <View style={styles.btnContainer}>
      <PaperButton
        disabled={props.disabled}
        onPress={props.onPress}
        contentStyle={[
          styles.btn,
          {
            backgroundColor: props?.disabled ? colors.disable : colors.btnWhite,
          },
        ]}
      >
        <View style={{ marginLeft: 10 }}>{props.leftIcon}</View>
        {props.title && (
          <Text
            style={{
              color: colors.primary,
              fontSize: widthPercentageToDP(3.5),
            }}
          >
            {props.title}
          </Text>
        )}

        {/* Add your SVG here if needed */}
      </PaperButton>
    </View>
  )
}
