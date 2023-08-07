import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { quizData } from "./QuizData";

import { BackHandler } from 'react-native';


const QuizScreen = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});


  const handleBackButtonClick = () => {
    Alert.alert("Are You Sure ?", "You want to quit ?", [
      {
        text: "Yes",
        onPress: () => {
          props.navigation.goBack()
        },
      },
      { text: "No", onPress: () => console.log("Okay"), style: "cancel" },
    ]);
    console.log('backhandler');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  const handleAnswerSelection = (questionIndex, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));

    console.log('selectedOption ===>', selectedOption);

  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(0)
  };

  const handleRestartQuiz = () => {
    props.navigation.navigate("Welcome")
  };


  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        // console.log('Correct Answer');
        score += 4;
        //Addition assignment (+=)
      } else if (selectedAnswers[index]) {
        // console.log('Wrong Answer');
        score -= 1;
      }
    });
    console.log('score ====>', score);
    return score;
  };


  // const Score = calculateScore();

  if (currentQuestion >= quizData.length) {

    const Score = calculateScore();
    return (
      <View style={styles.resultView}>
        <Text style={styles.resultText}>Quiz completed!</Text>
        <Text style={styles.resultText}>Your score : {Score}</Text>
        <View style={styles.restartButtonView}>
          <TouchableOpacity
            onPress={handleRestartQuiz}
            style={styles.navigationButton}
          >
            <Text style={styles.navigationButtonText}>Back To Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const currentQuestionData = quizData[currentQuestion];
  const isCorrect = selectedAnswers[currentQuestion] === quizData[currentQuestion].correctAnswer;

  return (
    <View style={styles.mainContainer}>

      <Text
        style={styles.questionIndex}>
        Questions :{' ' + currentQuestion + '/' + quizData.length}
      </Text>

      <Text style={styles.textStyle}>
        {quizData[currentQuestion].question}
      </Text>

      {currentQuestionData.options.map((option, index) => (

        <TouchableOpacity
          key={index}
          onPress={() => handleAnswerSelection(currentQuestion, option)}
          style={[styles.optionButton,
          {
            backgroundColor: selectedAnswers[currentQuestion] === option ? (isCorrect ? 'green' : 'red') : 'lightgrey',
          }
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.navigationButtonView}>

        <TouchableOpacity
          onPress={handlePreviousQuestion}
          disabled={currentQuestion === 0}
          style={[
            styles.navigationButton,
            { opacity: currentQuestion === 0 ? 0.5 : 1 },
          ]}
        >
          <Text style={styles.navigationButtonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleResetQuiz}
          style={[
            styles.navigationButton,
          ]}
        >
          <Text style={styles.navigationButtonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNextQuestion}
          style={[
            styles.navigationButton,
          ]}
        >
          <Text style={styles.navigationButtonText}>{currentQuestion < quizData.length - 1 ? 'Next' : 'Submit'}</Text>
        </TouchableOpacity>
      </View>
      {/* <Text
        style={{
          color: "black",
          fontSize: 15,
          marginVertical: 50,
          textAlign: "center",
        }}
      >
        Score: {Score}
      </Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  questionIndex: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 10
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
  },
  optionText: {
    fontSize: 16,
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
    marginHorizontal: 10,
  },
  navigationButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  resultView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    marginRight: 15,
  },
  resultText: {
    fontSize: 20,
    marginBottom: 20,
    color: "black"
  },
  restartButtonView: {
    height: 40,
    width: "40%",
  }
});

export default QuizScreen;
