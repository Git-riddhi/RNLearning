import React, { useEffect } from 'react';
import { FlatList, View, Text, Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';

const data = Array.from({ length: 50 }, (_, index) => ({ id: String(index) }));

const FlatListAnimation = () => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [900, 0], // Slide up from 80 to 0
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1], // Fade in during the animation
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1], // Scale up from 0.5 to 1
  });

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateY }] }}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Animated.View
            style={{
              height: 80,
              width: '90%',
              borderRadius: 15,
              backgroundColor: '#3498db',
              alignSelf: 'center',
              marginVertical: 5,
              opacity, // Apply opacity animation
              transform: [{ scale }], // Apply scale animation
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Animated.View>
  );
};

export default FlatListAnimation;
