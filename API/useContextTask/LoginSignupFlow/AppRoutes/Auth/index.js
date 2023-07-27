import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../LoginScreen";
import SignUpScreen from "../../SignUpScreen";
import UserNavigator from "../User";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return (

        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }} >

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />


        </Stack.Navigator>

    );
};
export default AuthNavigator;
