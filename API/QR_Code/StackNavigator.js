import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import GeneratorScreen from './Generater';
import ScannerScreen from './Scanner';
import DownloadQRScreen from './DownloadQR';

// screens import


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DownloadQR'>


                {/* <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}


                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ScannerScreen"
                    component={ScannerScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="GeneratorScreen"
                    component={GeneratorScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="DownloadQR"
                    component={DownloadQRScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}