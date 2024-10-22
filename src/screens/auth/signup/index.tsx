import HeaderBasic from '@components/header-basic'
import React, { useMemo, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import * as Yup from 'yup'

import makeStyles from './styles'
import InputWithLabel from '@components/input-with-label'
import { NAME } from '@utils/regix'
import { Formik } from 'formik'
import { Button } from '@components/button'
import ActivityIndicator from '@components/loader'
import DatePickerModal from '@components/date-picker-modal'
import { TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { signup } from '@store/authSlice'
import { AppDispatch } from 'src/types'
const SignUp = ({ route }) => {
  let userId = route?.params?.userId
  const dispatch = useDispatch<AppDispatch>()
  const colors = useTheme()
  const styles = makeStyles()
  const [isLoading, setIsLoading] = useState(false)
  const [dateDob, setDateDob] = useState()
  const [isPickerShow, setIsPickerShow] = useState(false)
  const [gender, setGender] = useState('')
  const [hidePassword, setHidePassword] = useState(true)
 

  const personalSettingSchema = useMemo(
    () =>
      Yup.object({
        firstName: Yup.string()
          .required('First name is required')
          .matches(NAME, 'First Name should only contain Latin letters'),
        lastName: Yup.string()
          .required('First name is required')
          .matches(NAME, 'Last Name should only contain Latin letters'),
        email: Yup.string()
          .required('Emailis required')
          .email(),
        password: Yup.string().required('Password name is required'),
      }),
    [],
  )

  const handleSignup = async (values) => {
    console.log("values",values);
    
    setIsLoading(true)
    dispatch(signup(values))
      .unwrap()
      .then(async (data) => {
        console.log('dataToken', data)
        setIsLoading(false)
        //await AsyncStorage.setItem('token', 'yourAuthTokenHere');
      })
      .catch((err) => {
        // Handle login error
        console.log('err', err)
        setIsLoading(false)
        alert('Error Login failed. Please try again.')
      })
  }

  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <ScrollView style={styles.container}>
        <View style={styles.containerView}>
          <HeaderBasic title="Create Profile" />
          <Formik
           initialValues={{
            firstName: '',
            lastName:'',
            email:'',
            password: '',
          }}
            onSubmit={handleSignup}
            validationSchema={personalSettingSchema}
          >
            {({
              handleSubmit,
              errors,
              handleChange,
              values,
              isValid,
              touched,
              setFieldTouched,
              dirty,
            }) => (
              <View style={styles.innerContainer}>
                <InputWithLabel
                  placeholder="Enter First Name"
                  label="First Name"
                  keyboardType="default"
                  onChange={handleChange('firstName')}
                  value={values.firstName}
                  error={touched.firstName ? errors.firstName : ''}
                  onBlur={() => setFieldTouched('firstName')}
                />
                <InputWithLabel
                  placeholder="Enter Last Name"
                  label="Last Name"
                  keyboardType="default"
                  onChange={handleChange('lastName')}
                  value={values.lastName}
                  error={touched.lastName ? errors.lastName : ''}
                  onBlur={() => setFieldTouched('lastName')}
                />
                <InputWithLabel
                  placeholder="Enter Email"
                  label="Email"
                  keyboardType="default"
                  onChange={handleChange('email')}
                  value={values.email}
                  error={touched.email ? errors.email : ''}
                  onBlur={() => setFieldTouched('email')}
                />
                <InputWithLabel
                  placeholder="Enter Password"
                  label="Password"
                  onEyePress={() => {
                    setHidePassword(!hidePassword)
                  }}
                  secureTextEntry={hidePassword}
                  keyboardType="default"
                  containerStyles={{ marginTop: 20 }}
                  onChange={handleChange('password')}
                  value={values.password}
                  error={touched.password ? errors.password : ''}
                  onBlur={() => setFieldTouched('password')}
                  eye={
                    <Icon
                      name={hidePassword ? 'eye-off' : 'eye'}
                      size={18}
                      color={colors.primary}
                    />
                  }
                />


                <View style={styles.btnView}>
                  <Button
                    title="Register"
                    disabled={!isValid || !dirty}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  )
}

export default SignUp
