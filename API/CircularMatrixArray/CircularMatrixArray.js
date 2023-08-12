import React from "react";
import { View, Text } from "react-native";

const CircularMatrixArray = () => {
  const inputMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // const inputMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

  // console.log('inputMatrix ===>', inputMatrix);

  const convertToCircular = (matrix) => {
    const circularArray = [];

    // Use a while loop that iterates as long as the matrix still has rows:
    while (matrix.length) {

      // Extract the first row of the matrix and add its elements to the circularArray:
      circularArray.push(...matrix.shift());
      // console.log('circularArray =' , circularArray.push() );

      // remaining rows in the matrix:
      for (const row of matrix) {

        // Pop the last element from each row and add it to the circularArray:
        const val = row.pop();
        console.log('value ---', val);
        if (val !== undefined) {
          circularArray.push(val);
          row.reverse();
        }
      }
      // Reverse the entire matrix (rows order):
      matrix.reverse();

    }

    console.log("circularArray ====>", circularArray);
    return circularArray;
  };

  // Call the convertToCircular function with a copy of the inputMatrix and store the result in circularOutput:
  const circularOutput = convertToCircular([...inputMatrix]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "black", fontSize: 15 }}>
        Circular Matrix = [ {circularOutput.join(" , ")} ]
      </Text>
    </View>
  );
};

export default CircularMatrixArray;
