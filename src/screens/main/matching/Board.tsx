import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';
interface BoardProps {
  board: (number | string)[][]; 
  onCellPress: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onCellPress }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell === 0 ? '' : cell}
              onPress={() => onCellPress(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
