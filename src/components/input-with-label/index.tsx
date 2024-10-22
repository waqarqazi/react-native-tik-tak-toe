/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'

import CountryPicker, { DEFAULT_THEME } from 'react-native-country-picker-modal'
import makeStyles from './styles'
import { useTheme } from 'styled-components'
import globalStyle from '@styles/globalStyles'
import { BioDangerWhite } from '@assets/svgs'
//import fonts from '@assets/fonts'

type Props = {
  label?: string
  width: string | number
  setCountryCode: any
  setSelectCountryCode: any
  countryCode: any
  maxLength: any
  textInputColor?: any
  value: string
  placeholder: string
  onBlur?: any
  onChange?: any
  onEyePress?: any
  eye?: any
  keyboardType?: any
  containerStyles?: any
  secureTextEntry?: boolean
  onFocus?: any
  error?: any
}

export default function (props: Props) {
  const colors = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const styles = makeStyles(colors, isFocused)

  const { width, placeholder } = props
  const [preferredCountries, setPreferredCountries] = useState([
    'MY',
    'PH',
    'SG',
    'ID',
    'TH',
    'VN',
  ])

  const onSelect = (Country: any) => {
    props.setCountryCode(Country.cca2)
    props.setSelectCountryCode(Country.callingCode[0])
  }

  return (
    <View style={[props.containerStyles]}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.countryPickerView}>
        <TextInput
          placeholder={props.placeholder}
          selectionColor={'blue'}
          placeholderTextColor={colors.placeholder}
          autoCapitalize={'none'}
          maxLength={props.maxLength}
          style={styles.textInputStyle}
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          keyboardType={props.keyboardType}
          onChangeText={props.onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false)
            props.onBlur && props.onBlur()
          }}
        />
        {props.eye && (
          <TouchableOpacity
            onPress={props.onEyePress}
            style={{ position: 'absolute', right: 6 }}
          >
            {props.eye}
          </TouchableOpacity>
        )}
      </View>
      {props.error ? (
        <View style={styles.errorContainer}>
          <BioDangerWhite width={3.5} height={3.5} />
          <Text style={styles.errorText}>{props.error}</Text>
        </View>
      ) : null}
    </View>
  )
}
