import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const SmileyFace = () => {
  const isHappy = useSharedValue(true);
  const mouthAnimationValue = useSharedValue(0);

  const toggleExpression = () => {
    isHappy.value = !isHappy.value;
    mouthAnimationValue.value = withTiming(isHappy.value ? 0 : 1, {
      duration: 500,
      easing: Easing.linear,
    });
  };

  const mouthAnimationStyle = useAnimatedStyle(() => {
    const width = interpolate(
      mouthAnimationValue.value,
      [0, 1],
      [60, 90], // Adjust the minimum and maximum width as needed
    );
    return {
      width: withTiming(width, { duration: 500 }),
      height: 30,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: 'red',
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpression}>
        <View style={styles.face}>
          <View style={styles.eye} />
          <View style={styles.eye} />
          <Animated.View style={[styles.mouth, mouthAnimationStyle]} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  face: {
    width: 170,
    height: 170,
    borderRadius: 100,
    flexDirection: 'row',
    backgroundColor: '#ffd700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'black',
    top: -25,
    marginHorizontal:25,
  },
  mouth: {
    position: 'absolute',
    bottom: 30,
  },
});

export default SmileyFace;
