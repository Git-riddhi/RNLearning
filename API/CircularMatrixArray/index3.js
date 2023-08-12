import React from 'react';
import { View, Text } from 'react-native';

function CircularMatrixOutput() {
  const inputMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const outputArray = [];

  const numRows = inputMatrix.length;
  const numCols = inputMatrix[0].length;

  let rowStart = 0,
    rowEnd = numRows - 1,
    colStart = 0,
    colEnd = numCols - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Push values from top row
    for (let i = colStart; i <= colEnd; i++) {
      outputArray.push(inputMatrix[rowStart][i]);
    }
    rowStart++;

    // Push values from right column
    for (let i = rowStart; i <= rowEnd; i++) {
      outputArray.push(inputMatrix[i][colEnd]);
    }
    colEnd--;

    // Push values from bottom row
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        outputArray.push(inputMatrix[rowEnd][i]);
      }
      rowEnd--;
    }

    // Push values from left column
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        outputArray.push(inputMatrix[i][colStart]);
      }
      colStart++;
    }
  }

  return (
    <View>
      <Text>{outputArray.join(', ')}</Text>
    </View>
  );
}

export default CircularMatrixOutput;
