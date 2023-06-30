import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InputScreen from './Input';
import AddDataScreen from './AddDataScreen';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'AddData'} screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="AddData" component={AddDataScreen} />
                <Stack.Screen name="Input" component={InputScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;