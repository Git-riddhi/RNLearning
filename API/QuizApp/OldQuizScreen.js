import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { quizData } from "./QuizData";

const OldQuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer(answers[currentQuestion - 1])
  };

  const goToNextQuestion = () => {
    const isCorrect = quizData[currentQuestion].correctAnswer === selectedAnswer;
    if (selectedAnswer && isCorrect) {
      setScore(score + 4)
    } else if (!selectedAnswer) {
      setScore(score)
    }
    else {
      setScore(score - 1)
    }
    setAnswers([...answers, selectedAnswer]);
    setSelectedAnswer('');
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };


  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  

  if (currentQuestion >= quizData.length) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 40,
          marginRight: 15,
        }}
      >
        <Text style={{ fontSize: 20, marginBottom: 20, color: "black" }}>
          Quiz Completed !  Your Score is : {score}
        </Text>
        <Button title="Restart Quiz" onPress={handleRestartQuiz} />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>

      <Text style={styles.textStyle}>
        {quizData[currentQuestion].question}
      </Text>

      {quizData[currentQuestion].options.map((option, index) => (

        <TouchableOpacity
          key={index}
          onPress={() => handleAnswerSelection(option)}
          style={[styles.optionButton,
          {
            backgroundColor: selectedAnswer === option ? 'green' : 'lightgrey'
          }
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.navigationButtonView}>

        <TouchableOpacity
          onPress={goToPreviousQuestion}
          disabled={currentQuestion === 0}
          style={[
            styles.navigationButton,
            { opacity: currentQuestion === 0 ? 0.5 : 1 },
          ]}
        >
          <Text style={styles.navigationButtonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToNextQuestion}
          // disabled={currentQuestion === quizData.length - 1}
          style={[
            styles.navigationButton,
            // { opacity: currentQuestion === quizData.length - 1 ? 0.5 : 1 },
          ]}
        >
          <Text style={styles.navigationButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 15,
          marginVertical: 50,
          textAlign: "center",
        }}
      >
        Score: {score}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    marginLeft: 10,
    color: "black",
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "700",
  },
  optionButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'lightgrey'
  },
  optionText: {
    fontSize: 16,
    // color: 'white',
    color: 'black'
  },
  navigationButtonView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
  },
  navigationButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 30,
  },
  navigationButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default OldQuizScreen;
