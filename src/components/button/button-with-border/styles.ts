import { StyleSheet } from 'react-native'
export const makeStyles = (colors: any) =>
  StyleSheet.create({
    btn: {
      height: 45,
      width: '100%',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.primary,
    },
    btnContainer: {
      marginTop: 14,
    },
  })

export default makeStyles
