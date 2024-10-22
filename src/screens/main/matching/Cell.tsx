// components/Cell.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the props interface for the Cell component
interface CellProps {
  value: string | number; // The value can be either a string or a number
  onPress: () => void;    // onPress is a function with no arguments
}

const Cell: React.FC<CellProps> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  cellText: {
    fontSize: 24,
  },
});

export default Cell;
