import fonts from '@assets/fonts'
import { StyleSheet } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
export const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    containerView: {
      flex: 1,
    },
    innerContainer: {
      paddingHorizontal: 20,
      height: '100%',
      backgroundColor: '#fff',
    },
    label: {
      fontSize: heightPercentageToDP('2.4%'),
      color: '#000',
      fontFamily: fonts.regular,
      marginTop: 20,
    },
    childContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      width: '60%',
    },
    iconContainer: {
      margin: 12,
      width: 55,
      height: 55,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Icon: {
      justifyContent: 'center',
    },
    genderStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    btnView: {
      marginTop: heightPercentageToDP(5),
    },
  })

export default makeStyles
