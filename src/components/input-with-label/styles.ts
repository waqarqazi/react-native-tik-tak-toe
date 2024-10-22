import fonts from '@assets/fonts'
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'

export const makeStyles = (colors, isFocused) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: wp('5%'),
    },
    buttonContainer: {
      position: 'absolute',
      bottom: hp('1%'),
      left: 0,
      right: 0,
      paddingHorizontal: hp('2%'),
      paddingVertical: hp('2%'),
      backgroundColor: 'white', // Background color for the button container
    },
    countryPickerView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      borderBottomColor: isFocused ? 'red' : colors.disable,
      borderBottomWidth: 1,
      paddingHorizontal: 2,
    },
    pickerButtonStyle: {
      marginRight: 10,

      borderBottomColor: isFocused ? 'red' : colors.disable,
      borderBottomWidth: 1,
    },
    textInputStyle: {
      width: '100%',
      paddingVertical: 10,
    },
    label: {
      fontSize: hp('2.4%'),
      color: '#000',
      fontFamily: fonts.regular,
    },
    errorContainer: {
      marginTop: 5,
      paddingVertical: heightPercentageToDP(0.3),
      paddingHorizontal: widthPercentageToDP(4),
      backgroundColor: 'red',
      borderBottomLeftRadius: widthPercentageToDP(2),
      borderBottomRightRadius: widthPercentageToDP(2),
      flexDirection: 'row',
      alignItems: 'center',
    },
    errorText: {
      color: '#fff',
      fontFamily: fonts.light,
      fontSize: heightPercentageToDP(2),
      paddingLeft: widthPercentageToDP(3),
    },
  })

export default makeStyles
