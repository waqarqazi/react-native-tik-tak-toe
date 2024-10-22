import fonts from '@assets/fonts'
import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
export const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    errorMessage: {
      fontFamily: fonts.regular,
      fontSize: 12,
      color: colors.danger,
      marginLeft: wp('18.5%'),
      marginTop: 3,
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
  })

export default makeStyles
