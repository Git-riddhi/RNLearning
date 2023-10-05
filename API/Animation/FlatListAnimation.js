import React, { useEffect, useRef } from 'react';
import { FlatList, View, Text, Animated, ScrollView } from 'react-native';
import { Easing } from 'react-native-reanimated';

const data = Array.from({ length: 50 }, (_, index) => ({ id: String(index) }));

const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, 80 * index, 80 * (index + 2)];
    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 0, 80],
    });

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0.6],
    });

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0.3],
    });

    return (
      <Animated.View
        style={{
          height: 80,
          width: '90%',
          borderRadius: 15,
          backgroundColor: '#3498db',
          alignSelf: 'center',
          marginVertical: 5,
          transform: [{ translateY }, { scale }],
          opacity,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{fontSize:20, color:'#3498db', fontWeight:'bold', textAlign:'center', marginVertical:10}}>FlatList With Animation</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
      />
    </View>
  );
};

export default App;
