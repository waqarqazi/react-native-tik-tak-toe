import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  overLay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
})
