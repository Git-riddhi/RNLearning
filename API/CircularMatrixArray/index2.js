import React from 'react';
import { View, Text } from 'react-native';


// Using For Loop

const CircularMatrix = () => {
  const inputMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  // const inputMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];


  const convertToCircular = (matrix) => {
    const circularArray = [];

    while (matrix.length) {
      console.log('matrix.length====>', matrix.length);
      circularArray.push(...matrix.shift());

      for (const row of matrix) {
        const val = row.pop();
        if (val !== undefined) {
          circularArray.push(val);
          row.reverse();
        }
      }

      matrix.reverse();
    }

    console.log('circularArray ====>', circularArray);
    return circularArray;
  };


  const circularOutput = convertToCircular([...inputMatrix]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{circularOutput.join(', ')}</Text>
    </View>
  );
};

export default CircularMatrix;
