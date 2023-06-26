import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import HomeDetailsScreen from './HomeDetails';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import ContactScreen from './Contacts';
import SettingScreen from './Settings';
import LoginDataScreen from './LoginDataScreen';
import CallingScreen from './CallingScreen';
import ToDoScreen from './ToDoScreen';
import TaskScreen from './TaskScreen';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>


            <Stack.Navigator initialRouteName={'Home'} screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        // headerShown: false,
                    }}
                />
                <Stack.Screen name="Details" component={HomeDetailsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen}
                // options={{ headerBackVisible: false }}
                />
                <Stack.Screen name="Settings" component={SettingScreen} />
                {/* <Stack.Screen name="Settings" component={SettingScreen} /> */}

                <Stack.Screen name="Contacts" component={ContactScreen} />

                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerStyle: {
                        // backgroundColor: '#f4511e',
                    },
                    //  headerShown: false,
                }} />
                <Stack.Screen name="LoginData" component={LoginDataScreen} />

                <Stack.Screen name="Calling" component={CallingScreen} options={{
                    // headerShown: false,
                }} />
                <Stack.Screen name="ToDoList" component={ToDoScreen} options={{
                    // headerShown: false,
                }} />

                <Stack.Screen name="Task" component={TaskScreen} options={{
                    // headerShown: false,
                }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;