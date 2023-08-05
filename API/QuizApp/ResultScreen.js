import React from 'react';
import { View, Text, Button } from 'react-native';

const ResultsScreen = ({ score, restartQuiz }) => {
  return (
    <View>
      <Text>Quiz Over!</Text>
      <Text>Your score is: {score}</Text>
      <Button title="Restart Quiz" onPress={restartQuiz} />
    </View>
  );
};

export default ResultsScreen;