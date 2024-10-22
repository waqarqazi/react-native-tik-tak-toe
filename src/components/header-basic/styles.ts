import fonts from '@assets/fonts'
import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const makeStyles = (colors: any) =>
  StyleSheet.create({
    main: {
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    txt: {
      fontSize: hp('2%'),
      color: colors.dark,
      fontFamily: fonts.regular,
    },
    premiumBadge: {
      backgroundColor: '#F0C929',
      borderRadius: 12,
      paddingVertical: 2,
      paddingHorizontal: 8,
      marginLeft: 10,
    },
    premiumText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  })

export default makeStyles
