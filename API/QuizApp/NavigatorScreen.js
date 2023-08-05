import React from "react";
import QuizScreen from "./QuizScreen";
import ResultsScreen from "./ResultScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const NavigatorScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Quiz"
                    component={QuizScreen}
                    options={{ headerShown: true, headerTitleAlign: "center" }}
                />
                <Stack.Screen
                    name="Results"
                    component={ResultsScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigatorScreen;
