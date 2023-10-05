import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBoxes = () => {
  const buttonPressed = () => {
    // Toggle the animation state based on button press
    isAnimating.value = !isAnimating.value;
  };

  // Shared values for animation
  const isAnimating = useSharedValue(false);
  const animationDuration = 1000;

  // Animated styles for the first component
  const box1Style = useAnimatedStyle(() => {
    return {
      width: isAnimating.value ? withTiming(200, { duration: animationDuration }) : withTiming(100, { duration: animationDuration }),
      height: isAnimating.value ? withTiming(200, { duration: animationDuration }) : withTiming(100, { duration: animationDuration }),
      backgroundColor: isAnimating.value ? 'green' : 'blue',
    };
  });

  // Animated styles for the second component
  const box2Style = useAnimatedStyle(() => {
    return {
      backgroundColor: isAnimating.value ? 'orange' : 'red',
      transform: [
        { translateY: isAnimating.value ? withTiming(-170, { duration: animationDuration }) : withTiming(0, { duration: animationDuration }) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box1, box1Style]} />
      <Animated.View style={[styles.box2, box2Style]} />
      <TouchableOpacity onPress={buttonPressed} style={styles.button}>
        <Text style={styles.buttonText}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginBottom: 20,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnimatedBoxes;