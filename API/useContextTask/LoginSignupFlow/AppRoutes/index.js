import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../SplashScreen";
import UserNavigator from "./User";
import AuthNavigator from "./Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../LoginScreen";
import SignUpScreen from "../SignUpScreen";
import HomeScreen from "../HomeScreen";
import AddProductScreen from "../AddProductScreen";

const Stack = createNativeStackNavigator();



const AppRoutes = () => {


    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
                headerMode: "screen",
                gestureEnabled: false,
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />

            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddProduct" component={AddProductScreen} />


        </Stack.Navigator>
    );
};
export default AppRoutes;
