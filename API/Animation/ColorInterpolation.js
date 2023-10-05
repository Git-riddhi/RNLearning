import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, useDerivedValue, interpolateColor, withTiming } from 'react-native-reanimated'
import React from 'react';

const ColorInterpolation = () => {

  const animation = useSharedValue(0)

  const animationColor = useDerivedValue(() => {
    return interpolateColor(animation.value,
      [0, 1],
      ['#631d94', '#399915']
    )
  })

  const startAnimation = () => {
    animation.value = withTiming(1,{
      duration:2000
    })
    setTimeout(() => {
      animation.value=0
    },2000)
  }
  const animationStyle = useAnimatedStyle(() => {
    return{
      backgroundColor : animationColor.value
    }
  })
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box,animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#631d94'
  }
});

export default ColorInterpolation;