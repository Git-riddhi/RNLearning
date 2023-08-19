import React from "react";
import { View, Text } from "react-native";

const CircularMatrixArray = () => {
  const inputMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // const inputMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

  const convertToCircular = (matrix) => {
    const circularArray = [];

    while (matrix.length) {
      console.log('matrix---', matrix);

      circularArray.push(...matrix.shift());

      for (const row of matrix) {
        const val = row.pop();
        console.log('value ---', val);
        if (val !== undefined) {
          circularArray.push(val);
          console.log("circularArray after val push ====>", circularArray);
          row.reverse();
          console.log("circularArray after row reverse====>", circularArray);

        }
      }
      console.log('matrix after---', matrix);

      matrix.reverse();

    }

    console.log("Final circularArray ====>", circularArray);
    return circularArray;
  };

  // Call the convertToCircular function with a copy of the inputMatrix and store the result in circularOutput:
  const circularOutput = convertToCircular([...inputMatrix]);
  console.log("circularOutput ====>", circularOutput);


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "black", fontSize: 15 }}>
        Circular Matrix = [ {circularOutput.join(" , ")} ]
      </Text>
    </View>
  );
};

export default CircularMatrixArray;
