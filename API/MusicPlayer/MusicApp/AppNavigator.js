import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Music from './Music';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen name="Home" component={Home} />
        
        <Stack.Screen
          name="Music"
          component={Music}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'PlayList',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
