/* eslint-disable */
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'styled-components'
import { useDispatch } from 'react-redux'
import { showMessage } from 'react-native-flash-message'
import Icon from 'react-native-vector-icons/Ionicons'
import makeStyles from './styles'
import globalStyles from '@styles/globalStyles'
import CustomButton from '@components/button/button-with-border'
import { ActivityIndicator, InputWithLabel } from '@components/index'
import { login } from '@store/authSlice'
import SCREENS from '@navigation/constants'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Config from 'react-native-config'
import { AppDispatch } from 'src/types'

const Login = ({navigation}) => {
  const colors = useTheme()
  const styles = makeStyles(colors)
  const stylesGlobal = globalStyles(colors)

  const [hidePassword, setHidePassword] = useState(true)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch<AppDispatch>()
  const onSubmit = async () => {
    setIsLoading(true);
    dispatch(
      login({
        email: email,
        password: password
      }),
    )
      .unwrap()
      .then(async (data) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('err', err)
        setIsLoading(false);
        showMessage({
          message: "Invalid credentials",
          type: 'danger',
          floating: true,
        })
      })
  }


const onNavigateRegister=()=>{
  navigation.navigate(SCREENS.SIGNUP)
}

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={isLoading} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: widthPercentageToDP('5%'),
        }}
      >

        <Text style={stylesGlobal.largeTextTitle}>Login</Text>
        <Text style={stylesGlobal.mediumText}>
          Welcome to Tik Tak Toe
        </Text>
        <View style={{ justifyContent: 'center', flex: 0.3 }}>

          <InputWithLabel
            placeholder="Enter Email"
            containerStyles={{ paddingHorizontal: 20 }}

            keyboardType={'default'}
            labelFontSize={15}
            onChange={(e) => {
              setEmail(e)
            }}

          />
          <InputWithLabel
            placeholder="Enter Password"
            containerStyles={{ paddingHorizontal: 20, marginTop: 20 }}
            onEyePress={() => {
              setHidePassword(!hidePassword)
            }}
            keyboardType={'default'}
            labelFontSize={15}
            onChange={(e) => {

              setPassword(e)
            }}
            secureTextEntry={hidePassword}
            eye={
              <Icon
                name={hidePassword ? 'eye-off' : 'eye'}
                size={18}
                color={colors.primary}
              />
            }
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Login"
          disabled={isLoading}
          onPress={onSubmit}
        />
          <CustomButton
          title="Register"
          disabled={isLoading}
          onPress={onNavigateRegister}
        />
      </View>
    </View>
  )
}

export default Login
