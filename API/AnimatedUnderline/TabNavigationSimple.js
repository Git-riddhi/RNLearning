import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabNavigationSimple = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    if (activeTab === 1) {
      return <Text>Tab 1 Content</Text>;
    } else if (activeTab === 2) {
      return <Text>Tab 2 Content</Text>;
    } else if (activeTab === 3) {
      return <Text>Tab 3 Content</Text>;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setActiveTab(1)} style={{ flex: 1, padding: 10, alignItems: 'center', backgroundColor: activeTab === 1 ? 'blue' : 'transparent' }}>
          <Text style={{ color: activeTab === 1 ? 'white' : 'black' }}>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(2)} style={{ flex: 1, padding: 10, alignItems: 'center', backgroundColor: activeTab === 2 ? 'blue' : 'transparent' }}>
          <Text style={{ color: activeTab === 2 ? 'white' : 'black' }}>Tab 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(3)} style={{ flex: 1, padding: 10, alignItems: 'center', backgroundColor: activeTab === 3 ? 'blue' : 'transparent' }}>
          <Text style={{ color: activeTab === 3 ? 'white' : 'black' }}>Tab 3</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {renderContent()}
      </View>
    </View>
  );
};

export default TabNavigationSimple;
