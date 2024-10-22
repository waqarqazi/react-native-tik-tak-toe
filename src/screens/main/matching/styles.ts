import { StyleSheet } from 'react-native'
export const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    userInfo: {
      fontSize: 16,
      marginBottom: 10,
      color: '#555',
    },
    board: {
      width: 300,
      height: 300,
      flexDirection: 'column',
      marginBottom: 20,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    cell: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
      height: 100,
      backgroundColor: '#fff',
    },
    cellText: {
      fontSize: 32,
      color: '#333',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 20,
    },
    winnerText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#007BFF',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    card: {
      width: 80,
      height: 80,
      borderWidth: 1,
      borderColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 2, // For Android shadow effect
      shadowColor: '#000', // For iOS shadow effect
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardValue: {
      fontSize: 24,
      color: '#333',
    },
  })

export default makeStyles
