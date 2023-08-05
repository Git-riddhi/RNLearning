import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [answers, setAnswers] = useState([]);

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "London", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Liechtenstein", "San Marino"],
      correctAnswer: "Vatican City",
    },
    {
      question: "What is the name of first British to visit India?",
      options: ["Hawkins", "Norway", "Devid", "George Bush"],
      correctAnswer: "Hawkins",
    },
    {
      question: "What is the name of the first university of India?",
      options: [
        "Nalanda University",
        "Taxshila University",
        "Jawahar University",
        "Dronacharya University",
      ],
      correctAnswer: "Nalanda University",
    },
    {
      question: "What is the name of the first deputy Prime Minister of India?",
      options: [
        "Sardar Vallabh Bhai Patel",
        "R.N. Shukla",
        "V.R. Gill",
        "D.B. Mahawar",
      ],
      correctAnswer: "Sardar Vallabh Bhai Patel",
    },
    {
      question: "What is the name of first Indian Pilot?",
      options: [
        "J.R.D. Tata in 1929",
        "R.N. Shukla",
        "V.R. Gill",
        "D.B. Mahawar",
      ],
      correctAnswer: "J.R.D. Tata in 1929",
    },
    {
      question: "What is the name of first Indian to win Nobel Prize?",
      options: [
        "Rabindranath Tagore",
        "R.N. Shukla",
        "V.R. Gill",
        "D.B. Mahawar",
      ],
      correctAnswer: "Rabindranath Tagore",
    },
    {
      question: "Total number of oceans in the World is..",
      options: ["3", "5", "7", "12"],
      correctAnswer: "5",
    },
    {
      question: "What is the First Indian recipient of Oscar Award?",
      options: [
        "Bhanu Athaiya",
        "R.N. Shukla",
        "Dr. Zakir Hussain",
        "D.B. Mahawar",
      ],
      correctAnswer: "Bhanu Athaiya",
    },
  ];

  const goToPreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer(answers[currentQuestion - 1]);
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
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
        <Text style={{ fontSize: 20, marginBottom: 20, color: "grey" }}>
          Quiz Completed! Your Score: {score}
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
          {/* {currentQuestion === quizData.length ? <Text style={styles.navigationButtonText}>Done</Text> : */}
            <Text style={styles.navigationButtonText}>Next</Text>
            {/*  } */}
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

export default QuizScreen;
