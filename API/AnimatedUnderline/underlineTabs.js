import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

const underlineTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const underlinePosition = new Animated.Value(0);
  const screenWidth = Dimensions.get('window').width;
  const tabWidth = screenWidth / 3; // Assuming there are 3 tabs

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
    Animated.spring(underlinePosition, {
      toValue: tabIndex - 1,
      useNativeDriver: false,
    }).start();
  };

  const renderContent = () => {
    if (activeTab === 1) {
      return <Text>Tab 1 Content</Text>;
    } else if (activeTab === 2) {
      return <Text>Tab 2 Content</Text>;
    } else if (activeTab === 3) {
      return <Text>Tab 3 Content</Text>;
    }
  };

  const tabUnderlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: tabWidth,
    height: 2,
    backgroundColor: 'blue',
    transform: [
      {
        translateX: underlinePosition.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, tabWidth, tabWidth * 2],
        }),
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => handleTabPress(1)} style={{ flex: 1, padding: 10, alignItems: 'center' }}>
          <Text style={{ color: 'black' }}>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress(2)} style={{ flex: 1, padding: 10, alignItems: 'center' }}>
          <Text style={{ color: 'black' }}>Tab 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress(3)} style={{ flex: 1, padding: 10, alignItems: 'center' }}>
          <Text style={{ color: 'black' }}>Tab 3</Text>
        </TouchableOpacity>
      </View>
      <Animated.View style={[tabUnderlineStyle]} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {renderContent()}
      </View>
    </View>
  );
};

export default underlineTabs;
