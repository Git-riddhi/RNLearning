import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageChooser from "./ImageChooser";
import ImageSelection from "./ImageSelection";


const Stack = createNativeStackNavigator();

const NavigatorScreenForImage = () => {


    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="ImageChooser"
                screenOptions={{
                    headerShown: false,
                    headerMode: "screen",
                    gestureEnabled: false,
                }}
            >
                <Stack.Screen name="ImageSelection" component={ImageSelection} />
                <Stack.Screen name="ImageChooser" component={ImageChooser} />

            </Stack.Navigator>

        </NavigationContainer>
    );
};
export default NavigatorScreenForImage;
