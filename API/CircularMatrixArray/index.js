import React from 'react';
import { View, Text } from 'react-native';

const CircularMatrix = () => {
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // Function to convert matrix to circular matrix
  const toCircularMatrix = (matrix) => {
    const circularMatrix = [];
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    let top = 0,
      bottom = rowCount - 1,
      left = 0,
      right = colCount - 1;

    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        circularMatrix.push(matrix[top][i]);
      }
      top++;

      for (let i = top; i <= bottom; i++) {
        circularMatrix.push(matrix[i][right]);
      }
      right--;

      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          circularMatrix.push(matrix[bottom][i]);
        }
        bottom--;
      }

      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          circularMatrix.push(matrix[i][left]);
        }
        left++;
      }
    }

    return circularMatrix;
  };

  const circularFlattened = toCircularMatrix(matrix);
  console.log('circularFlattened',circularFlattened);

  return (
    <View>
      <Text>{JSON.stringify(circularFlattened)}</Text>
    </View>
  );
};

export default CircularMatrix;
