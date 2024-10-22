import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import fonts from '@assets/fonts' // Assuming 'fonts' is imported correctly from assets

export const globalStyles = (colors: any) =>
  StyleSheet.create({
    appTitle: {
      // Define app title styles if needed
    },
    largeTextTitle: {
      fontSize: hp('4%'),
      textAlign: 'center',
      color: colors.primary,
      fontFamily: fonts.bold,
    },
    mediumText: {
      fontSize: hp('2.4%'),
      color: colors.primary,
      fontFamily: fonts.regular,
      textAlign: 'center',
    },
    smallText: {
      fontSize: hp('1.5%'),
      textAlign: 'center',
      color: colors.primary,
      fontFamily: fonts.regular,
    },
  })
export default globalStyles
