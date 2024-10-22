import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import makeStyles from './styles'
import { useTheme } from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
type Props = {
  onPressSkip?: any
  onPressRighIcon?: any
  back?: boolean
  title?: String
  premimum?: boolean
  onPressSave?: any
}

export default function HeaderBasic(props: Props) {
  const colors = useTheme()
  const styles = makeStyles(colors)
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        {props.back && (
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            style={{ marginRight: 10 }}
            onPress={() => navigation.goBack()}
          />
        )}
        {props.title && <Text style={styles.headerText}>{props.title}</Text>}
        {props.premimum && (
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>Premium</Text>
          </View>
        )}
      </View>
      {props.onPressSkip && <Text style={styles.txt}>Skip</Text>}
      {props.onPressSave && (
        <TouchableOpacity onPress={props.onPressSave}>
          <Text style={styles.txt}>Save</Text>
        </TouchableOpacity>
      )}
      {props.onPressRighIcon && (
        <Icon
          name="settings"
          size={24}
          color="#000"
          onPress={props.onPressRighIcon}
        />
      )}
    </View>
  )
}
