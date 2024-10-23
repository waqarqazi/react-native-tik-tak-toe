import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@store/authSlice'
import { startGame, makeMove, getProfile } from '@store/gameSlice';
import { RootState } from 'src/types';
import makeStyles from './styles'
const App = () => {
    const styles = makeStyles()
    const dispatch = useDispatch();

    const { board, currentPlayer, winner, status, wins, loses, draws, email, firstName, lastName } = useSelector(
        (state: RootState) => state.game
    );

    useEffect(() => {
        dispatch(getProfile());
        dispatch(startGame());
    }, [dispatch]);

    useEffect(() => {
        if (winner) {
            Alert.alert('Congratulations!', `Winner ${winner == 'X' ? firstName : "Computer"}!`, [
                {
                    text: 'OK',
                    onPress: () => dispatch(startGame()),
                },
            ]);
        }
        dispatch(getProfile());
    }, [winner, dispatch]);

    const handleMove = (row: number, col: number) => {
        if (board[row][col] !== '') {
            Alert.alert('Invalid Move', 'Cell is already occupied.');
            return;
        }

        dispatch(makeMove({ row, col, player: currentPlayer }));
     
    };
    const handleLogout = () => {
        dispatch(logout())
    }
    const renderCell = (row: number, col: number) => (
        <TouchableOpacity style={styles.cell} onPress={() => handleMove(row, col)}>
            <Text style={styles.cellText}>{board[row][col]}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>

            {/* User Info */}
            <Text style={styles.userInfo}>
                Player: {firstName} {lastName} ({email})
            </Text>

            <View style={styles.board}>
                {board.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((cell, colIndex) => renderCell(rowIndex, colIndex))}
                    </View>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Restart Game" onPress={() => dispatch(startGame())} />
                <Button title="Logout" onPress={handleLogout} />
            </View>

            {status === 'loading' && <Text>Loading...</Text>}
           

            {/* Stats Cards */}
            <View style={styles.statsContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Wins</Text>
                    <Text style={styles.cardValue}>{wins}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Losses</Text>
                    <Text style={styles.cardValue}>{loses}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Draws</Text>
                    <Text style={styles.cardValue}>{draws}</Text>
                </View>
            </View>
        </View>
    );
};



export default App;
